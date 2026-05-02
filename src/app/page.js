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
      <div className="flex justify-center">
        <Link
        href="/trending"
        className=" mx-auto text-center mt-5 inline-block text-md font-bold bg-blue-900 text-green-200 px-4 py-3 rounded"
      >
        Go to Trending Courses
      </Link>
      </div>
    </div>
  );
}
