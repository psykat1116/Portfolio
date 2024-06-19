import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Seperator from "@/components/Seperator";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-[#171A37] to-[#010057] gap-3">
      <div className="relative min-h-[95vh] flex flex-col justify-between">
        <Navbar />
        <Intro />
        <Footer />
      </div>
      <Seperator />
      <Project />
      <Seperator />
      <Experience/>
    </div>
  );
};

export default Home;
