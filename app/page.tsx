import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Seperator from "@/components/Seperator";

const Home = () => {
  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-[#003747] to-[#010057] gap-3">
      <div className="relative min-h-[95vh] flex flex-col justify-between">
        <Navbar />
        <Intro />
        <Footer />
      </div>
      <Seperator />
      <Project />
      <Seperator />
    </div>
  );
};

export default Home;
