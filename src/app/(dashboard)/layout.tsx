"use client";
import Sidebar from "@/components/layout/sidebar/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: "Home", link: "dashboard" },
    {
      name: "Dashboard",
      children: [
        {
          name: "Analytics",
          children: [
            { name: "Analytics", link: "analytics" },
            { name: "Reports", link: "reports" },
          ],
        },
        { name: "Orders", link: "orders" },

        { name: "Reports" },
      ],
    },
    {
      name: "Users",
      children: [
        { name: "Manage Users", link: "manage-user" },
        { name: "User Roles", link: "user-role" },
      ],
    },
    { name: "Settings" },
  ];
  return (
    <section className="flex">
      <Sidebar items={menuItems} />

      {children}
    </section>
  );
}
