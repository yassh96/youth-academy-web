import Hero           from "@/components/sections/Hero";
import TrustStats      from "@/components/sections/TrustStats";
import WhyChooseYSA    from "@/components/sections/WhyChooseYSA";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import LearningProcess from "@/components/sections/LearningProcess";
import AboutFounder    from "@/components/sections/AboutFounder";
import Testimonials    from "@/components/sections/Testimonials";
import LatestBlogs     from "@/components/sections/LatestBlogs";
import Newsletter      from "@/components/sections/Newsletter";
import FinalCTA        from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <WhyChooseYSA />
      <FeaturedCourses />
      <LearningProcess />
      <AboutFounder />
      <Testimonials />
      <LatestBlogs />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
