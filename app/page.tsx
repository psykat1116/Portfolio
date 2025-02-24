import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact/Contact";
import Project from "@/components/Project/Project";
import Profile from "@/components/Profile/Profile";
import Education from "@/components/Education/Education";
import TechSkill from "@/components/TechSkill/TechSkill";
import Experience from "@/components/Experience/Experience";
import Achievement from "@/components/Achievement/Achievement";

const Home = () => {
  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-[#171A37] to-[#010057] gap-3">
      <div className="relative min-h-screen flex flex-col justify-between">
        <Navbar />
        <Intro />
        <Footer />
      </div>
      <Experience />
      <Education />
      <Project />
      <Achievement />
      <Profile />
      <TechSkill />
      <Contact />
    </div>
  );
};

export default Home;
