import React, { useState } from "react";
import { Link } from "react-router";

import { Dock, DockIcon } from "@/components/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";

import { Setting, Paste, Note } from "@/components/icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function Menu() {
  const dock = {
    functions: [
      {
        icon: <Paste className="size-full " />,
        title: "Paste",
        key: "paste",
        path: "/paste",
      },
      {
        icon: <Note className="size-full " />,
        title: "Note",
        key: "note",
        path: "/note",
      },
    ],
    setUp: [
      {
        icon: <Setting className="size-full " />,
        title: "Setting",
        key: "setting",
        path: "",
      },
    ],
  };

  const [selected, setSelected] = useState("paste");

  const handleClick = (key: string) => {
    setSelected(key);
  };

  return (
    <div className="relative w-full h-20 flex items-center justify-center">
      <TooltipProvider>
        <Dock iconMagnification={60} iconDistance={100}>
          {dock.functions.map((item) => {
            return (
              <DockIcon
                onClick={() => handleClick(item.key)}
                className={`bg-black/10 dark:bg-white/10 ${
                  selected === item.key ? "bg-black/20 dark:bg-white/20" : ""
                }  `}
                key={item.key}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={item.path}>{item.icon}</Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })}
          <Separator orientation="vertical" className="h-full" />

          {/* {dock.setUp.map((item) => {
            return (
              <DockIcon className="bg-black/10 dark:bg-white/10" key={item.key}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>{item.icon}</div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.title}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            );
          })} */}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
