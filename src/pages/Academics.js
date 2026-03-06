import { useState } from 'react';
import './Academics.css';

const navItems = [
  { id: 'about-curriculum', label: 'About the Curriculum' },
  { id: 'principal-message', label: "Principal's Message" },
  { id: 'subject-offered', label: 'Subject Offered' },
  { id: 'student-placements', label: 'Student Placements' },
  { id: 'hall-of-fame', label: 'Hall of Fame' },
];

const scholasticSubjects = [
  'English',
  'Language (Hindi / Tamil / Sanskrit / French / German)',
  'Mathematics',
  'Science',
  'Social Science',
];

const skillSubjects = [
  'Computer Education',
  'Physical Training',
  'Music (Western, Indian)',
  'Dance (Western, Indian)',
  'Yoga',
  'Arts',
  'NCC / Scouts / Girl Guides / Bulbuls / Cubs',
];

const personalityHours = [
  'Life Skills Activities (LSA)',
  'Value Based Spiritual Education (VBSE)',
  'Dramatics & Expression',
];

const hallOfFameByYear = [
  {
    year: '2020 - 2021',
    classXII: [
      {
        name: 'U. Harsha Veena',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=260&h=260&fit=crop',
      },
      {
        name: 'Aaditya Vijay',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=260&h=260&fit=crop',
      },
      {
        name: 'S. Roshni Ananya',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=260&h=260&fit=crop',
      },
      {
        name: 'Vidya Prabakaran Vishal',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
      {
        name: 'M. Nikketha',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'N. Prathyukksha',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=260&h=260&fit=crop',
      },
      {
        name: 'Sandhya Agarwal',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=260&h=260&fit=crop',
      },
      {
        name: 'B. Abishaeek',
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=260&h=260&fit=crop',
      },
      {
        name: 'Delisha Tonia B.',
        image: 'https://images.unsplash.com/photo-1542204625-de293a9b7b55?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2019 - 2020',
    classXII: [
      {
        name: 'R. Aditya Narayan',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=260&h=260&fit=crop',
      },
      {
        name: 'P. Gayathri',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=260&h=260&fit=crop',
      },
      {
        name: 'K. Monisha',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1544005316-04ce1d5f89ec?w=260&h=260&fit=crop',
      },
      {
        name: 'S. Vihaan',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'D. Shreya',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=260&h=260&fit=crop',
      },
      {
        name: 'Arjun Prasad',
        image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=260&h=260&fit=crop',
      },
      {
        name: 'R. Nikitha',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=260&h=260&fit=crop',
      },
      {
        name: 'V. Harish',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2018 - 2019',
    classXII: [
      {
        name: 'L. Sahana',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=260&h=260&fit=crop',
      },
      {
        name: 'M. Rohith',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=260&h=260&fit=crop',
      },
      {
        name: 'A. Priyal',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=260&h=260&fit=crop',
      },
      {
        name: 'Y. Calvin',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'N. Janani',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=260&h=260&fit=crop',
      },
      {
        name: 'T. Abhinav',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=260&h=260&fit=crop',
      },
      {
        name: 'S. Lavanya',
        image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=260&h=260&fit=crop',
      },
      {
        name: 'P. Naveen',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2017 - 2018',
    classXII: [
      {
        name: 'J. Tarun',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=260&h=260&fit=crop',
      },
      {
        name: 'P. Keerthana',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1542204625-de293a9b7b55?w=260&h=260&fit=crop',
      },
      {
        name: 'H. Akash',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=260&h=260&fit=crop',
      },
      {
        name: 'S. Nivetha',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1525875975471-999f65706a10?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'R. Chinmayi',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=260&h=260&fit=crop',
      },
      {
        name: 'K. Pradeep',
        image: 'https://images.unsplash.com/photo-1541298642762-e0ac9f658fc5?w=260&h=260&fit=crop',
      },
      {
        name: 'I. Megha',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
      {
        name: 'A. Karthik',
        image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2016 - 2017',
    classXII: [
      {
        name: 'G. Niharika',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=260&h=260&fit=crop',
      },
      {
        name: 'M. Dhanush',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1549834125-82d87b3f8f23?w=260&h=260&fit=crop',
      },
      {
        name: 'L. Kezia',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=260&h=260&fit=crop',
      },
      {
        name: 'V. Revanth',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'T. Bhavya',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=260&h=260&fit=crop',
      },
      {
        name: 'N. Mohammed Irfan',
        image: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=260&h=260&fit=crop',
      },
      {
        name: 'S. Meera',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
      {
        name: 'R. Vimal',
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2015 - 2016',
    classXII: [
      {
        name: 'S. Harini',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=260&h=260&fit=crop',
      },
      {
        name: 'A. Ritesh',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=260&h=260&fit=crop',
      },
      {
        name: 'M. Janhavi',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
      {
        name: 'D. Rahul',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'P. Niveditha',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=260&h=260&fit=crop',
      },
      {
        name: 'K. Ashwin',
        image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=260&h=260&fit=crop',
      },
      {
        name: 'V. Sneha',
        image: 'https://images.unsplash.com/photo-1542204625-de293a9b7b55?w=260&h=260&fit=crop',
      },
      {
        name: 'H. Aravind',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2014 - 2015',
    classXII: [
      {
        name: 'A. Nandini',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=260&h=260&fit=crop',
      },
      {
        name: 'R. Samuel',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=260&h=260&fit=crop',
      },
      {
        name: 'P. Aishwarya',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=260&h=260&fit=crop',
      },
      {
        name: 'V. Kishore',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'J. Sreelekha',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=260&h=260&fit=crop',
      },
      {
        name: 'M. Yogan',
        image: 'https://images.unsplash.com/photo-1541298642762-e0ac9f658fc5?w=260&h=260&fit=crop',
      },
      {
        name: 'D. Haritha',
        image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=260&h=260&fit=crop',
      },
      {
        name: 'N. Rahuldev',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2013 - 2014',
    classXII: [
      {
        name: 'G. Lakshya',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=260&h=260&fit=crop',
      },
      {
        name: 'K. Shalini',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=260&h=260&fit=crop',
      },
      {
        name: 'T. Faizal',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=260&h=260&fit=crop',
      },
      {
        name: 'R. Hema',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1525875975471-999f65706a10?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'P. Vaishnavi',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
      {
        name: 'S. Arul',
        image: 'https://images.unsplash.com/photo-1549834125-82d87b3f8f23?w=260&h=260&fit=crop',
      },
      {
        name: 'L. Kavya',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=260&h=260&fit=crop',
      },
      {
        name: 'A. Gowtham',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2012 - 2013',
    classXII: [
      {
        name: 'M. Pranavi',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=260&h=260&fit=crop',
      },
      {
        name: 'R. Vinod',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=260&h=260&fit=crop',
      },
      {
        name: 'N. Isha',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1542204625-de293a9b7b55?w=260&h=260&fit=crop',
      },
      {
        name: 'D. Sanjay',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'S. Kriti',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
      {
        name: 'P. Arjunraj',
        image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=260&h=260&fit=crop',
      },
      {
        name: 'V. Nisha',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=260&h=260&fit=crop',
      },
      {
        name: 'G. Harishankar',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2011 - 2012',
    classXII: [
      {
        name: 'K. Suchithra',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=260&h=260&fit=crop',
      },
      {
        name: 'J. Harikrishnan',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=260&h=260&fit=crop',
      },
      {
        name: 'M. Poorna',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=260&h=260&fit=crop',
      },
      {
        name: 'A. Viswanath',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'B. Charulatha',
        image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=260&h=260&fit=crop',
      },
      {
        name: 'D. Jeevan',
        image: 'https://images.unsplash.com/photo-1541298642762-e0ac9f658fc5?w=260&h=260&fit=crop',
      },
      {
        name: 'S. Hansika',
        image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=260&h=260&fit=crop',
      },
      {
        name: 'R. Akhil',
        image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=260&h=260&fit=crop',
      },
    ],
  },
  {
    year: '2010 - 2011',
    classXII: [
      {
        name: 'N. Swetha',
        stream: 'Humanities',
        image: 'https://images.unsplash.com/photo-1544005316-04ce1d5f89ec?w=260&h=260&fit=crop',
      },
      {
        name: 'P. Muralidhar',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1549834125-82d87b3f8f23?w=260&h=260&fit=crop',
      },
      {
        name: 'L. Rithika',
        stream: 'Commerce',
        image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=260&h=260&fit=crop',
      },
      {
        name: 'T. Nishanth',
        stream: 'Science',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=260&h=260&fit=crop',
      },
    ],
    classX: [
      {
        name: 'A. Dharshini',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=260&h=260&fit=crop',
      },
      {
        name: 'G. Karthikeya',
        image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=260&h=260&fit=crop',
      },
      {
        name: 'M. Shefali',
        image: 'https://images.unsplash.com/photo-1542204625-de293a9b7b55?w=260&h=260&fit=crop',
      },
      {
        name: 'V. Pranav',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=260&h=260&fit=crop',
      },
    ],
  },
];

function Academics() {
  const [activeSection, setActiveSection] = useState('about-curriculum');
  const [selectedYear, setSelectedYear] = useState(hallOfFameByYear[0].year);
  const currentBatch =
    hallOfFameByYear.find((batch) => batch.year === selectedYear) || hallOfFameByYear[0];

  const renderSection = () => {
    if (activeSection === 'about-curriculum') {
      return (
        <section id="about-curriculum" className="ac-section">
          <h2 className="ac-heading">About the Curriculum</h2>
          <p>
            The Central Board of Secondary Education (CBSE) is one of the widely recognized boards
            of school education in India. The primary focus of CBSE is to make commendable efforts
            to evolve the common standards of education in India by making it more meaningful,
            relevant and life oriented. Curriculum innovation and curriculum development has
            therefore been a major concern of CBSE. The focus has also been on innovations in
            teaching and learning methodologies by devising student friendly and student centered
            paradigms.
          </p>
          <p>
            Loyalo School as an affiliated school follows the syllabus prepared by CBSE and
            conducts the All India Secondary School Examination for class X and the All India
            Senior School Certificate Examination for class XII.
          </p>

          <div className="ac-gallery3">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=620&fit=crop"
              alt="Student artwork"
            />
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&h=620&fit=crop"
              alt="Science lab"
            />
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&h=620&fit=crop"
              alt="Computer lab"
            />
          </div>
        </section>
      );
    }

    if (activeSection === 'principal-message') {
      return (
        <section id="principal-message" className="ac-section">
          <h2 className="ac-heading">Message from the Principals</h2>
          <div className="ac-principal-wrap">
            <div className="ac-principal-card">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=540&h=640&fit=crop"
                alt="Principal"
              />
              <h3>P. MUTHIAH</h3>
              <p>Principal - Senior School</p>
            </div>

            <div className="ac-principal-content">
              <p className="ac-quote">
                "Ambition is for acquisition; Aspiration is for excellence. We will not fuel our
                children here with ambition; we will fuel them with aspiration." <strong>Chariji
                Maharaj.</strong>
              </p>
              <p>
                Upon my graduation from School of Historical Studies, Madurai Kamaraj University
                and subsequent completion of M.Phil. in 1992, I began my career as a Trained
                Graduate Teacher in Delhi Public School as a teacher of Social Science. This was
                the beginning of an enriching journey that I hope to continue for many years to
                come.
              </p>
              <p>
                When I joined the school in 2010, I found education here is unique; where we, the
                teachers, train the learners to manifest the inner-knowledge that each and every
                child is naturally endowed with. This experience has strengthened my belief that
                passion and enthusiasm of students can move mountains.
              </p>
              <p>
                Real education is man-making. Students should enrich their knowledge not only to be
                skillful citizens of future, but also apply their knowledge and skills for the
                betterment of mankind. Our school continues to offer loving guidance so students
                excel in education and in life.
              </p>
            </div>
          </div>
        </section>
      );
    }

    if (activeSection === 'subject-offered') {
      return (
        <section id="subject-offered" className="ac-section">
          <h2 className="ac-heading">Subject Offered</h2>
          <div className="ac-subject-grid">
            <article>
              <h3>Scholastic Subjects</h3>
              <ul>
                {scholasticSubjects.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article>
              <h3>Skill / Non-Scholastic Subjects</h3>
              <ul>
                {skillSubjects.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article>
              <h3>Personality Development Hours</h3>
              <ul>
                {personalityHours.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="ac-stream-box">
            <h3>Senior Secondary Streams</h3>
            <p>
              <strong>Science Stream</strong>
              : Group S1 - English, Mathematics, Physics, Chemistry, Computer Science | Group S2 -
              English, Mathematics, Physics, Chemistry, Biology | Group S3 - English, Physics,
              Chemistry, Biology, Informatics Practices | Group S4 - English, Mathematics, Physics,
              Chemistry, Bio-technology.
            </p>
            <p>
              <strong>Additional Subjects (Class XI & XII)</strong>
              : Tamil, Hindi, French, Fashion Studies, Food Production, Physical Education, Web
              Application, Painting, Graphics Art, Sculpture, Bharatanatyam, Carnatic Music
              (Vocal), Psychology.
            </p>
          </div>
        </section>
      );
    }

    if (activeSection === 'student-placements') {
      return (
        <section id="student-placements" className="ac-section">
          <h2 className="ac-heading">Student Placements</h2>
          <p>
            Over the years, our students have gone on to pursue a myriad of courses across
            prestigious universities from across the globe. We are incredibly happy and proud to be
            part of their aspirations and continue to wish them well in all their endeavours.
          </p>
        </section>
      );
    }

    return (
      <section id="hall-of-fame" className="ac-section ac-hall">
        <h2 className="ac-heading">Hall of Fame</h2>
        <div className="ac-years" role="tablist" aria-label="Hall of Fame year batches">
          {hallOfFameByYear.map((batch) => (
            <button
              key={batch.year}
              type="button"
              className={`ac-year-btn ${selectedYear === batch.year ? 'is-active' : ''}`}
              onClick={() => setSelectedYear(batch.year)}
            >
              {batch.year}
            </button>
          ))}
        </div>

        <div className="ac-hall-grid">
          <article className="ac-hall-block">
            <h3>Class XII</h3>
            <ul className="ac-student-grid">
              {currentBatch.classXII.map((student) => (
                <li key={student.name} className="ac-student-card">
                  <img src={student.image} alt={student.name} />
                  <div>
                    <strong>{student.name}</strong>
                    <span>{student.stream}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="ac-hall-block">
            <h3>Class X</h3>
            <ul className="ac-student-grid">
              {currentBatch.classX.map((student) => (
                <li key={student.name} className="ac-student-card">
                  <img src={student.image} alt={student.name} />
                  <div>
                    <strong>{student.name}</strong>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    );
  };

  return (
    <div className="academics-page">
      <section className="ac-hero">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&h=760&fit=crop"
          alt="School campus"
        />
        <div className="ac-hero-overlay">
          <h1>Academics at Loyalo</h1>
          <p>Learning Pathways for Every Stage</p>
        </div>
      </section>

      <nav className="ac-subnav" aria-label="Academics section links">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`ac-subnav-item ${activeSection === item.id ? 'is-active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="ac-subnav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="ac-content-shell">{renderSection()}</div>
    </div>
  );
}

export default Academics;
