import Banner from "@/components/Banner";
import LearningAndInstructors from "@/components/LearningandInstructor";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner/>
     <TopGenerations/>
     <LearningAndInstructors/>
    </div>
  );
}
