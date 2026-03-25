const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedUser() {
  const adminEmail = process.env.DEFAULT_ADMIN_EMAIL || 'admin@loyalo.local';
  const adminPassword = process.env.DEFAULT_ADMIN_PASSWORD || 'Admin@123';

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (existing) return;

  const passwordHash = await bcrypt.hash(adminPassword, 12);
  await prisma.user.create({
    data: {
      name: 'Loyalo Admin',
      email: adminEmail,
      passwordHash,
      role: 'ADMIN',
    },
  });
}

async function seedSiteSettings() {
  const existing = await prisma.siteSettings.findFirst();
  if (existing) return;

  await prisma.siteSettings.create({
    data: {
      schoolName: 'Loyalo School',
      contactPhone: '044 6624 1130 / 1117',
      contactEmail: 'info@loyalo.org',
      address: '79, Omega School Road (Pallavaram Road), Kolapakkam, Kovur Post, Chennai, Tamil Nadu 600128.',
      socialFacebook: '#',
      socialInstagram: '#',
      socialLinkedin: '#',
      socialYoutube: '#',
      footerTagline: 'Excellence in Education',
    },
  });

  await prisma.menuSection.createMany({
    data: [
      { label: 'ABOUT', sortOrder: 0 },
      { label: 'STUDENT LIFE', sortOrder: 1 },
      { label: 'ADMINISTRATION', sortOrder: 2 },
      { label: 'RESOURCES', sortOrder: 3 },
    ],
  });

  const sections = await prisma.menuSection.findMany({ orderBy: { sortOrder: 'asc' } });
  const [about, life, admin, resources] = sections;

  await prisma.menuItem.createMany({
    data: [
      { menuSectionId: about.id, label: 'School Overview', href: '/about', sortOrder: 0 },
      { menuSectionId: about.id, label: 'Facilities', href: '/about', sortOrder: 1 },
      { menuSectionId: life.id, label: 'Academics', href: '/academics', sortOrder: 0 },
      { menuSectionId: life.id, label: 'Events', href: '/events', sortOrder: 1 },
      { menuSectionId: life.id, label: 'Food At Loyalo', href: '/food-at-loyalo', sortOrder: 2 },
      { menuSectionId: admin.id, label: 'Administrators', href: '/administrators', sortOrder: 0 },
      { menuSectionId: admin.id, label: 'Faculty & Staff', href: '/faculty', sortOrder: 1 },
      { menuSectionId: resources.id, label: 'Books/E-Books', href: '/resources/books', sortOrder: 0 },
      { menuSectionId: resources.id, label: 'Uniform', href: '/resources/uniform', sortOrder: 1 },
      { menuSectionId: resources.id, label: 'Transport & Bus Routes', href: '/resources/transport', sortOrder: 2 },
    ],
  });
}

async function seedHomeContent() {
  const slideCount = await prisma.heroSlide.count();
  if (!slideCount) {
    await prisma.heroSlide.createMany({
      data: [
        {
          title: 'Vibrant Student Activities',
          subtitle: 'Empowering students with values, skills, and confidence.',
          imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop',
          ctaLabel: 'Apply',
          ctaLink: '/admissions',
          sortOrder: 0,
        },
        {
          title: 'World-class Campus Infrastructure',
          subtitle: 'Safe, modern spaces where curiosity thrives.',
          imageUrl: 'https://images.unsplash.com/photo-1609819102775-07e76d9e0b1c?w=1200&h=400&fit=crop',
          ctaLabel: 'Book a visit',
          ctaLink: 'mailto:hello@loyalo.school',
          sortOrder: 1,
        },
        {
          title: 'Leadership & Collaboration',
          subtitle: 'Nurturing confident leaders for tomorrow.',
          imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=400&fit=crop',
          ctaLabel: 'Explore programs',
          ctaLink: '/academics',
          sortOrder: 2,
        },
      ],
    });
  }

  const aboutCount = await prisma.aboutContent.count();
  if (!aboutCount) {
    await prisma.aboutContent.create({
      data: {
        shortTitle: 'Nurturing Young Minds for Tomorrow\'s World',
        shortDescription: 'Loyalo School blends traditional values with modern learning to nurture academics, sports, arts, and character development.',
        longTitle: 'Academic credibility with modern standards.',
        longDescription: 'Our philosophy blends rigorous academics with future-ready competencies. Every unit is designed to grow curiosity, clarity of thought, and confident communication.',
        learningApproach: 'Learners engage through projects, labs, storytelling, debates, and service. Every semester culminates in an exhibition where students present, defend, and reflect on their work.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        videoPosterUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=600&fit=crop',
        curriculumStandards: JSON.stringify([
          'Digital textbooks aligned to national curriculum benchmarks with regular updates.',
          'Inquiry-based learning arcs that connect Science, Math, and Humanities to real contexts.',
          'Continuous assessment with feedback loops for parents and students.',
        ]),
        teachingMethods: JSON.stringify([
          'Concept-first instruction followed by guided practice and reflective journaling.',
          'Workshop model classrooms that include mini-lessons, collaboration, and showcases.',
          'Technology-assisted learning with safe, purposeful digital tools.',
        ]),
      },
    });
  }
}

