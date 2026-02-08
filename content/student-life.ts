// Student Life Content - Edit this file to customize student life sections

export interface StudentLifeImage {
  src: string;
  alt: string;
}

export interface StudentLifeSection {
  id: string;
  title: string;
  description: string;
  images: StudentLifeImage[];
  accentColor?: string;
}

export interface StudentLifeContent {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  sections: StudentLifeSection[];
}

export const studentLifeContent: StudentLifeContent = {
  hero: {
    title: "Student Life",
    subtitle: "Experience life beyond the classroom",
    backgroundImage: "/hero_image_1.webp",
  },

  sections: [
    {
      id: "sports",
      title: "Sports",
      description:
        "To unearth the children's hidden talents, the school has provided first-class 5 and 7 aside soccer pitches, a basketball court, volleyball court, and athletics track. Students are introduced to these sports during the course of their studies in the school. Parents who would like their wards to be trained in any of the above disciplines can register for our after-school sports program.",
      images: [
        { src: "/event-image-1.webp", alt: "Football match" },
        { src: "/event-image-2.webp", alt: "Basketball game" },
        { src: "/program1.webp", alt: "Athletics practice" },
        { src: "/program2.webp", alt: "Volleyball game" },
      ],
      accentColor: "#800020",
    },
    {
      id: "clubs",
      title: "Clubs & Societies",
      description:
        "Our vibrant clubs and societies provide students with opportunities to explore their interests, develop leadership skills, and build lasting friendships. From the Prefects Council to the Debate Club, Science Club, and Reading Club, there's something for everyone.",
      images: [
        { src: "/program3.webp", alt: "Debate club session" },
        { src: "/program4.webp", alt: "Science club experiment" },
        { src: "/hero_image_2.webp", alt: "Reading club" },
        { src: "/event-image-3.webp", alt: "Prefects meeting" },
      ],
      accentColor: "#1a1a2e",
    },
    {
      id: "activities",
      title: "Extracurricular Activities",
      description:
        "Beyond academics, we offer a rich array of extracurricular activities including drama and theatre, music and choir, dance, art and craft, and French language lessons. These activities help students discover and develop their creative talents.",
      images: [
        { src: "/hero_image_3.webp", alt: "Drama performance" },
        { src: "/footer_image.webp", alt: "Music choir" },
        { src: "/event-image-1.webp", alt: "Dance rehearsal" },
        { src: "/event-image-2.webp", alt: "Art exhibition" },
      ],
      accentColor: "#2d6a4f",
    },
    {
      id: "facilities",
      title: "Facilities",
      description:
        "Our modern facilities include well-equipped classrooms, a fully stocked library, science and computer laboratories, a spacious dining hall, and secure outdoor play areas. We ensure that students have access to all the resources they need for holistic development.",
      images: [
        { src: "/program1.webp", alt: "Library" },
        { src: "/program2.webp", alt: "Computer lab" },
        { src: "/program3.webp", alt: "Science laboratory" },
        { src: "/program4.webp", alt: "Dining hall" },
      ],
      accentColor: "#0077b6",
    },
  ],
};

export default studentLifeContent;
