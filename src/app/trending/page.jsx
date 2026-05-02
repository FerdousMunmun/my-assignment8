"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function TrendingPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await fetch('https://my-assignment8.vercel.app/data.json');

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setCourses(data.slice(0, 3));
      } catch (err) {
        toast.error("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!courses.length) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p>No Courses Found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold">
          🔥 Trending Courses
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="rounded-xl bg-white p-4 shadow"
            >
              <img
                src={course.image}
                className="h-48 w-full rounded object-cover"
              />

              <h2 className="mt-3 text-lg font-bold">{course.title}</h2>
              <p>{course.instructor}</p>

              <button
                onClick={() =>
                  toast.success(`${course.title} selected`)
                }
                className="mt-4 w-full rounded bg-blue-600 py-2 text-white"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}