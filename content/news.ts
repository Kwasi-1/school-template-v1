// News & Events Content - Edit this file to customize news and events

export interface NewsItem {
  id: string;
  type: "news" | "event";
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author?: string;
  location?: string;
  featured?: boolean;
  category: string;
}

export interface NewsContent {
  overview: {
    title: string;
    subtitle: string;
    description: string;
  };
  items: NewsItem[];
  categories: string[];
}

export const newsContent: NewsContent = {
  overview: {
    title: "News & Events",
    subtitle: "Stay Updated",
    description: "Keep up with the latest happenings, announcements, and upcoming events at our school.",
  },

  categories: ["All", "News", "Events", "Announcements", "Achievements"],

  items: [
    {
      id: "1",
      type: "event",
      title: "Annual Inter-House Sports Competition 2026",
      excerpt: "Join us for an exciting day of athletic competition as our four houses compete for the championship trophy. Students, parents, and alumni are all welcome.",
      image: "/event-image-1.webp",
      date: "March 15, 2026",
      location: "School Sports Field",
      featured: true,
      category: "Events",
    },
    {
      id: "2",
      type: "news",
      title: "Outstanding BECE Results: 98% Pass Rate",
      excerpt: "We are proud to announce that our JHS 3 students achieved a 98% pass rate in the 2025 BECE examinations, with 15 students scoring aggregate 6.",
      image: "/event-image-2.webp",
      date: "February 28, 2026",
      author: "Admin",
      featured: true,
      category: "Achievements",
    },
    {
      id: "3",
      type: "event",
      title: "Parent-Teacher Conference",
      excerpt: "An opportunity for parents to meet with teachers, discuss student progress, and collaborate on academic goals for the term.",
      image: "/event-image-3.webp",
      date: "March 20, 2026",
      location: "School Hall",
      category: "Events",
    },
    {
      id: "4",
      type: "news",
      title: "New Science Laboratory Inauguration",
      excerpt: "We are excited to announce the opening of our new state-of-the-art science laboratory, equipped with modern apparatus for practical learning.",
      image: "/program1.webp",
      date: "February 15, 2026",
      author: "Admin",
      category: "News",
    },
    {
      id: "5",
      type: "event",
      title: "Cultural Day Celebration",
      excerpt: "Celebrating Ghana's rich cultural heritage with traditional displays, performances, and cuisine from all regions.",
      image: "/program2.webp",
      date: "March 6, 2026",
      location: "School Courtyard",
      category: "Events",
    },
    {
      id: "6",
      type: "news",
      title: "Scholarship Program for 2026/2027",
      excerpt: "Applications are now open for our merit-based scholarship program. Eligible students can receive up to 50% tuition reduction.",
      image: "/program3.webp",
      date: "February 1, 2026",
      author: "Admin",
      category: "Announcements",
    },
    {
      id: "7",
      type: "news",
      title: "Students Win Regional Quiz Competition",
      excerpt: "Our JHS team brought home the trophy from the Greater Accra Regional Quiz Competition, defeating 12 other schools.",
      image: "/program4.webp",
      date: "January 25, 2026",
      author: "Admin",
      category: "Achievements",
    },
    {
      id: "8",
      type: "event",
      title: "Career Day: Professionals Meet Students",
      excerpt: "Industry professionals from various fields will share insights about their careers and guide students on future pathways.",
      image: "/hero_image_1.webp",
      date: "April 10, 2026",
      location: "School Auditorium",
      category: "Events",
    },
    {
      id: "9",
      type: "news",
      title: "Term 2 Academic Calendar Released",
      excerpt: "The academic calendar for Term 2 has been released. Please check the important dates and plan accordingly.",
      image: "/hero_image_2.webp",
      date: "January 10, 2026",
      author: "Admin",
      category: "Announcements",
    },
  ],
};

export default newsContent;
