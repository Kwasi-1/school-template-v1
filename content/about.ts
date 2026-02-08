// About Page Content - Edit this file to customize the About page
// Includes history, mission, values, stats, and proprietor information

export interface AboutContent {
  overview: {
    title: string;
    welcomeText: string;
  };

  history: {
    title: string;
    paragraphs: string[];
    image: string;
  };

  stats: {
    value: string;
    label: string;
  }[];

  mission: {
    title: string;
    statement: string;
  };

  values: {
    title: string;
    description: string;
    image: string;
  }[];

  proprietor: {
    name: string;
    title: string;
    message: string;
    image: string;
    signature?: string;
  };

  campusTour: {
    title: string;
    description: string;
    videoThumbnail: string;
    videoUrl: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const aboutContent: AboutContent = {
  overview: {
    title: "About University",
    welcomeText: "Welcome to Unipix University, where knowledge meets inspiration, and every individual's educational journey is valued. Established in 1971, our university has been a bastion of learning, innovation, and community for 53 years.",
  },

  history: {
    title: "The history of Unipix",
    paragraphs: [
      "On September 8, 1971, Unipix, the first college in the American colonies, was founded in Cambridge, Massachusetts. Unipix University was officially founded by a vote by the Great and General Court of the Massachusetts Bay Colony.",
      "Unipix endowment started with John Unipix's initial donation of 400 books and half his estate, but in 1721, Thomas Hollis began the now standard practice of requiring that a donation be used for a specific purpose when he donated money for 'a Divinity Professor, to read lectures in the Halls to the students.'",
    ],
    image: "/About_us_image.webp",
  },

  stats: [
    { value: "90%", label: "Post-Graduation Success Rate" },
    { value: "Top 10", label: "Colleges That Create Futures" },
    { value: "No. 1", label: "In The Nation For Materials R&D" },
  ],

  mission: {
    title: "Mission and Values",
    statement: "Our mission is to educate leaders who make a difference in the world. We create knowledge that transforms tomorrow.",
  },

  values: [
    {
      title: "Diversity",
      description: "Celebrating a rich tapestry of backgrounds, perspectives, and talents.",
      image: "/event-image-1.webp",
    },
    {
      title: "Innovation",
      description: "Encouraging creativity, critical thinking, and a spirit of innovation.",
      image: "/event-image-2.webp",
    },
    {
      title: "Excellence",
      description: "Striving for academic and research excellence in all endeavors.",
      image: "/event-image-3.webp",
    },
    {
      title: "Academic Excellence",
      description: "Our commitment to academic excellence is reflected in the diverse range.",
      image: "/program1.webp",
    },
  ],

  proprietor: {
    name: "Dr. John Smith",
    title: "Founder & Chancellor",
    message: "Welcome to our institution. We are committed to providing an environment where students can thrive academically, personally, and professionally. Our dedicated faculty and staff work tirelessly to ensure every student reaches their full potential.",
    image: "/proprietor.webp",
  },

  campusTour: {
    title: "Our Campus Tour",
    description: "Embark on a journey of knowledge, discovery, and growth at our school. Whether you're a new student or a transfer, we invite you to explore the possibilities that await you.",
    videoThumbnail: "/campus-tour-thumbnail.jpg",
    videoUrl: "/campus-tour.mp4",
    ctaText: "Visit Campus",
    ctaHref: "/campus",
  },
};

export default aboutContent;
