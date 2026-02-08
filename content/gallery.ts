// Gallery Content - Edit this file to customize gallery images

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

export interface GalleryContent {
  overview: {
    title: string;
    subtitle: string;
    description: string;
  };
  categories: string[];
  images: GalleryImage[];
}

export const galleryContent: GalleryContent = {
  overview: {
    title: "Our School in Pictures",
    subtitle: "Gallery",
    description: "Explore life at our school through our photo gallery. From classrooms to events, sports to celebrations.",
  },

  categories: ["All", "Campus", "Events", "Sports", "Classroom", "Celebrations"],

  images: [
    {
      id: "1",
      src: "/hero_image_1.webp",
      alt: "School main building",
      category: "Campus",
      caption: "Our beautiful main campus building",
    },
    {
      id: "2",
      src: "/hero_image_2.webp",
      alt: "School grounds",
      category: "Campus",
      caption: "Spacious school grounds for outdoor activities",
    },
    {
      id: "3",
      src: "/hero_image_3.webp",
      alt: "School assembly",
      category: "Events",
      caption: "Morning assembly gathering",
    },
    {
      id: "4",
      src: "/event-image-1.webp",
      alt: "Sports day competition",
      category: "Sports",
      caption: "Annual inter-house sports competition",
    },
    {
      id: "5",
      src: "/event-image-2.webp",
      alt: "Prize giving day",
      category: "Events",
      caption: "Academic excellence awards ceremony",
    },
    {
      id: "6",
      src: "/event-image-3.webp",
      alt: "Cultural celebration",
      category: "Celebrations",
      caption: "Cultural day celebrations",
    },
    {
      id: "7",
      src: "/program1.webp",
      alt: "Classroom learning",
      category: "Classroom",
      caption: "Interactive classroom sessions",
    },
    {
      id: "8",
      src: "/program2.webp",
      alt: "Science laboratory",
      category: "Classroom",
      caption: "Hands-on science experiments",
    },
    {
      id: "9",
      src: "/program3.webp",
      alt: "Computer lab",
      category: "Classroom",
      caption: "Modern ICT learning facilities",
    },
    {
      id: "10",
      src: "/program4.webp",
      alt: "Sports activities",
      category: "Sports",
      caption: "Students enjoying physical education",
    },
    {
      id: "11",
      src: "/footer_image.webp",
      alt: "Graduation ceremony",
      category: "Celebrations",
      caption: "Proud graduation moments",
    },
    {
      id: "12",
      src: "/hero_image_1.webp",
      alt: "School library",
      category: "Campus",
      caption: "Well-stocked school library",
    },
  ],
};

export default galleryContent;
