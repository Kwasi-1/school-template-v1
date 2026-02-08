// School Configuration - Edit this file to customize the template for your school

export interface SchoolConfig {
  // Basic Info
  name: string;
  shortName: string;
  motto: string;
  established: string;
  
  // Branding
  logo: {
    dark: string;
    light: string;
  };
  
  // Contact
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    address: string;
    city: string;
    region: string;
    poBox?: string;
  };
  
  // Social Media
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
  
  // School Levels Offered
  levels: Array<'nursery' | 'primary' | 'jhs' | 'shs'>;
  
  // Features (enable/disable pages)
  features: {
    onlineApplication: boolean;
    paymentIntegration: boolean;
    gallery: boolean;
    blog: boolean;
    alumni: boolean;
    virtualTour: boolean;
  };
}

export const schoolConfig: SchoolConfig = {
  // Basic Info
  name: "Greenwood International School",
  shortName: "GIS",
  motto: "Excellence in Education, Character for Life",
  established: "2005",
  
  // Branding
  logo: {
    dark: "/school_logo_dark.svg",
    light: "/school_logo_light.svg",
  },
  
  // Contact
  contact: {
    phone: "+233 24 123 4567",
    whatsapp: "+233 24 123 4567",
    email: "info@greenwoodschool.edu.gh",
    address: "123 Education Street, East Legon",
    city: "Accra",
    region: "Greater Accra",
    poBox: "P.O. Box CT 1234",
  },
  
  // Social Media
  social: {
    facebook: "https://facebook.com/greenwoodschool",
    instagram: "https://instagram.com/greenwoodschool",
    twitter: "https://twitter.com/greenwoodschool",
    youtube: "https://youtube.com/greenwoodschool",
  },
  
  // School Levels
  levels: ['nursery', 'primary', 'jhs', 'shs'],
  
  // Features
  features: {
    onlineApplication: true,
    paymentIntegration: false,
    gallery: true,
    blog: true,
    alumni: false,
    virtualTour: false,
  },
};

export default schoolConfig;
