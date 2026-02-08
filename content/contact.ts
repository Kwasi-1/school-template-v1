// Contact Page Content - Edit this file to customize the Contact page
// Includes contact info, campus locations, form configuration

export interface ContactContent {
  overview: {
    title: string;
    subtitle: string;
    description: string;
  };

  generalContact: {
    title: string;
    items: {
      type: "location" | "phone" | "hours" | "email";
      label: string;
      info: string[];
    }[];
  };

  campuses: {
    name: string;
    address: string;
    phone: string;
    email: string;
    image: string;
    mapUrl?: string;
    embedUrl?: string;
    coordinates?: { lat: number; lng: number };
  }[];

  form: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      label: string;
      type: string;
      placeholder: string;
      required: boolean;
    }[];
    submitText: string;
    successMessage: string;
  };
}

export const contactContent: ContactContent = {
  overview: {
    title: "Contact Us",
    subtitle: "Get in Touch",
    description: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  },

  generalContact: {
    title: "General Contact Information",
    items: [
      {
        type: "location",
        label: "Location",
        info: ["400 Broome St, New York,", "NY 10013, USA"],
      },
      {
        type: "phone",
        label: "Phone",
        info: ["+44 20 4154 2541", "+44 20 4154 2542"],
      },
      {
        type: "hours",
        label: "Working Hours",
        info: ["Mon-Fri: 9 AM – 6 PM", "Saturday: 9 AM – 4 PM"],
      },
    ],
  },

  campuses: [
    {
      name: "Main Campus",
      address: "400 Broome St, New York, NY 10013",
      phone: "+44 20 4154 2541",
      email: "main@unipix.edu",
      image: "/london.webp",
      mapUrl: "https://maps.google.com/maps?q=400+Broome+St,+New+York,+NY+10013",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.959629259387!2d-74.00097068459463!3d40.72145697933033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2s400%20Broome%20St%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1234567890",
      coordinates: { lat: 40.721457, lng: -74.001971 },
    },
    {
      name: "Science Campus",
      address: "123 Research Ave, New York, NY 10014",
      phone: "+44 20 4154 2543",
      email: "science@unipix.edu",
      image: "/newyork.webp",
      mapUrl: "https://maps.google.com/maps?q=123+Research+Ave,+New+York,+NY+10014",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.959629259387!2d-74.00097068459463!3d40.72145697933033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sNew%20York!5e0!3m2!1sen!2sus!4v1234567890",
      coordinates: { lat: 40.730610, lng: -73.935242 },
    },
    {
      name: "Arts Campus",
      address: "456 Creative Blvd, New York, NY 10015",
      phone: "+44 20 4154 2544",
      email: "arts@unipix.edu",
      image: "/Boston.webp",
      mapUrl: "https://maps.google.com/maps?q=456+Creative+Blvd,+New+York,+NY+10015",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.959629259387!2d-74.00097068459463!3d40.72145697933033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sNew%20York!5e0!3m2!1sen!2sus!4v1234567890",
      coordinates: { lat: 40.758896, lng: -73.985130 },
    },
  ],

  form: {
    title: "Send us a Message",
    subtitle: "Fill out the form below and we'll get back to you soon.",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email",
        required: true,
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        required: false,
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "What is this regarding?",
        required: true,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Enter your message",
        required: true,
      },
    ],
    submitText: "Send Message",
    successMessage: "Thank you for your message! We'll get back to you soon.",
  },
};

export default contactContent;
