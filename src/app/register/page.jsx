"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, Form, Input } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      alert("Registration failed: " + error.message);
      return;
    }

    alert("Registration successful. Please login now.");
    router.push("/login");
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md border p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Register</h1>

        <Form onSubmit={handleRegister} className="flex flex-col gap-4">
          <Input name="name" type="text" label="Name" placeholder="Enter your name" required />
          <Input name="email" type="email" label="Email" placeholder="john@example.com" required />
          <Input name="image" type="text" label="Photo URL" placeholder="Enter photo URL" required />
          <Input name="password" type="password" label="Password" placeholder="Enter password" required />

          <Button type="submit" color="primary" className="w-full">
            Register
          </Button>
        </Form>

        <p className="my-4 text-center text-sm">Or</p>

        <Button onClick={handleGoogleSignIn} variant="bordered" className="w-full">
          <GrGoogle /> Continue with Google
        </Button>

        <p className="mt-5 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}