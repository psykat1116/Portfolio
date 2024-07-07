import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project/Project";
import Seperator from "@/components/Seperator";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Education from "@/components/Education/Education";
import Achievement from "@/components/Achievement/Achievement";
import TechSkill from "@/components/TechSkill/TechSkill";
import Profile from "@/components/Profile/Profile";

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
      <Project />
      <Seperator />
      <Achievement />
      <Seperator />
      <Profile />
      <Seperator />
      <TechSkill />
      <Seperator />
      <Contact />
    </div>
  );
};

export default Home;