async function seedProgramsFaculty() {
  const programCount = await prisma.program.count();
  if (!programCount) {
    await prisma.program.createMany({
      data: [
        { title: 'CBSE Curriculum', category: 'Scholastic', description: 'Structured program focused on conceptual depth and exam readiness.', duration: 'Grades 1-12', sortOrder: 0 },
        { title: 'STEM & Robotics', category: 'Skill', description: 'Hands-on coding, robotics, and innovation labs.', duration: 'Grades 6-12', sortOrder: 1 },
        { title: 'Arts & Expression', category: 'Co-curricular', description: 'Music, dance, visual arts, and public showcase opportunities.', duration: 'All Grades', sortOrder: 2 },
      ],
    });
  }

  const facultyCount = await prisma.facultyMember.count();
  if (!facultyCount) {
    await prisma.facultyMember.createMany({
      data: [
        {
          name: 'Dr. Meena Krishnamurthy',
          designation: 'Head of Department – Science',
          department: 'Science',
          expertise: 'Organic Chemistry & Biochemistry',
          qualification: 'Ph.D. Chemistry – IIT Madras',
          experience: '18 Years',
          email: 'meena.k@loyalo.edu',
          linkedinUrl: 'https://linkedin.com',
          driveUrl: 'https://drive.google.com',
          photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
        },
        {
          name: 'Mr. Rajesh Pillai',
          designation: 'Head of Department – Mathematics',
          department: 'Mathematics',
          expertise: 'Calculus, Statistics & Number Theory',
          qualification: 'M.Sc. Mathematics – Mahatma Gandhi University',
          experience: '20 Years',
          email: 'rajesh.p@loyalo.edu',
          linkedinUrl: 'https://linkedin.com',
          driveUrl: 'https://drive.google.com',
          photoUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces',
        },
        {
          name: 'Ms. Preethi Varghese',
          designation: 'Head of Department – Languages',
          department: 'Languages',
          expertise: 'English Literature & Creative Writing',
          qualification: 'M.A. English Literature – University of Mysore',
          experience: '14 Years',
          email: 'preethi.v@loyalo.edu',
          linkedinUrl: 'https://linkedin.com',
          driveUrl: 'https://drive.google.com',
          photoUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=faces',
        },
      ],
    });
  }
}

async function seedMediaAndNotices() {
  const galleryCount = await prisma.galleryItem.count();
  if (!galleryCount) {
    await prisma.galleryItem.createMany({
      data: [
        {
          title: 'Classroom Learning Sessions',
          category: 'Academics',
          description: 'Interactive classroom sessions where curiosity meets knowledge every single day.',
          mediaUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
        },
        {
          title: 'Annual Sports Day',
          category: 'Sports',
          description: 'A day full of energy, competition, and sportsmanship on our athletics field.',
          mediaUrl: 'https://images.unsplash.com/photo-1546519638399-1f8b7a9eda49?w=800&h=600&fit=crop',
        },
        {
          title: 'Annual Prize Distribution',
          category: 'Events',
          description: 'Celebrating student excellence at the Annual Prize Distribution Ceremony.',
          mediaUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
        },
      ],
    });
  }

  const noticeCount = await prisma.notice.count();
  if (!noticeCount) {
    await prisma.notice.createMany({
      data: [
        {
          title: 'Annual Sports Day',
          summary: 'Inter-house sports competition featuring track, field, and team games.',
          noticeType: 'EVENT',
          eventDate: new Date('2026-01-25'),
          eventTime: '09:00 AM - 03:00 PM',
          category: 'Campus Event',
        },
        {
          title: 'Science Exhibition',
          summary: 'Student-led prototypes and experiments showcasing practical innovation.',
          noticeType: 'EVENT',
          eventDate: new Date('2026-01-28'),
          eventTime: '11:00 AM - 01:30 PM',
          category: 'Academics',
        },
        {
          title: 'Annual Science Exhibition Success',
          summary: 'Students won multiple awards for practical innovation and collaboration.',
          noticeType: 'NEWS',
          eventDate: new Date('2026-01-15'),
          externalUrl: 'https://www.instagram.com/p/example1/',
          imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop',
        },
        {
          title: 'Holiday Notice',
          summary: 'School will remain closed on Jan 26 for Republic Day celebrations.',
          noticeType: 'NOTICE',
          tag: 'Holiday',
        },
      ],
    });
  }

  const testimonialCount = await prisma.testimonial.count();
  if (!testimonialCount) {
    await prisma.testimonial.createMany({
      data: [
        {
          personName: 'Ananya Rao',
          roleLabel: 'Parent',
          quote: 'The school has transformed my child into a confident and curious learner.',
          rating: 5,
          sortOrder: 0,
        },
        {
          personName: 'Rahul Menon',
          roleLabel: 'Alumni',
          quote: 'Loyalo gave me mentors, opportunities, and a strong foundation for university.',
          rating: 5,
          sortOrder: 1,
        },
      ],
    });
  }

  const admissionCount = await prisma.admissionInfo.count();
  if (!admissionCount) {
    await prisma.admissionInfo.create({
      data: {
        heading: 'Admissions Open For 2026-27',
        description: 'Join a learning community focused on academic excellence, values, and holistic development.',
        processSteps: JSON.stringify(['Submit online inquiry form', 'Attend campus interaction', 'Complete student assessment', 'Confirm admission and fee payment']),
        requirements: JSON.stringify(['Birth certificate copy', 'Previous academic records', 'Address proof', 'Passport-size photographs']),
        ctaLabel: 'Start Application',
        ctaLink: 'mailto:admissions@loyalo.org',
      },
    });
  }
}

async function main() {
  await seedUser();
  await seedSiteSettings();
  await seedHomeContent();
  await seedProgramsFaculty();
  await seedMediaAndNotices();
}

main()
  .then(async () => {
    console.log('Seed completed successfully.');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
