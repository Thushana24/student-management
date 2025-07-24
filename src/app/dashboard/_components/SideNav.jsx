"use client";
import Image from "next/image";
import {
  BookAIcon,
  GraduationCap,
  Hand,
  Layers2Icon,
  SettingsIcon,
} from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

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
    {
      id: 5,
      name: "Academic",
      icon: BookAIcon,
      children: [
        {
          id: "5-1",
          name: "Faculties",
          path: "/dashboard/faculties",
        },
        {
          id: "5-2",
          name: "Departments",
          path: "/dashboard/departments",
        },
        {
          id: "5-3",
          name: "Batches",
          path: "/dashboard/batches",
        },
      ],
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

      {menuList.map((menu, index) =>
        menu.children ? (
          <div key={index} className="w-full">
            <div className="flex items-center gap-5 p-3 font-semibold text-purple-900 dark:text-white">
              <menu.icon />
              {menu.name}
            </div>
            <div className="ml-8 space-y-2">
              {menu.children.map((child, childIndex) => (
                <Link key={childIndex} href={child.path}>
                  <div className="flex items-center gap-4 p-2 font-medium text-purple-800 transition hover:bg-purple-900/90 hover:text-white hover:rounded-lg dark:text-white">
                    ▸ {child.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link key={index} href={menu.path}>
            <div className="flex items-center justify-start gap-5 p-3 font-semibold text-purple-900 transition-all duration-500 ease-in-out cursor-pointer dark:text-white hover:text-white text-md hover:bg-purple-900/90 hover:rounded-lg">
              <menu.icon />
              {menu.name}
            </div>
          </Link>
        )
      )}

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
