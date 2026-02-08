// Home Page Content - Edit this file to customize the landing page
// This includes hero section, about section, and other homepage components

export interface HomeContent {
  hero: {
    slides: {
      image: string;
      title: string;
      subtitle: string;
    }[];
    cta: {
      primary: {
        text: string;
        href: string;
      };
      secondary: {
        text: string;
        href: string;
      };
    };
  };

  about: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    cta: {
      text: string;
      href: string;
    };
  };

  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    backgroundImage: string;
  };

  programs: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    items: {
      title: string;
      image: string;
      description: string;
    }[];
  };

  tuition: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    undergraduate: {
      title: string;
      sections: {
        name: string;
        fees: string[];
      }[];
    };
    graduate: {
      title: string;
      sections: {
        name: string;
        fees: string[];
      }[];
    };
  };

  events: {
    title: string;
    viewAllText: string;
    viewAllHref: string;
    items: {
      image: string;
      date: string;
      location: string;
      title: string;
    }[];
  };

  admission: {
    title: string;
    description: string;
    image: string;
    formTitle: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    slides: [
      {
        image: "/hero_image_1.webp",
        title: "Welcome to Excellence in Education",
        subtitle: "Empowering Minds, Shaping Futures",
      },
      {
        image: "/hero_image_2.webp",
        title: "Discover Your Potential",
        subtitle: "World-Class Learning Environment",
      },
      {
        image: "/hero_image_3.webp",
        title: "Join Our Community",
        subtitle: "Where Dreams Take Flight",
      },
    ],
    cta: {
      primary: {
        text: "Apply Now",
        href: "/admissions",
      },
      secondary: {
        text: "Learn More",
        href: "/about",
      },
    },
  },

  about: {
    title: "Embark on a Journey: Unveiling the Story of Unipix University",
    subtitle: "About Us",
    description: "Embark on a journey of knowledge, discovery, and growth at Unipix University. Our admissions process is designed to identify bright, motivated individuals who are eager to contribute to our dynamic academic community.",
    image: "/About_us_image.webp",
    cta: {
      text: "Learn More",
      href: "/about",
    },
  },

  newsletter: {
    title: "Don't Miss Awesome Story From Our Alumni",
    subtitle: "Subscribe to our newsletter",
    placeholder: "Enter your mail",
    buttonText: "Subscribe",
    backgroundImage: "/footer_image.webp",
  },

  programs: {
    title: "Our Programs",
    description: "Embark on a journey of knowledge, discovery, and growth at Unipix University. Our admissions process is designed to identify bright, motivated individuals who are eager to contribute to our dynamic academic community.",
    ctaText: "View All Program",
    ctaHref: "/programs",
    items: [
      {
        title: "Graduate Undergraduate",
        image: "/program1.webp",
        description: "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
      },
      {
        title: "Lifelong Learning",
        image: "/program2.webp",
        description: "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
      },
      {
        title: "Graduate Undergraduate",
        image: "/program3.webp",
        description: "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
      },
      {
        title: "Lifelong Learning",
        image: "/program4.webp",
        description: "Our experienced faculty and state-of-the-art facilities ensure that every child receives the best education possible.",
      },
    ],
  },

  tuition: {
    title: "Tuition Fees",
    description: "At Unipix University we are committed to providing a high-quality education that is accessible to a diverse range of students.",
    ctaText: "Plan Details",
    ctaHref: "/fees",
    undergraduate: {
      title: "Undergraduate Programs",
      sections: [
        {
          name: "College of Arts and Sciences",
          fees: [
            "Full-Time Tuition (per semester): $241",
            "Part-Time Tuition (per credit): $141",
          ],
        },
        {
          name: "School of Business",
          fees: [
            "Full-Time Tuition (per semester): $241",
            "Part-Time Tuition (per credit): $141",
          ],
        },
      ],
    },
    graduate: {
      title: "Graduate Programs",
      sections: [
        {
          name: "Graduate School/Department",
          fees: [
            "Full-Time Tuition (per semester): $241",
            "Part-Time Tuition (per credit): $141",
          ],
        },
        {
          name: "Additional Fees",
          fees: [
            "Technology Fee: $149 per semester",
            "Student Activity Fee: $99 per semester",
          ],
        },
      ],
    },
  },

  events: {
    title: "UPCOMING EVENT",
    viewAllText: "View All",
    viewAllHref: "/news",
    items: [
      {
        image: "/event-image-1.webp",
        date: "August 20, 2024",
        location: "Yarra Park, UK",
        title: "Cultural Exchange: Building Global Connections Through",
      },
      {
        image: "/event-image-2.webp",
        date: "August 20, 2024",
        location: "Yarra Park, UK",
        title: "Literary Voices: Celebrating Diverse Narratives in",
      },
      {
        image: "/event-image-3.webp",
        date: "August 20, 2024",
        location: "Yarra Park, UK",
        title: "Bridging Cultures: Global Perspectives in Contemporary",
      },
    ],
  },

  admission: {
    title: "Apply For Admission",
    description: "Welcome to the gateway of possibilities, your admission to Unipix University. At Unipix, we understand.",
    image: "/admission_image.webp",
    formTitle: "Application Form",
  },
};

export default homeContent;
