import Banner from "@/components/Banner";
import LearningAndInstructors from "@/components/LearningandInstructor";
import TopGenerations from "@/components/TopGenerations";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner/>
     <TopGenerations/>
     <LearningAndInstructors/>
      <Link
        href="/trending"
        className=" mx-auto text-center mt-5 inline-block bg-blue-600 text-white px-4 py-3 rounded"
      >
        Go to Trending Courses
      </Link>
    </div>
  );
}
