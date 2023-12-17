"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sideMenuIsActive, setSideMenuIsActive] = useState(false);

  const handleSideMenuClick = (sideMenuIsActive: boolean) => {
    setSideMenuIsActive(sideMenuIsActive);
  };

  return (
    <>
      <Navbar onSideMenuClick={handleSideMenuClick} />

      {!sideMenuIsActive && (
        <>
          {/* <aside className="max-w-6xl my-4 mx-auto px-6">
            <p className="text-center rounded-lg border-black border p-3">
              <b>7 days left</b> on your trial. <b>Upgrade</b> before your trial
              ends.
            </p>
          </aside> */}
          <main className="mx-auto max-w-6xl mt-8 px-6 gap-8">{children}</main>
        </>
      )}
      {sideMenuIsActive && (
        <div className="w-full flex flex-col my-4">
          <div className="flex border-b border-b-gray-300">
            <button className="text-left py-4 px-6 text-lg flex-1">
              Dashboard
            </button>
          </div>
          <div className="flex border-b border-b-gray-300">
            <button className="text-left py-4 px-6 text-lg flex-1">
              Manage Board
            </button>
          </div>
          <div className="flex border-b border-b-gray-300">
            <button className="text-left py-4 px-6 text-lg flex-1">
              Manage Data
            </button>
          </div>
          <div className="flex border-b border-b-gray-300">
            <button className="text-left py-4 px-6 text-lg flex-1">
              My Account
            </button>
          </div>
          <div className="flex border-b border-b-gray-300">
            <button className="text-left py-4 px-6 text-lg flex-1">
              Open Board
            </button>
          </div>
          <button className=" rounded-lg bg-sky-500 px-2 my-auto h-9 text-sm font-bold text-white mx-auto mt-4 ">
            Upgrade now
          </button>
        </div>
      )}
    </>
  );
}
