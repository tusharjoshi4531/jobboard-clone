"use client";
import Card from "@/components/Card";
import Button from "@/components/util/Button";
import CustomSelect from "@/components/util/CustomSelect";
import Input from "@/components/util/Input";

import { FormEventHandler, useState } from "react";

type Configuration = {
  title: string;
  description: string;
  primary: string;
};
export default function AppearanceSettingsPage() {
  const [configuration, setConfiguration] = useState<Configuration>({
    title: "",
    description: "",
    primary: "light",
  });

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    console.log(process.env.NEXT_PUBLIC_DEPOYMENT_URL);
    console.log(process.env);

    const url = new URL("/api/config", process.env.NEXT_PUBLIC_DEPOYMENT_URL!);

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(configuration),
    });

    console.log(res);
  };

  return (
    <>
      <Card className="flex flex-col p-8">
        <h1 className="text-lg font-extrabold">Configure Application</h1>
        <span className="border w-full border-yellow-300 my-2"></span>
        <form className="flex flex-col" onSubmit={handleFormSubmit}>
          <Input
            inputProps={{
              onChange: (e) =>
                setConfiguration((prev) => ({
                  ...prev,
                  title: e.target.value,
                })),
              value: configuration.title,
            }}
            labelText="Title"
            className="mb-6"
          />
          <Input
            inputProps={{
              onChange: (e) =>
                setConfiguration((prev) => ({
                  ...prev,
                  description: e.target.value,
                })),
              value: configuration.description,
            }}
            labelText="Description"
            className="mb-6"
          />
          <CustomSelect
            selected={configuration.primary}
            onSelect={(selected) => {
              setConfiguration((prev) => ({ ...prev, primary: selected }));
            }}
            options={[
              {
                id: "#00b893",
                component: (
                  <div
                    className="px-8 py-4"
                    style={{ backgroundColor: "#00b893" }}
                  >
                    #00b893
                  </div>
                ),
              },
              {
                id: "#f00084",
                component: (
                  <div
                    className="px-8 py-4 bg-slate-700 text-white"
                    style={{
                      backgroundColor: "#f00084",
                    }}
                  >
                    #f00084
                  </div>
                ),
              },
            ]}
          />
          <Button
            className="w-full bg-yellow-300 p-3 my-4"
            text="Submit"
            textAlign="center"
          />
        </form>
        <form>
          <Button
            className="w-full bg-slate-200 p-3 my-4"
            text="Create Portal"
          />
        </form>
        <form action="/auth/signout" method="post">
          <Button
            className="w-full bg-slate-200 p-3 my-4"
            text="Signout"
            textAlign="center"
          />
        </form>
        <Button
          className="w-full bg-slate-200 p-3 my-4"
          text="Get Data"
          onClick={async () => {
            const url = new URL(
              "/api/config",
              process.env.NEXT_PUBLIC_DEPOYMENT_URL!
            );

            const res = await fetch(url, {
              method: "GET",
            });

            const data = await res.json();
            console.log({ data });
            alert(JSON.stringify(data));
          }}
        />
      </Card>
    </>
  );
}
