// ── Static data for Youth Success Academy ───────────────────────────────────

export const trustStats = [
  { label: "Students Trained",   value: 5000,  suffix: "+", icon: "Users"      },
  { label: "Courses",            value: 15,    suffix: "+", icon: "BookOpen"   },
  { label: "Workshops",          value: 120,   suffix: "+", icon: "Presentation"},
  { label: "Corporate Sessions", value: 80,    suffix: "+", icon: "Briefcase"  },
  { label: "Years of Experience",value: 10,    suffix: "+", icon: "Award"      },
];

export const whyChooseFeatures = [
  {
    icon: "BookOpen",
    title: "Practical Learning",
    description:
      "Hands-on assignments, real-life case studies, and activities that ensure you can apply what you learn immediately.",
  },
  {
    icon: "Users",
    title: "Experienced Trainers",
    description:
      "Learn from industry experts and certified mentors with years of practical experience.",
  },
  {
    icon: "Compass",
    title: "Interactive Sessions",
    description:
      "Engaging classroom discussions, live practice, and personalized feedback for better learning outcomes.",
  },
  {
    icon: "Target",
    title: "Personal Guidance",
    description:
      "Receive one-on-one mentoring and customized support to overcome your unique challenges.",
  },
  {
    icon: "TrendingUp",
    title: "Measurable Results",
    description:
      "Track your progress through assessments and practical performance improvements that build confidence and success.",
  },
];

export const courses = [
  {
    id: 1,
    slug: "english-for-competitive-exams-interview",
    category: "Competitive Exams",
    image: "/courses/career.jpg",
    title: "English for Competitive Exams & Interview",
    description:
      "Master English with proven strategies for competitive exams and job interviews. Improve your grammar, vocabulary, speaking confidence, and interview performance to achieve your career goals.",
    duration: "1 Month / 6 Months",
    mode: "Online + Offline",
    badge: "Popular",
  },
  {
    id: 2,
    slug: "business-growth",
    category: "Business",
    image: "/courses/business.jpg",
    title: "Business Growth",
    description:
      "Learn practical business strategies to increase sales, build your brand, and grow your business sustainably. Gain actionable insights that deliver measurable results.",
    duration: "6 Months",
    mode: "Online + Offline",
    badge: "Featured",
  },
  {
    id: 3,
    slug: "stress-management",
    category: "Performance & Mindset",
    image: "/courses/personality.jpg",
    title: "Stress Management",
    description:
      "Develop techniques to manage stress, improve emotional balance, and stay productive under pressure. Build a healthier mindset for personal and professional success.",
    duration: "1 Month",
    mode: "Online + Offline",
    badge: null,
  },
  {
    id: 4,
    slug: "entrepreneurship",
    category: "Entrepreneurship",
    image: "/courses/entrepreneur.jpg",
    title: "Entrepreneurship",
    description:
      "Turn your ideas into successful ventures with practical entrepreneurial skills. Learn business planning, problem-solving, leadership, and growth strategies from experienced mentors.",
    duration: "6 Months / 1 Year",
    mode: "Offline",
    badge: "Intensive",
  },
  {
    id: 5,
    slug: "communication-leadership",
    category: "Leadership",
    image: "/courses/leadership.jpg",
    title: "Communication & Leadership",
    description:
      "Enhance your communication skills and become an inspiring leader. Learn how to influence, motivate teams, and build strong professional relationships with confidence.",
    duration: "6 Months",
    mode: "Online + Offline",
    badge: "Recommended",
  },
  {
    id: 6,
    slug: "communication-soft-skills-development-program",
    category: "Soft Skills",
    image: "/courses/speaking.jpg",
    title: "Communication & Soft Skills Development Program",
    description:
      "Build essential workplace skills including communication, presentation, teamwork, personality development, and professional etiquette to excel in every stage of your career.",
    duration: "1 Year",
    mode: "Online + Offline",
    badge: "Comprehensive",
  },
];

