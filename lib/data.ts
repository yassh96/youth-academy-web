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
    icon: "Compass",
    title: "Career Guidance",
    description:
      "Personalised one-on-one roadmaps that help students discover the right career path and take confident first steps.",
  },
  {
    icon: "TrendingUp",
    title: "Leadership Development",
    description:
      "Cultivate the mindset and skills of a leader through structured programs, team challenges, and mentorship.",
  },
  {
    icon: "BarChart2",
    title: "Business Skills",
    description:
      "Learn essential entrepreneurial and business fundamentals that give you an edge in every professional environment.",
  },
  {
    icon: "PiggyBank",
    title: "Financial Awareness",
    description:
      "Build a strong foundation in personal finance, budgeting, and smart money management from day one.",
  },
  {
    icon: "Mic2",
    title: "Communication Skills",
    description:
      "Master public speaking, persuasive writing, and executive presence to communicate ideas with clarity and confidence.",
  },
  {
    icon: "Sparkles",
    title: "Personality Development",
    description:
      "Transform your body language, emotional intelligence, and personal brand to stand out in any room.",
  },
];

export const courses = [
  {
    id: 1,
    slug: "career-clarity-masterclass",
    category: "Career",
    image: "/courses/career.jpg",
    title: "Career Clarity Masterclass",
    description:
      "A comprehensive program to help students discover their strengths, map career options, and create an actionable 90-day plan.",
    duration: "6 Weeks",
    mode: "Online + Offline",
    badge: "Most Popular",
  },
  {
    id: 2,
    slug: "leadership-foundations",
    category: "Leadership",
    image: "/courses/leadership.jpg",
    title: "Leadership Foundations",
    description:
      "Develop core leadership competencies including decision-making, team management, and strategic thinking.",
    duration: "8 Weeks",
    mode: "Offline",
    badge: "Featured",
  },
  {
    id: 3,
    slug: "business-essentials",
    category: "Business",
    image: "/courses/business.jpg",
    title: "Business Essentials for Students",
    description:
      "Understand how businesses work, learn marketing basics, and develop an entrepreneurial mindset ready for the real world.",
    duration: "4 Weeks",
    mode: "Online",
    badge: null,
  },
  {
    id: 4,
    slug: "public-speaking-mastery",
    category: "Communication",
    image: "/courses/speaking.jpg",
    title: "Public Speaking Mastery",
    description:
      "Overcome stage fright, structure compelling speeches, and develop a powerful executive presence.",
    duration: "5 Weeks",
    mode: "Offline",
    badge: "New",
  },
  {
    id: 5,
    slug: "financial-intelligence",
    category: "Finance",
    image: "/courses/finance.jpg",
    title: "Financial Intelligence for Youth",
    description:
      "Personal finance fundamentals every young professional must know — saving, investing, budgeting, and wealth building.",
    duration: "3 Weeks",
    mode: "Online",
    badge: null,
  },
  {
    id: 6,
    slug: "personality-transformation",
    category: "Personality",
    image: "/courses/personality.jpg",
    title: "Personality Transformation Program",
    description:
      "A holistic program covering grooming, confidence, emotional intelligence, and executive presence.",
    duration: "6 Weeks",
    mode: "Offline",
    badge: "Premium",
  },
  {
    id: 7,
    slug: "interview-job-readiness",
    category: "Career",
    image: "/courses/interview.jpg",
    title: "Interview & Job Readiness",
    description:
      "Resume building, mock interviews, LinkedIn optimisation and salary negotiation skills that land jobs.",
    duration: "3 Weeks",
    mode: "Online + Offline",
    badge: null,
  },
  {
    id: 8,
    slug: "entrepreneur-launchpad",
    category: "Business",
    image: "/courses/entrepreneur.jpg",
    title: "Entrepreneur Launchpad",
    description:
      "Go from idea to execution with startup fundamentals, business model design, pitching, and growth strategies.",
    duration: "10 Weeks",
    mode: "Offline",
    badge: "Intensive",
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
    course: "Career Clarity Masterclass",
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
    course: "Entrepreneur Launchpad",
    review:
      "The Entrepreneur Launchpad gave me the confidence and framework to start my own company. The mentorship and peer network I built at YSA is invaluable even today.",
    rating: 5,
    avatar: "/testimonials/rahul.jpg",
    initials: "RD",
  },
  {
    id: 3,
    name: "Sneha Patil",
    role: "BBA Student, Symbiosis University",
    course: "Public Speaking Mastery",
    review:
      "I used to freeze on stage. After YSA's Public Speaking program, I won our college inter-university debate championship. Life-changing experience!",
    rating: 5,
    avatar: "/testimonials/sneha.jpg",
    initials: "SP",
  },
  {
    id: 4,
    name: "Arjun Mehta",
    role: "Software Engineer, TCS",
    course: "Leadership Foundations",
    review:
      "The Leadership Foundations course helped me transition from an individual contributor to a team lead in under a year. The practical frameworks are immediately applicable.",
    rating: 5,
    avatar: "/testimonials/arjun.jpg",
    initials: "AM",
  },
  {
    id: 5,
    name: "Divya Kulkarni",
    role: "Young Professional, Banking Sector",
    course: "Financial Intelligence for Youth",
    review:
      "YSA taught me the financial fundamentals I never learned in college. I've started my SIP, built an emergency fund, and feel genuinely in control of my money now.",
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
  "Career",
  "Leadership",
  "Business",
  "Communication",
  "Finance",
  "Personality",
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
