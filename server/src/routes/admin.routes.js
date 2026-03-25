const express = require('express');
const { z } = require('zod');
const prisma = require('../config/db');
const { requireAuth, requireAdmin } = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { sanitizeObject } = require('../utils/sanitize');
const { parsePagination, buildPaginatedResponse } = require('../utils/api');

const router = express.Router();

router.use(requireAuth, requireAdmin);

function parseJsonArray(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

const moduleMap = {
  heroSlides: {
    model: prisma.heroSlide,
    createSchema: z.object({
      title: z.string().min(1),
      subtitle: z.string().optional().nullable(),
      imageUrl: z.string().min(1),
      ctaLabel: z.string().optional().nullable(),
      ctaLink: z.string().optional().nullable(),
      sortOrder: z.coerce.number().optional(),
      status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
    }),
  },
  programs: {
    model: prisma.program,
    createSchema: z.object({
      title: z.string().min(1),
      category: z.string().min(1),
      description: z.string().min(1),
      duration: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      sortOrder: z.coerce.number().optional(),
      status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
    }),
  },
  faculty: {
    model: prisma.facultyMember,
    createSchema: z.object({
      name: z.string().min(1),
      designation: z.string().min(1),
      department: z.string().min(1),
      expertise: z.string().optional().nullable(),
      qualification: z.string().optional().nullable(),
      experience: z.string().optional().nullable(),
      email: z.string().email().optional().nullable().or(z.literal('')),
      linkedinUrl: z.string().optional().nullable(),
      driveUrl: z.string().optional().nullable(),
      photoUrl: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
    }),
  },
  gallery: {
    model: prisma.galleryItem,
    createSchema: z.object({
      title: z.string().min(1),
      category: z.string().min(1),
      description: z.string().optional().nullable(),
      mediaUrl: z.string().min(1),
      mediaType: z.enum(['image', 'video']).optional(),
      status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
    }),
  },
  notices: {
    model: prisma.notice,
    createSchema: z.object({
      title: z.string().min(1),
      summary: z.string().min(1),
      content: z.string().optional().nullable(),
      noticeType: z.enum(['NOTICE', 'NEWS', 'EVENT']),
      eventDate: z.string().optional().nullable(),
      eventTime: z.string().optional().nullable(),
      category: z.string().optional().nullable(),
      tag: z.string().optional().nullable(),
      externalUrl: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
    }),
  },
  testimonials: {
    model: prisma.testimonial,
    createSchema: z.object({
      personName: z.string().min(1),
      roleLabel: z.string().optional().nullable(),
      quote: z.string().min(1),
      photoUrl: z.string().optional().nullable(),
      rating: z.coerce.number().int().min(1).max(5).optional(),
      sortOrder: z.coerce.number().optional(),
      status: z.enum(['DRAFT', 'PUBLISHED']).optional(),
    }),
  },
};

const idSchema = z.object({ id: z.string().min(1) });

router.get('/site-settings', async (req, res, next) => {
  try {
    const [settings, menu] = await Promise.all([
      prisma.siteSettings.findFirst(),
      prisma.menuSection.findMany({
        orderBy: { sortOrder: 'asc' },
        include: { items: { orderBy: { sortOrder: 'asc' } } },
      }),
    ]);
    res.json({ ...settings, menu });
  } catch (error) {
    next(error);
  }
});

router.put('/site-settings', async (req, res, next) => {
  try {
    const payload = sanitizeObject(req.body);
    const { menu = [], ...settingsData } = payload;

    const existing = await prisma.siteSettings.findFirst();
    let settings;

    if (existing) {
      settings = await prisma.siteSettings.update({ where: { id: existing.id }, data: settingsData });
    } else {
      settings = await prisma.siteSettings.create({ data: settingsData });
    }

    if (Array.isArray(menu)) {
      await prisma.$transaction([
        prisma.menuItem.deleteMany(),
        prisma.menuSection.deleteMany(),
      ]);

      for (let i = 0; i < menu.length; i += 1) {
        const section = menu[i];
        await prisma.menuSection.create({
          data: {
            label: section.label || `Section ${i + 1}`,
            sortOrder: i,
            items: {
              create: Array.isArray(section.items)
                ? section.items.map((item, index) => ({
                    label: item.label || `Item ${index + 1}`,
                    href: item.href || '/',
                    sortOrder: index,
                  }))
                : [],
            },
          },
        });
      }
    }

    const savedMenu = await prisma.menuSection.findMany({
      orderBy: { sortOrder: 'asc' },
      include: { items: { orderBy: { sortOrder: 'asc' } } },
    });

    res.json({ ...settings, menu: savedMenu });
  } catch (error) {
    next(error);
  }
});

router.get('/about-content', async (req, res, next) => {
  try {
    const about = await prisma.aboutContent.findFirst();
    if (!about) return res.json(null);
    res.json({
      ...about,
      curriculumStandards: parseJsonArray(about.curriculumStandards),
      teachingMethods: parseJsonArray(about.teachingMethods),
    });
  } catch (error) {
    next(error);
  }
});

router.put('/about-content', async (req, res, next) => {
  try {
    const payload = sanitizeObject(req.body);
    const schema = z.object({
      shortTitle: z.string().min(1),
      shortDescription: z.string().min(1),
      longTitle: z.string().min(1),
      longDescription: z.string().min(1),
      learningApproach: z.string().min(1),
      videoUrl: z.string().optional().nullable(),
      videoPosterUrl: z.string().optional().nullable(),
      curriculumStandards: z.array(z.string()).default([]),
      teachingMethods: z.array(z.string()).default([]),
    });

    const parsed = schema.parse(payload);
    const persisted = {
      ...parsed,
      curriculumStandards: JSON.stringify(parsed.curriculumStandards || []),
      teachingMethods: JSON.stringify(parsed.teachingMethods || []),
    };
    const existing = await prisma.aboutContent.findFirst();

    const about = existing
      ? await prisma.aboutContent.update({ where: { id: existing.id }, data: persisted })
      : await prisma.aboutContent.create({ data: persisted });

    res.json({
      ...about,
      curriculumStandards: parseJsonArray(about.curriculumStandards),
      teachingMethods: parseJsonArray(about.teachingMethods),
    });
  } catch (error) {
    next(error);
  }
});

router.get('/admissions', async (req, res, next) => {
  try {
    const admissions = await prisma.admissionInfo.findFirst();
    if (!admissions) return res.json(null);
    res.json({
      ...admissions,
      processSteps: parseJsonArray(admissions.processSteps),
      requirements: parseJsonArray(admissions.requirements),
    });
  } catch (error) {
    next(error);
  }
});

router.put('/admissions', async (req, res, next) => {
  try {
    const payload = sanitizeObject(req.body);
    const schema = z.object({
      heading: z.string().min(1),
      description: z.string().min(1),
      processSteps: z.array(z.string()).default([]),
      requirements: z.array(z.string()).default([]),
      ctaLabel: z.string().optional().nullable(),
      ctaLink: z.string().optional().nullable(),
    });
    const parsed = schema.parse(payload);
    const persisted = {
      ...parsed,
      processSteps: JSON.stringify(parsed.processSteps || []),
      requirements: JSON.stringify(parsed.requirements || []),
    };

    const existing = await prisma.admissionInfo.findFirst();
    const admissions = existing
      ? await prisma.admissionInfo.update({ where: { id: existing.id }, data: persisted })
      : await prisma.admissionInfo.create({ data: persisted });

    res.json({
      ...admissions,
      processSteps: parseJsonArray(admissions.processSteps),
      requirements: parseJsonArray(admissions.requirements),
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:module', async (req, res, next) => {
  try {
    const config = moduleMap[req.params.module];
    if (!config) {
      return res.status(404).json({ message: 'Module not found' });
    }

    const { page, pageSize, skip, take } = parsePagination(req.query);

    const [items, total] = await Promise.all([
      config.model.findMany({ skip, take, orderBy: { createdAt: 'desc' } }),
      config.model.count(),
    ]);

    res.json(buildPaginatedResponse({ items, total, page, pageSize }));
  } catch (error) {
    next(error);
  }
});

router.post('/:module', async (req, res, next) => {
  try {
    const config = moduleMap[req.params.module];
    if (!config) {
      return res.status(404).json({ message: 'Module not found' });
    }

    const payload = config.createSchema.parse(sanitizeObject(req.body));
    const item = await config.model.create({ data: payload });
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
});

router.put('/:module/:id', validate(idSchema, 'params'), async (req, res, next) => {
  try {
    const config = moduleMap[req.params.module];
    if (!config) {
      return res.status(404).json({ message: 'Module not found' });
    }

    const payload = config.createSchema.partial().parse(sanitizeObject(req.body));
    const item = await config.model.update({ where: { id: req.params.id }, data: payload });
    res.json(item);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Record not found' });
    }
    next(error);
  }
});

router.delete('/:module/:id', validate(idSchema, 'params'), async (req, res, next) => {
  try {
    const config = moduleMap[req.params.module];
    if (!config) {
      return res.status(404).json({ message: 'Module not found' });
    }

    await config.model.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Record not found' });
    }
    next(error);
  }
});

module.exports = router;
