"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";



const Navber = () => {
const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();

  }

  return (
   <nav className="container mx-auto sticky top-0 z-40 w-full">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="font-bold text-4xl text-green-800">Skill<span className="font-black text-3xl text-blue-950 transform-rotatet-45">sphere</span></div>
    <ul className="flex items-center gap-4">
      <li className="font-semibold text-md text-blue-950"><Link href={"/"}>Home</Link></li>
      <li className="font-semibold text-md text-blue-950"><Link href={"/all-photos"}>Courses</Link></li>
      <li className="font-semibold text-md text-blue-950"><Link href={"/profile"}>My Profile</Link></li>
    </ul>


    <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )}
        </div>


   
  </header>
</nav>
  )
}

export default Navber