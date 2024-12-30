import { ReactNode } from "react";
import { Menu } from "./menu";
import { Container } from "./container";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex w-full h-full flex-col">
      <Container>{children}</Container>
      <Menu />
    </div>
  );
};
