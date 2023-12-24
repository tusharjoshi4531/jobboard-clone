"use client";
import { signInWithEmailAndPassword } from "@/app/auth-server-actions/actions";
import Button from "@/components/util/Button";
import Input from "@/components/util/Input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSignin: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = JSON.parse(
      await signInWithEmailAndPassword({
        email,
        password,
      })
    );

    console.log(res);
    if (res.error) {
      alert(res.error.message);
    } else {
      router.refresh();
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSignin}>
      <h1 className=" font-extrabold text-lg ">Signin</h1>
      <span className="border w-full border-yellow-300 my-2"></span>
      <Input
        labelText="Email"
        inputProps={{
          type: "email",
          onChange: (e) => setEmail(e.target.value),
          value: email,
        }}
      />
      <Input
        labelText="Password"
        inputProps={{
          type: "password",
          onChange: (e) => setPassword(e.target.value),
          value: password,
        }}
      />
      <Button text="Signin" className="p-2 bg-yellow-300 my-8" />
    </form>
  );
}
