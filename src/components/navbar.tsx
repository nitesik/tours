"use client";

import logo from "@/assets/logo-part.svg";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { jumpToContact } from "@/lib/siteConfigs";

export default function Navbar() {
  const [yPos, setYPos] = useState(0);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const setYPosition = useCallback(() => {
    setYPos(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", setYPosition);
    return () => {
      document.removeEventListener("scroll", setYPosition);
    };
  }, []);

  return (
    <nav
      className={`p-5 ${
        yPos > 50
          ? "sticky top-0 bg-background border-primary"
          : "border-transparent bg-background py-8"
      } transition-all text-primary duration-500 z-50 border-b`}
    >
      <div className="flex items-center justify-between w-full 2xl:max-w-[1500px] mx-auto">
        <Link href="/" className="flex gap-5 items-center">
          <Image src={logo} alt={"logo"} width={125} />
          <h1 className="text-3xl hidden xl:inline font-bebas font-bold">
            Wings To Himalayan Kingdom
          </h1>
        </Link>
        <div className="hidden md:flex gap-5 items-center text-lg font-bold [&>*]:transition-transform hover:[&>*]:scale-105">
          <Link href={"/"}>Home</Link>
          <Link href={"/about-us"}>About Us</Link>
          <Button onClick={jumpToContact} className={""}>
            Contact Us
          </Button>
        </div>
        <div className="inline md:hidden">
          <Button variant="outline" onClick={() => setToggleNavbar(true)}>
            <MenuIcon width={40} />
          </Button>
          {toggleNavbar && (
            <div className="h-screen w-screen z-50 fixed top-0 left-0 bg-black">
              <div className="w-full h-full grid place-content-center text-3xl text-center font-semibold relative gap-5">
                <Link href={"/"} onClick={() => setToggleNavbar(false)}>
                  Home
                </Link>
                <Link href={"/about-us"} onClick={() => setToggleNavbar(false)}>
                  About Us
                </Link>
                <Button
                  onClick={() => {
                    jumpToContact();
                    setToggleNavbar(false);
                  }}
                  className={""}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setToggleNavbar(false)}
                  className={"absolute top-0 right-0 m-8"}
                >
                  <XIcon width={40} />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
