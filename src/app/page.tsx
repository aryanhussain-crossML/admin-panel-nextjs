"use client";

import { redirect } from "next/navigation";
import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function Home() {
  redirect("/dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      children: [
        {
          name: "Analytics",
          children: [{ name: "Analytics" }, { name: "Reports" }],
        },
        { name: "Reports" },
      ],
    },
    {
      name: "Users",
      children: [{ name: "Manage Users" }, { name: "User Roles" }],
    },
    { name: "Settings" },
  ];

  return (
    <main className="flex">
      <Sidebar items={menuItems} />
      <section className="Sidemain bg-main"></section>
    </main>
  );
}
