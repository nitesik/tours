"use client";

import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // function setYPos(event: Event) {
  //   console.log(window.scrollY);
  // }

  const [yPos, setYPos] = useState(0);

  const setYPosition = useCallback(() => {
    setYPos(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", setYPosition);
    console.log("Hello!");

    return () => {
      document.removeEventListener("scroll", setYPosition);
    };
  }, []);

  return (
    <nav
      className={`p-5 ${
        yPos > 50
          ? "sticky top-0 bg-foreground border-b border-primary"
          : "bg-background py-8"
      } transition-all text-primary duration-500 z-50`}
    >
      <div className="flex items-center justify-between w-full 2xl:max-w-[1500px] mx-auto">
        <h1 className="text-3xl font-rye font-bold">Travel Company</h1>
        <div className="flex gap-5 items-center text-lg font-bold [&>*]:transition-transform hover:[&>*]:scale-105">
          <Link href={""}>About Us</Link>
          <Link href={""}>Packages</Link>
          <Button className={""}>Contact Us</Button>
        </div>
      </div>
    </nav>
  );
}
