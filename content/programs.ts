// Programs Content - Edit this file to customize academic programs

export interface SchoolLevel {
  id: string;
  name: string;
  shortName: string;
  ageRange: string;
  description: string;
  image: string;
  highlights: string[];
  subjects: string[];
}

export interface CurriculumFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProgramsContent {
  overview: {
    title: string;
    subtitle: string;
    description: string;
  };
  levels: SchoolLevel[];
  curriculumFeatures: CurriculumFeature[];
  whyChooseUs: {
    title: string;
    subtitle: string;
    description: string;
    points: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  extracurriculars: {
    title: string;
    activities: {
      category: string;
      items: string[];
    }[];
  };
}

export const programsContent: ProgramsContent = {
  overview: {
    title: "Academic Excellence at Every Level",
    subtitle: "Our Programs",
    description: "We provide a comprehensive education from nursery through senior high school, following the Ghana Education Service curriculum while incorporating modern teaching methodologies and technology-enhanced learning.",
  },

  levels: [
    {
      id: "nursery",
      name: "Nursery & Kindergarten",
      shortName: "Nursery",
      ageRange: "1 - 5 years",
      description: "A nurturing environment where young learners develop foundational skills through play-based learning, creativity, and early literacy programs.",
      image: "/program1.webp",
      highlights: [
        "Play-based learning approach",
        "Early reading and numeracy",
        "Creative arts and music",
        "Physical development activities",
        "Social skills development",
      ],
      subjects: [
        "Language & Literacy",
        "Numeracy",
        "Creative Arts",
        "Physical Education",
        "Environmental Studies",
      ],
    },
    {
      id: "primary",
      name: "Primary School",
      shortName: "Primary",
      ageRange: "6 - 11 years",
      description: "Building strong academic foundations with a balanced curriculum that develops critical thinking, creativity, and character.",
      image: "/program2.webp",
      highlights: [
        "GES approved curriculum",
        "ICT integration",
        "Library and reading programs",
        "Science laboratory access",
        "Extra-curricular activities",
      ],
      subjects: [
        "English Language",
        "Mathematics",
        "Science",
        "Social Studies",
        "ICT",
        "Creative Arts",
        "Ghanaian Language",
        "Religious & Moral Education",
        "French",
      ],
    },
    {
      id: "jhs",
      name: "Junior High School",
      shortName: "JHS",
      ageRange: "12 - 14 years",
      description: "Preparing students for BECE examinations with rigorous academics, practical skills, and character development.",
      image: "/program3.webp",
      highlights: [
        "BECE preparation",
        "Subject specialization",
        "Career guidance",
        "Leadership programs",
        "Sports and clubs",
      ],
      subjects: [
        "English Language",
        "Mathematics",
        "Integrated Science",
        "Social Studies",
        "ICT",
        "Basic Design & Technology",
        "French",
        "Ghanaian Language",
        "Religious & Moral Education",
      ],
    },
    {
      id: "shs",
      name: "Senior High School",
      shortName: "SHS",
      ageRange: "15 - 18 years",
      description: "Comprehensive pre-tertiary education with multiple program tracks preparing students for WASSCE and higher education.",
      image: "/program4.webp",
      highlights: [
        "Multiple program tracks",
        "WASSCE excellence",
        "University preparation",
        "Scholarship opportunities",
        "Career counseling",
      ],
      subjects: [
        "Core Mathematics",
        "Core English",
        "Core Science",
        "Social Studies",
        "Elective subjects based on program",
      ],
    },
  ],

  curriculumFeatures: [
    {
      icon: "mdi:book-education-outline",
      title: "GES Approved Curriculum",
      description: "Our curriculum follows all Ghana Education Service standards while incorporating international best practices.",
    },
    {
      icon: "mdi:laptop",
      title: "Technology Integration",
      description: "Modern ICT facilities and digital learning tools enhance the educational experience across all levels.",
    },
    {
      icon: "mdi:account-group-outline",
      title: "Small Class Sizes",
      description: "Maintaining optimal teacher-to-student ratios ensures personalized attention for every learner.",
    },
    {
      icon: "mdi:trophy-outline",
      title: "Academic Excellence",
      description: "Consistent outstanding performance in BECE and WASSCE examinations, with many students earning university placements.",
    },
  ],

  whyChooseUs: {
    title: "Why Choose Our School?",
    subtitle: "The Difference",
    description: "We go beyond academics to develop well-rounded individuals prepared for the future.",
    points: [
      {
        icon: "mdi:shield-check-outline",
        title: "Safe Environment",
        description: "Secure campus with trained staff ensuring student safety at all times.",
      },
      {
        icon: "mdi:school-outline",
        title: "Qualified Teachers",
        description: "Experienced and certified educators passionate about student success.",
      },
      {
        icon: "mdi:flask-outline",
        title: "Modern Facilities",
        description: "Well-equipped classrooms, science labs, computer lab, and library.",
      },
      {
        icon: "mdi:heart-outline",
        title: "Character Development",
        description: "Values-based education fostering integrity, respect, and responsibility.",
      },
    ],
  },

  extracurriculars: {
    title: "Beyond The Classroom",
    activities: [
      {
        category: "Sports",
        items: ["Football", "Basketball", "Athletics", "Table Tennis", "Volleyball"],
      },
      {
        category: "Arts & Culture",
        items: ["Drama Club", "Music & Choir", "Dance", "Debate Club", "Art Club"],
      },
      {
        category: "Academic Clubs",
        items: ["Science Club", "Math Club", "Reading Club", "French Club", "ICT Club"],
      },
      {
        category: "Leadership",
        items: ["Prefect System", "SRC", "Scouts/Guides", "Environmental Club", "Community Service"],
      },
    ],
  },
};

export default programsContent;
