"use client";
import Image from "next/image";
import { GraduationCap, Hand, Layers2Icon, SettingsIcon } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const SideNav = () => {
  const { user } = useKindeBrowserClient();

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: Layers2Icon,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Students",
      icon: GraduationCap,
      path: "/dashboard/students",
    },
    {
      id: 3,
      name: "Attendance",
      icon: Hand,
      path: "/dashboard/attendance",
    },
    {
      id: 4,
      name: "Settings",
      icon: SettingsIcon,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="p-4 border rounded-md shadow-md h-dvh">
      <div className="flex items-center justify-center w-full space-x-2">
        <Image src={"/logo.svg"} width={30} height={10} alt="logo" />
        <h1 className="text-2xl font-bold text-purple-900 dark:text-white">
          RoLL CaLL
        </h1>
      </div>
      <hr className="my-5 shadow-sm" />

      {menuList.map((menu, index) => (
        <div
          key={index}
          className="flex items-center justify-start gap-5 p-3 font-semibold text-purple-900 transition-all duration-500 ease-in-out cursor-pointer dark:text-white hover:text-white text-md hover:bg-purple-900/90 hover:rounded-lg"
        >
          <menu.icon />
          {menu.name}
        </div>
      ))}

      <div className="fixed flex items-center gap-2 p-2 bottom-5">
        {user?.picture ? (
          <Image
            src={user.picture}
            width={35}
            height={35}
            alt="user"
            className="rounded-full"
          />
        ) : null}
        <div className="text-purple-900 dark:text-white">
          <h2 className="text-sm font-semibold">
            {user?.given_name} {user?.family_name}
          </h2>
          <h2 className="text-xs">{user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
