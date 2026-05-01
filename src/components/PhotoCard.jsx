import {  Button, Card, Chip,  } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";



const PhotoCard = ({photo}) => {
    return (
        <Card className="border rounded-xl">
            <div className="mt-2">
            <Image 
             src={photo.image}
                height={700}
             width={700}
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
         
       
        <Link href={`/all-photos/${photo.id}`}><Button variant="outline" className={'w-full bg-green-200'}>View</Button></Link>
            
        </Card>
    );
};

export default PhotoCard;