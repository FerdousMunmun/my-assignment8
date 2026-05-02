const LearningAndInstructors = () => {
  const instructors = [
    { id: 1, name: "John Doe", role: "Web Development Mentor", img: "/instructor1.jpg" },
    { id: 2, name: "Sarah Smith", role: "React Instructor", img: "/instructor2.jpg" },
    { id: 3, name: "Michael Lee", role: "UI/UX Designer", img: "/instructor3.jpg" },
    { id: 4, name: "Emily Davis", role: "Data Science Coach", img: "/instructor4.jpg" },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="animate__animated animate__fadeInDown text-center text-3xl font-bold text-blue-900">
          📌 Learning Tips
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="animate__animated animate__fadeInLeft rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-blue-700">Study Techniques</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>✔ Set daily learning goals</li>
              <li>✔ Practice coding regularly</li>
              <li>✔ Build small projects</li>
              <li>✔ Revise previous lessons</li>
            </ul>
          </div>

          <div className="animate__animated animate__fadeInRight rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-green-700">Time Management Tips</h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>✔ Follow a fixed routine</li>
              <li>✔ Study in focused sessions</li>
              <li>✔ Avoid distractions</li>
              <li>✔ Complete tasks before deadline</li>
            </ul>
          </div>
        </div>

        <h2 className="animate__animated animate__fadeInUp mt-16 text-center text-3xl font-bold text-blue-900">
          🏆 Top Instructors
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((item, index) => (
            <div
              key={item.id}
              className="animate__animated animate__zoomIn rounded-2xl bg-white p-6 text-center shadow-md hover:shadow-xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full object-cover"
              />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningAndInstructors;