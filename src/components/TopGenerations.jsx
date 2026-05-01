import PhotoCard from "./PhotoCard";

const TopGenerations   = async () => {

    const res = await fetch('https://my-assignment8.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos)

  return (
    <div className="container mx-auto ">
        <h2 className="text-4xl font-bold my-8 text-blue-950 text-center">All Courses</h2>

        
            <div className="grid grid-cols-3 gap-5">
                {photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
            </div>
        </div>
    
  );
};

export default TopGenerations