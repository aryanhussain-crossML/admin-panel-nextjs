"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const MenuItem = ({ item, depth = 0 }) => {
  console.log("item in the menu items", item);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const hasChildren = item.children && item.children.length > 0;

  const handleRoute = (name: any) => {
    console.log("link", name);
    router.push(`/${name}`);
  };

  return (
    <div className="pl-4">
      <div
        className={`flex items-center p-2 cursor-pointer hover:bg-red-500 ${
          depth > 0 ? "pl-" + (depth * 4 + 2) : ""
        } `}
        style={{
          paddingLeft: `${depth * 16 + 2}px`,
        }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span className="mr-2 text-red">
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
        <span
          onClick={() => !hasChildren && handleRoute(item?.link)}
          // style={{
          //   paddingLeft: `${depth * 10 + 2}px`,
          // }}
          className="text-white"
        >
          {item.name}
        </span>
      </div>
      {isOpen &&
        hasChildren &&
        item.children.map((child, index) => (
          <MenuItem key={index} item={child} depth={depth + 1} />
        ))}
    </div>
  );
};

const Sidebar = ({ items }) => {
  return (
    <div className="w-64 bg-main text-white shadow-lg h-screen">
      <div className="p-4 text-xl font-bold">Admin Panel</div>
      <nav>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
