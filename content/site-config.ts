// Site Configuration - Global settings for the entire website
// Edit this file to customize school name, contact info, branding, etc.

export interface SiteConfig {
  // School Identity
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  foundedYear: number;
  yearsOfExperience: number;

  // Contact Information
  contact: {
    email: string;
    phone: string[];
    address: {
      street: string;
      city: string;
      country: string;
      full: string;
    };
    workingHours: {
      weekdays: string;
      saturday: string;
    };
  };

  // Social Media Links
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
    twitter: string;
    whatsapp: string;
  };

  // SEO & Meta
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  // Assets
  logo: {
    dark: string;
    light: string;
  };

  // Navigation Links
  footerLinks: {
    campus: string[];
    pages: string[];
  };
}

export const siteConfig: SiteConfig = {
  // School Identity
  name: "Unipix University",
  shortName: "Unipix",
  tagline: "Where Knowledge Meets Inspiration",
  description: "A place for learning and growth, where every individual's educational journey is valued.",
  foundedYear: 1971,
  yearsOfExperience: 53,

  // Contact Information
  contact: {
    email: "info@unipix.edu",
    phone: ["+44 20 4154 2541", "+44 20 4154 2542"],
    address: {
      street: "400 Broome St",
      city: "New York",
      country: "USA",
      full: "400 Broome St, New York, NY 10013, USA",
    },
    workingHours: {
      weekdays: "Mon-Fri: 9 AM – 6 PM",
      saturday: "Saturday: 9 AM – 4 PM",
    },
  },

  // Social Media Links
  social: {
    facebook: "https://facebook.com/unipix",
    instagram: "https://instagram.com/unipix",
    linkedin: "https://linkedin.com/company/unipix",
    youtube: "https://youtube.com/unipix",
    twitter: "https://twitter.com/unipix",
    whatsapp: "https://wa.me/442041542541",
  },

  // SEO & Meta
  seo: {
    title: "Unipix University - Where Knowledge Meets Inspiration",
    description: "Welcome to Unipix University - A place for learning and growth, where every individual's educational journey is valued.",
    keywords: ["university", "education", "learning", "academic", "school"],
  },

  // Assets
  logo: {
    dark: "/school_logo_dark.svg",
    light: "/school_logo_light.svg",
  },

  // Footer Navigation Links
  footerLinks: {
    campus: ["Academic", "Athletics", "Campus Life", "Research", "Academic Area"],
    pages: ["About", "Tuition Fee", "Alumni", "Faculty Staff", "Events"],
  },
};

export default siteConfig;
