const express = require('express');
const { Prisma } = require('@prisma/client');
const prisma = require('../config/db');
const { parsePagination, buildPaginatedResponse } = require('../utils/api');

const router = express.Router();

function parseJsonArray(value) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

router.get('/site-settings', async (req, res, next) => {
  try {
    const settings = await prisma.siteSettings.findFirst();
    const menu = await prisma.menuSection.findMany({
      orderBy: { sortOrder: 'asc' },
      include: {
        items: {
          orderBy: { sortOrder: 'asc' },
        },
      },
    });
    res.json({ ...settings, menu });
  } catch (error) {
    next(error);
  }
});

router.get('/hero-slides', async (req, res, next) => {
  try {
    const slides = await prisma.heroSlide.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(slides);
  } catch (error) {
    next(error);
  }
});

router.get('/about', async (req, res, next) => {
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

router.get('/programs', async (req, res, next) => {
  try {
    const programs = await prisma.program.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(programs);
  } catch (error) {
    next(error);
  }
});

router.get('/faculty', async (req, res, next) => {
  try {
    const department = req.query.department && req.query.department !== 'All' ? String(req.query.department) : null;
    const faculty = await prisma.facultyMember.findMany({
      where: {
        status: 'PUBLISHED',
        ...(department ? { department } : {}),
      },
      orderBy: [{ department: 'asc' }, { name: 'asc' }],
    });
    res.json(faculty);
  } catch (error) {
    next(error);
  }
});

router.get('/gallery', async (req, res, next) => {
  try {
    const category = req.query.category && req.query.category !== 'All' ? String(req.query.category) : null;
    const items = await prisma.galleryItem.findMany({
      where: {
        status: 'PUBLISHED',
        ...(category ? { category } : {}),
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/notices', async (req, res, next) => {
  try {
    const type = req.query.type ? String(req.query.type).toUpperCase() : null;
    const { page, pageSize, skip, take } = parsePagination(req.query);
    const where = {
      status: 'PUBLISHED',
      ...(type ? { noticeType: type } : {}),
    };

    const [items, total] = await Promise.all([
      prisma.notice.findMany({ where, skip, take, orderBy: [{ eventDate: 'desc' }, { createdAt: 'desc' }] }),
      prisma.notice.count({ where }),
    ]);

    res.json(buildPaginatedResponse({ items, total, page, pageSize }));
  } catch (error) {
    if (error instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({ message: 'Invalid notice type. Use NOTICE, NEWS, or EVENT.' });
    }
    next(error);
  }
});

router.get('/testimonials', async (req, res, next) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { sortOrder: 'asc' },
    });
    res.json(testimonials);
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

router.get('/dashboard-stats', async (req, res, next) => {
  try {
    const [programs, faculty, gallery, notices, testimonials] = await Promise.all([
      prisma.program.count(),
      prisma.facultyMember.count(),
      prisma.galleryItem.count(),
      prisma.notice.count(),
      prisma.testimonial.count(),
    ]);

    res.json({ programs, faculty, gallery, notices, testimonials });
  } catch (error) {
    next(error);
  }
});

router.get('/transport-info', async (req, res, next) => {
  try {
    const items = await prisma.transportInfo.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/uniform-info', async (req, res, next) => {
  try {
    const items = await prisma.uniformInfo.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/ebooks', async (req, res, next) => {
  try {
    const items = await prisma.ebookInfo.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/administrators', async (req, res, next) => {
  try {
    const items = await prisma.administrator.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/alumni', async (req, res, next) => {
  try {
    const items = await prisma.alumniProfile.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get('/blogs', async (req, res, next) => {
  try {
    const items = await prisma.blogPost.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
    res.json(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
