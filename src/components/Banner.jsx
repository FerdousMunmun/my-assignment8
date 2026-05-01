import React from 'react'

const Banner = () => {
  return (
    <div>
          <div className="relative h-[80vh] w-full container mx-auto mt-5">
      {/* Background Image */}
      <img
        src="/bannerimage.webp"
        alt="Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Upgrade Your Skills 🚀
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn from Industry Experts
          </p>
          <button className="bg-green-200 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-blue-950">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner