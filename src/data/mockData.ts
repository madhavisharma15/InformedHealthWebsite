import testimonialImage from "../../public/About-image.jpg"
import w1 from "@/assets/gut.jpg"
import w2 from "@/assets/diabetes.jpg"

export const UPCOMING_WORKSHOP_DATETIME = "2026-08-15T11:00:00+05:30"; // 15th Aug 2026, 11:00am IST

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  dateTime: string;
  duration: string;
  price: number;
  image: string;
  capacity: number;
  enrolled: number;
  // internalRoute: string;
}

export const workshops: Workshop[] = [
  {
    id: "1",
    title: "Glucose Biohacking Masterclass",
    description: "Defeat diabetes naturally without medicines using the GBH system. Learn the exact strategies that only the top 1% use to live a needle-free, pill-free, and complication-free life.",
    date: "15th Aug 2026",
    dateTime: UPCOMING_WORKSHOP_DATETIME,
    duration: "2 hours",
    price: 99,
    image: w2,
    capacity: 25,
    enrolled: 12,
    // internalRoute: "/workshops/glucose-biohacking-masterclass",
  },
  {
    id: "2",
    title: "Gut Biohacking Masterclass",
    description: "Get permanent relief from acidity, bloating, and gas naturally without medicines. Discover proven strategies to restore digestive balance and achieve lasting wellness.",
    date: "15th Aug 2026",
    dateTime: "2026-08-15T11:00:00+05:30",
    duration: "3 days",
    price: 299,
    image: w1,
    capacity: 20,
    enrolled: 18,
    // internalRoute: "/services/gut-biohacking-masterclass",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "Madhavi's personalized nutrition plan transformed my health completely. I've never felt more energetic and balanced!",
    rating: 5,
    image: testimonialImage,
  },
  {
    id: "2",
    name: "Rahul Mehta",
    role: "Business Owner",
    content: "The gut health workshop was eye-opening. Madhavi's expertise and approachable teaching style made complex topics easy to understand.",
    rating: 5,
    image: testimonialImage,
  },
  {
    id: "3",
    name: "Anita Desai",
    role: "Yoga Instructor",
    content: "I've recommended Madhavi to all my students. Her holistic approach to nutrition complements my yoga practice perfectly.",
    rating: 5,
    image: testimonialImage,
  },
];

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  tags?: string[];
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Flip side of Fad Diets",
    excerpt: "If skipping meals is a bad idea, then how about eating low carb meals? And if you are not the soup and salad type, then you could attempt the keto diet, it’s the latest cool thing! Incase the thought of egg yellows and cream leave your lipid profiles soaring, try going high protein instead. Just remember that you can always do intermittent fasting and detox diets in between or with all the other permutation and combinations! Phew!",
    content: "Full blog content would go here...",
    author: "Madhavi K. Sharma",
    date: "2026-04-18",
    category: "Fad Diets",
    image: "https://lh3.googleusercontent.com/d/19DPcF8WCDhz5n-hSmgChjWcOA3pfyo2V",
    readTime: "5 min read",
    url: "https://informedhealthblog.blogspot.com/2026/04/the-flipside-of-fad-diets-if-skipping.html",
    tags: ["fad diets", "digestive wellness", "health tips"],
  },
  {
    id: 2,
    title: "The Power of Anti-Inflammatory Foods",
    excerpt: "Learn which foods can help reduce inflammation and support your body's natural healing processes.",
    content: "Full blog content would go here...",
    author: "Madhavi K. Sharma",
    date: "2025-10-25",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
    readTime: "7 min read",
    tags: ["nutrition", "anti-inflammatory", "health tips"],
    url: "https://nutrition.informedhealth.in/the-power-of-anti-inflammatory-foods",
  },
  {
    id: 3,
    title: "Understanding Functional Nutrition",
    excerpt: "What makes functional nutrition different and why it might be the approach you've been looking for.",
    content: "Full blog content would go here...",
    author: "Madhavi K. Sharma",
    date: "2025-10-20",
    category: "Education",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    readTime: "6 min read",
    tags: ["functional nutrition", "health education", "wellness"],
    url: "https://nutrition.informedhealth.in/understanding-functional-nutrition",
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Body Transformation",
    description:
      "A powerful 12-week transformative journey designed to help you achieve sustainable weight loss, improved energy levels, and a stronger, more confident body through science-backed nutrition and lifestyle strategies.",
    features: [
      "Comprehensive health & body composition assessment",
      "Personalized meal and fitness roadmap",
      "Weekly progress tracking & accountability",
      "Mindset coaching and lifestyle optimization",
    ],
    icon: "user",
  },
  {
    id: "2",
    title: "Gut Reboot",
    description:
      "A structured 12-week step-by-step gut healing protocol designed to restore digestive balance, reduce inflammation, and support overall wellness from the inside out.",
    features: [
      "Detailed gut health evaluation and symptom mapping",
      "Elimination and reintroduction protocol",
      "Targeted supplement & lifestyle recommendations",
      "Continuous guidance and progress tracking",
    ],
    icon: "shieldPlus",
  },
  {
    id: "3",
    title: "Diabetes Reversal",
    description:
      "A science-driven 14-week program designed to help you lower blood sugar levels, reduce dependency on medications, and achieve long-term diabetes remission through nutrition and lifestyle changes.",
    features: [
      "In-depth metabolic & blood sugar assessment",
      "Customized nutrition and lifestyle protocol",
      "Continuous blood sugar monitoring & support",
      "Sustainable strategies for long-term remission",
    ],
    icon: "activity",
  },
];
