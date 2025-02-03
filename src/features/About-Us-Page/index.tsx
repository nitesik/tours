"use client";

import { useCallback, useEffect, useState } from "react";
import HeroComponent from "@/components/heroComponent";
import Image from "next/image";
import logo from "@/assets/logo-full.svg";
import { Button } from "@/components/ui/button";
import { Images } from "@/lib/images";
import ContactForm from "@/components/contactForm";
import { jumpToContact } from "@/lib/siteConfigs";

const options = {
  threshold: 0.35,
  root: null,
  // rootMargin: "50px",
} satisfies IntersectionObserverInit;

export default function AboutUsPage() {
  const [id, setId] = useState<string[]>([]);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (!id.includes(entry.target.id)) {
        if (entry.isIntersecting) {
          // setId((prev) => [...prev, entry.target.id]);
          const arr = id;
          arr.push(entry.target.id);
          setId([...arr]);
        }
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".capture");
    targets.forEach((target) => observer.observe(target));
  }, []);

  return (
    <main className="flex-1 ">
      <HeroComponent id={id} />
      <section id={"1"} className="test h-fit py-14 capture">
        <div className="w-full text-primary 2xl:max-w-[1500px] mx-auto text-black flex flex-col lg:grid grid-cols-2 ">
          <div className="grid place-content-center">
            <Image
              src={logo}
              alt={"logo"}
              width={0}
              className="w-full h-full p-10"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-5 font-bebas font-semibold">
            <h4 className="text-2xl">
              WHO ARE THE{" "}
              <span className="text-primary ">WINGS TO HIMALAYAN KINGDOM</span>
            </h4>
            <h1 className="text-[60px] text-white">ABOUT US</h1>
            <Button onClick={jumpToContact} className="w-fit text-2xl py-7">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>

      <section className="h-fit capture bg-foreground ">
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${Images.imageFour})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="flex items-center full py-14 px-5"
        >
          <div
            id={"4"}
            className="capture w-full 2xl:max-w-[1500px] mx-auto grid lg:grid-cols-3"
          >
            <div className="font-bebas grid gap-5 text-black bg-white p-7 rounded">
              <h1 className=" text-3xl">
                OUR <span className="text-primary">MISSION</span>
              </h1>
              <p className="text-2xl">
                At Wings to Himalayan Kingdom Tours and Treks, our mission is to
                provide travelers with immersive and transformative experiences
                in the heart of the Himalayas. We aim to deliver exceptional
                trekking and touring adventures, offering expert guidance,
                personalized itineraries, and a deep respect for the culture,
                environment, and heritage of the regions we explore. Our
                commitment is to ensure safe, sustainable, and enriching
                journeys that create lifelong memories for our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-fit flex bg-muted  py-14">
        <div className="customDiv" />
        <div
          id={"6"}
          className="flex-1 capture pl-5 grid md:grid-cols-2 gap-5 overflow-x-hidden"
        >
          <div className=" flex flex-col gap-5 justify-center">
            <h1 className="font-bebas font-bold text-[60px]">
              OUR <span className="text-primary">VISION</span>
            </h1>
            <p className="font-semibold">
              Our vision is to be the leading provider of Himalayan travel
              experiences, known for our dedication to sustainability,
              authenticity, and high-quality service. We aspire to connect
              travelers with the breathtaking beauty and rich cultural tapestry
              of the Himalayan Kingdoms, while fostering a deeper understanding
              of nature and promoting responsible tourism. Through our efforts,
              we seek to empower local communities, preserve the environment,
              and inspire a global audience to appreciate the wonders of the
              Himalayas.
            </p>
            <p className="font-semibold">
              To discuss your travel plans, we welcome you to arrange a meeting
              or phone call, enabling us to provide expert guidance shaped to
              your preferences.
            </p>
            <Button
              onClick={jumpToContact}
              className="w-fit p-7 font-bebas text-3xl"
            >
              CONTACT US
            </Button>
          </div>
          <div className="">
            <div
              className={`flex items-center h-[500px] transition-all duration-500 ${id.includes("6") ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={Images.imageThree}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
