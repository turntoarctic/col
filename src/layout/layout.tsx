import React from "react";
import { Dock, DockIcon } from "../components/dock";
import {DockDemo} from "./dock";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <DockDemo></DockDemo>
    </div>
  );
}
