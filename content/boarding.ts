// Boarding Program Content - Edit this file to customize boarding page

export interface BoardingImage {
  src: string;
  alt: string;
}

export interface BoardingContent {
  hero: {
    title: string;
    backgroundImage: string;
  };
  overview: {
    title: string;
    descriptionLeft: string;
    descriptionRight: string;
  };
  gallery: BoardingImage[];
  video: {
    title: string;
    thumbnailImage: string;
    videoUrl: string;
  };
  brochure: {
    text: string;
    downloadUrl: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export const boardingContent: BoardingContent = {
  hero: {
    title: "Boarding Program",
    backgroundImage: "/hero_image_1.webp",
  },

  overview: {
    title: "Boarding Program",
    descriptionLeft:
      "Our School Boarding Programme (SBP) has been established as a complementary programme in furtherance of the School's effort to provide a diverse school experience. It offers a unique and holistic development of its students. The Programme will provide a home away from home experience for students. As such, the SBP offers a nurturing, caring and supportive atmosphere with a wide range of activities and experiences in support of student learning, growth and development.",
    descriptionRight:
      "SBP is designed to contribute to the development of learner attributes including the core values highlighted in the school's Guiding Statement and dispositions of independence, understanding, communication, sense of responsibility, resilience and adaptability, among others. Our experienced house parents and staff ensure every boarder feels safe, supported, and part of our extended family.",
  },

  gallery: [
    { src: "/program1.webp", alt: "Dormitory common room" },
    { src: "/program2.webp", alt: "Student rooms" },
    { src: "/program3.webp", alt: "Dining area" },
    { src: "/event-image-1.webp", alt: "Recreation activities" },
    { src: "/event-image-2.webp", alt: "Study time" },
    { src: "/event-image-3.webp", alt: "Outdoor activities" },
    { src: "/hero_image_2.webp", alt: "Boarding house exterior" },
    { src: "/hero_image_3.webp", alt: "Weekend activities" },
  ],

  video: {
    title: "The Boarding Program Welcome Barbecue",
    thumbnailImage: "/hero_image_1.webp",
    videoUrl: "https://www.youtube.com/watch?v=example",
  },

  brochure: {
    text: "Download Boarding Brochure",
    downloadUrl: "/brochure.pdf",
  },

  features: [
    {
      icon: "mdi:home-heart",
      title: "Home Away From Home",
      description: "Comfortable living spaces with modern amenities and 24/7 supervision.",
    },
    {
      icon: "mdi:food-apple",
      title: "Nutritious Meals",
      description: "Three balanced meals daily plus healthy snacks prepared by our kitchen staff.",
    },
    {
      icon: "mdi:book-open-page-variant",
      title: "Supervised Study",
      description: "Structured evening study sessions with academic support from tutors.",
    },
    {
      icon: "mdi:run-fast",
      title: "Recreation & Sports",
      description: "Organized weekend activities, sports, and entertainment programs.",
    },
  ],
};

export default boardingContent;