export const learningSteps = [
  {
    step: "01",
    title: "Choose Your Course",
    description: "Browse our curated programs and select the one that aligns with your career goals and interests.",
  },
  {
    step: "02",
    title: "Register & Enrol",
    description: "Complete a simple registration process and secure your spot with flexible payment options.",
  },
  {
    step: "03",
    title: "Attend Training",
    description: "Learn from experienced mentors through live sessions, workshops, and practical assignments.",
  },
  {
    step: "04",
    title: "Receive Personalised Guidance",
    description: "Get one-on-one mentorship, feedback, and career counselling tailored to your unique journey.",
  },
  {
    step: "05",
    title: "Build Your Career",
    description: "Apply your skills, leverage our network, and step into the career or venture you deserve.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "MBA Graduate, Now Marketing Manager",
    course: "Communication & Soft Skills",
    review:
      "YSA completely changed how I think about my career. The personalised guidance I received helped me land my dream role at a top FMCG company within 3 months of completing the program.",
    rating: 5,
    avatar: "/testimonials/priya.jpg",
    initials: "PS",
  },
  {
    id: 2,
    name: "Rahul Desai",
    role: "Founder, TechStart Pune",
    course: "Entrepreneurship",
    review:
      "The Entrepreneurship program gave me the confidence and framework to start my own company. The mentorship and peer network I built at YSA is invaluable even today.",
    rating: 5,
    avatar: "/testimonials/rahul.jpg",
    initials: "RD",
  },
  {
    id: 3,
    name: "Sneha Patil",
    role: "BBA Student, Symbiosis University",
    course: "English for Competitive Exams & Interview",
    review:
      "I used to freeze during interviews and public speaking. After YSA's program, I cracked my entrance exams and interview smoothly. Life-changing experience!",
    rating: 5,
    avatar: "/testimonials/sneha.jpg",
    initials: "SP",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Software Engineer, TCS",
    course: "Communication & Leadership",
    review:
      "The Communication & Leadership course helped me transition from an individual contributor to a team lead in under a year. The practical frameworks are immediately applicable.",
    rating: 5,
    avatar: "/testimonials/arjun.jpg",
    initials: "AM",
  },
  {
    id: 5,
    name: "Divya Kulkarni",
    role: "Young Professional, Business Sector",
    course: "Business Growth",
    review:
      "YSA taught me practical business growth fundamentals. I've scaled sales, built our personal brand, and feel genuinely in control of business growth now.",
    rating: 5,
    avatar: "/testimonials/divya.jpg",
    initials: "DK",
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "5-career-skills-no-one-teaches-in-college",
    category: "Career",
    title: "5 Career Skills No One Teaches You in College",
    excerpt:
      "From networking to negotiation, discover the practical skills that separate high-achievers from the rest — and how to develop them quickly.",
    image: "/blog/career-skills.jpg",
    date: "July 22, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "how-to-build-executive-presence-as-a-student",
    category: "Leadership",
    title: "How to Build Executive Presence as a Student",
    excerpt:
      "Executive presence is not reserved for C-suite professionals. Learn how to project confidence, authority, and clarity at any age.",
    image: "/blog/executive-presence.jpg",
    date: "July 10, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "financial-habits-every-20-something-must-build",
    category: "Finance",
    title: "Financial Habits Every 20-Something Must Build Now",
    excerpt:
      "The earlier you build these money habits, the faster wealth compounds. Here are the seven non-negotiable habits that will shape your financial future.",
    image: "/blog/financial-habits.jpg",
    date: "June 28, 2025",
    readTime: "6 min read",
  },
];

export const newsletterDocs = [
  {
    id: 1,
    title: "YSA Annual Report 2024–25",
    subtitle: "Impact, Milestones & Stories",
    date: "March 2025",
    coverImage: "/newsletter/annual-2025.jpg",
    type: "Annual Report",
  },
  {
    id: 2,
    title: "YSA Newsletter — Q4 2024",
    subtitle: "Winter Programs & Success Stories",
    date: "December 2024",
    coverImage: "/newsletter/q4-2024.jpg",
    type: "Newsletter",
  },
  {
    id: 3,
    title: "YSA Newsletter — Q3 2024",
    subtitle: "New Courses & Corporate Workshops",
    date: "September 2024",
    coverImage: "/newsletter/q3-2024.jpg",
    type: "Newsletter",
  },
  {
    id: 4,
    title: "YSA Newsletter — Q2 2024",
    subtitle: "Leadership Summit Highlights",
    date: "June 2024",
    coverImage: "/newsletter/q2-2024.jpg",
    type: "Newsletter",
  },
];

export const courseCategories = [
  "All",
  "Competitive Exams",
  "Business",
  "Performance & Mindset",
  "Entrepreneurship",
  "Leadership",
  "Soft Skills",
];

export const blogCategories = [
  "All",
  "Career",
  "Leadership",
  "Business",
  "Finance",
  "Personality",
  "Entrepreneurship",
];
