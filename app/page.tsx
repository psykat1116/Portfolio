import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Seperator from "@/components/Seperator";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Achievement from "@/components/Achievement";
import TechSkill from "@/components/TechSkill";
import Profile from "@/components/Profile";

const Home = () => {
  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-[#171A37] to-[#010057] gap-3">
      <div className="relative min-h-[95vh] flex flex-col justify-between">
        <Navbar />
        <Intro />
        <Footer />
      </div>
      <Seperator />
      <Experience />
      <Seperator />
      <Education />
      <Seperator />
      <Profile />
      <Seperator />
      <TechSkill />
      <Seperator />
      <Project />
      <Seperator />
      <Achievement />
      <Seperator />
      <Contact />
    </div>
  );
};

export default Home;
