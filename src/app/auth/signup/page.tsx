"use client";
import { signInWithEmailAndPassword, signUpWithEmailAndPassword } from "@/app/auth-server-actions/actions";
import Button from "@/components/util/Button";
import Input from "@/components/util/Input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, FormEventHandler, useState } from "react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const result = await signUpWithEmailAndPassword({
      email,
      password,
      confirm: password,
    });

    const { error } = JSON.parse(result);
    if (error?.message) {
      alert(error.message);
    } else {
      alert("Successfully Registered");
    }

    // const { error } = await supabase.auth.signUp({
    //   email,
    //   password,
    // });

    // if (error) {
    //   alert(error.message);
    // } else {
    //   router.refresh();
    // }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSignup}>
      <h1 className=" font-extrabold text-lg ">Signup</h1>
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
      <Button text="Signup" className="p-2 bg-yellow-300 my-8" />
    </form>
  );
}
