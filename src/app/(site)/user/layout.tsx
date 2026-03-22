"use client";
import Sidebar from "@/widgets/sidebar/SideBar";
import React from "react";

const LayoutSideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex" }} className="layoutSideBar">
      <Sidebar />
      {children}
    </div>
  );
};

export default LayoutSideBar;
