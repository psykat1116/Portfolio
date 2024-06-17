import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Seperator from "@/components/Seperator";

const Home = () => {
  return (
    <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#003747] to-[#010057] overflow-y-scroll gap-3">
      <>
        <Navbar />
        <Intro />
      </>
      <Seperator />
      <>
        <Project />
      </>
    </div>
  );
};

export default Home;
