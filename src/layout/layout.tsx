import React from "react";
import { DockMenu } from "./dock";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full flex ">
      <DockMenu></DockMenu>
      <div className="flex-1 no-scrollbar">{children}</div>
    </div>
  );
}
