


// import PhotoCard from "./PhotoCard";


// const TopGenerations   = async () => {
    

//     const res = await fetch('https://my-assignment8.vercel.app/data.json')
//     const photos = await res.json()
//     console.log(photos)

//   return (
//     <div className="container mx-auto ">
//         <h2 className="text-4xl font-bold my-8 text-blue-900 text-center">All Courses</h2>

        
//             <div className="grid grid-cols-3 gap-5">
//                 {photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
//             </div>
//         </div>
    
//   );
// };

// export default TopGenerations




















"use client";

import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const TopGenerations = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://my-assignment8.vercel.app/data.json"
      );
      const data = await res.json();
      setPhotos(data);
    };

    loadData();
  }, []);

  // 🔍 filter logic
  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold my-8 text-blue-900 text-center">
        All Courses
      </h2>

      {/* 🔍 search input */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded w-80"
        />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;