"use client";
import Card from "@/components/Card";
import DashboardMenu from "@/components/menu/DashboardMenu";
import Button from "@/components/util/Button";
import CustomSelect from "@/components/util/CustomSelect";
import DropdownMenu from "@/components/util/DropdownMenu";
import Input from "@/components/util/Input";
import JobPostCard from "@/components/util/JobPostCard";
import Toggle from "@/components/util/Toggle";
import { useState } from "react";

const SettingsPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <div className=" w-64 sticky top-20 float-left mr-8 max-lg:hidden">
        <Card className="py-1 px-1">
          <DashboardMenu />
        </Card>
      </div>
      <div className="flex flex-col flex-1">
        <Card className="p-8 flex flex-col">
          <h1 className=" font-extrabold text-lg">Board Settings</h1>
          <span className="border w-full border-yellow-300 my-2"></span>
          <form className="flex flex-col">
            <Input
              labelText="Name"
              className="mb-6"
              inputProps={{ placeholder: "Your Name" }}
            />
            <Input
              labelText="Contact Email"
              className="mb-6"
              inputProps={{ placeholder: "Email", type: "email" }}
            />
            <Input
              labelText="Operating company's legal name"
              className="mb-6"
            />
            <Input
              labelText="Company website url"
              className="mb-6"
              inputProps={{ type: "url" }}
            />
            <Input
              labelText="Input"
              className="mb-6"
              inputProps={{ type: "url" }}
            />
            <Input
              labelText="Input"
              className="mb-6"
              inputProps={{ type: "url" }}
            />
            <span className="border w-full border-gray-300 my-2"></span>
            <Toggle className="my-4" labelText="Toggle 1" />
            <Toggle className="my-4" labelText="Toggle 2" />
            <Toggle className="my-4" labelText="Toggle 3" />
            <Toggle className="my-4" labelText="Toggle 4" />
            <span className="border w-full border-gray-300 my-2"></span>
            <h1 className=" font-extrabold text-lg">Chose Theme</h1>

            <CustomSelect
              options={[
                {
                  id: "1",
                  component: <div className="px-8 py-4 bg-slate-200">1</div>,
                },
                {
                  id: "2",
                  component: <div className="px-8 py-4 bg-slate-400">2</div>,
                },
                {
                  id: "3",
                  component: (
                    <div className="px-8 py-4 bg-slate-700 text-white">3</div>
                  ),
                },
              ]}
              selected={selectedOption}
              onSelect={(selectedOption) => setSelectedOption(selectedOption)}
              className="my-6"
            />
            <DropdownMenu
              className="bg-slate-800 text-white p-2 rounded-lg my-4"
              options={[
                {
                  id: "1",
                  label: "text",
                },
                {
                  id: "2",
                  label: "night",
                },
              ]}
              placeholder="Select"
            />
            <DropdownMenu
              className=" bg-zinc-200 p-2 rounded-lg my-4"
              options={[
                {
                  id: "1",
                  label: "text",
                },
                {
                  id: "2",
                  label: "night",
                },
              ]}
              placeholder="Select"
            />
            <DropdownMenu
              className=" bg-zinc-400 text-white p-2 rounded-lg my-4"
              options={[
                {
                  id: "1",
                  label: "text",
                },
                {
                  id: "2",
                  label: "night",
                },
              ]}
              placeholder="Select"
            />
            <span className="border w-full border-gray-300 my-2"></span>

            <Button
              className="w-full bg-yellow-300 p-3 my-4"
              text="Submit"
              textAlign="center"
            />
          </form>
        </Card>
        {/* <JobPostCard className="my-4 bg-yellow-200"/> */}
      </div>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//   return {
//     props:{

//     }
//   }
// }

export default SettingsPage;
