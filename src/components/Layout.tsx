import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container min-h-screen flex flex-col items-center">
      <Navbar />
      {children}
    </div>
  );
}
