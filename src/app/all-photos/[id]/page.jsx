import {Card} from "@heroui/react";
import Image from "next/image";

const AllPhotosDetails = async ({params}) => {
    const {id} = await params
     const res = await fetch('https://my-assignment8.vercel.app/data.json')
    const photos = await res.json()
    console.log(photos)
      const photo = photos.find(p => p.id == id)
  return (
    <div className="container mx-auto ">
        <h2 className='font-bold text-2xl text-blue-950 text-center mt-5 mb-5'>Course Details</h2>
         
         <Card className="border rounded">
            <div className="mt-2">
            <Image 
             src={photo.image}
                height={400}
             width={400}
                alt={photo.title}
               />
                 <div className="">
            <h2 className='font-medium text-blue-900 '>Title: {photo.title}</h2>
            <h3  className='font-medium text-blue-900 '>Mentor : {photo.instructor}</h3>
        </div>
              <div className="font-sm text-blue-900">
            <p>Duration:{photo.duration}</p>
             <div className="flex items-center gap-2"> 
            
            <p>Rating :{photo.rating}</p>
             
            
        </div>
        </div>
                  </div>
         
       
       
            
        </Card>
        </div>
  )
}

export default AllPhotosDetails