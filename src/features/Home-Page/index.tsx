"use client";

import { useCallback, useEffect, useState } from "react";
import HeroComponent from "@/components/heroComponent";
import { CarouselImages, Images } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { stepsToPerform } from "@/lib/siteConfigs";

const options = {
  threshold: 0.55,
  root: null,
  // rootMargin: "50px",
} satisfies IntersectionObserverInit;

export default function HomePage() {
  const [id, setId] = useState<string | null>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setId(entry.target.id);
      }
    });
  }, []);

  // const callback = (
  //   entries: IntersectionObserverEntry[],
  //   observer: IntersectionObserver,
  // ) => {
  //   console.log(entries[0].target.id, observer, 1);
  // };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll(".capture");
    targets.forEach((target) => observer.observe(target));
  }, []);

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <main className="h-fit">
      <HeroComponent />
      <section
        id={"1"}
        className="test h-fit bg-accent-foreground py-14 capture"
      >
        <div className="w-full 2xl:max-w-[1500px] mx-auto text-black grid grid-cols-2">
          <div className="flex items-center justify-center ">
            <div
              className={`w-[300px] h-[400px] overflow-hidden duration-500 rounded transition-all ${id === "1" ? "opacity-100 -translate-y-[35px]" : "opacity-0 translate-y-[35px]"}`}
            >
              <img
                src={Images.imageOne}
                alt={"image"}
                className={`w-full object-cover object-center h-full hover:scale-125 transition-all `}
              />
            </div>
            <div
              className={`w-[300px] h-[400px] overflow-hidden rounded transition-all duration-500 ${
                id === "1"
                  ? "translate-y-[35px] -translate-x-[50px] opacity-100"
                  : "opacity-0 -translate-y-[35px] translate-x-[50px]"
              }`}
            >
              <img
                src={Images.imageTwo}
                alt={"image"}
                className={
                  "w-full object-cover object-center h-full hover:scale-125 transition-all "
                }
              />
            </div>
          </div>
          <div
            className={`flex flex-col gap-5 justify-between transition-all duration-500 ${
              id === "1"
                ? "opacity-100" + " translate-y-0"
                : "opacity-0 translate-y-[35px]"
            }`}
          >
            <h5 className="uppercase text-2xl font-bebas">
              Why Choose <span className="text-primary">BHUTAN TRAVELS</span>
            </h5>
            <h1 className="text-[70px] font-bebas">
              <span className="text-transparent text-stroke-3">
                Exclusive Journeys
              </span>{" "}
              and Select Departures to Remote Corners of Bhutan.
            </h1>
            <p className="text-lg font-semibold">
              We specialise in providing curious travellers with access to
              regions and communities that would otherwise prove challenging.{" "}
              <br /> We are committed to offering unique travel opportunities,
              to unusual destinations, that are mutually beneficial to all
              involved.
            </p>
            <Button className="py-6 w-fit px-7">CONTACT US</Button>
          </div>
        </div>
      </section>
      <section id={"2"} className="capture py-14 h-fit mx-5">
        <div
          className={`w-full 2xl:max-w-[1500px] mx-auto flex flex-col gap-5 transition-all duration-500 ${
            id === "2"
              ? "opacity-100" + " translate-y-0"
              : "opacity-0 translate-y-[35px]"
          }`}
        >
          <span className="flex justify-between">
            <h1 className="text-[40px] font-rye">
              WHERE WE <span className="text-primary">OPERATE</span>
            </h1>
            <p className="text-start w-1/2 text-lg font-semibold">
              <span className="text-primary font-semibold">Bhutan Travels</span>{" "}
              excels at navigating the varied terrains of Bhutan, providing
              seamless safari experiences in some of the country’s most
              extraordinary locations.
              <br className="mb-3" />
              From the dynamic wilderness of Paro to the verdant,
              wildlife-abundant forests of Trongsa, and the stark isolation of
              the Haa, our places are as diverse as they are memorable.
            </p>
          </span>
          <div>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {CarouselImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                  >
                    <div className="w-[300px] h-[500px]">
                      <img
                        src={image.url}
                        alt={"image"}
                        className={"rounded w-full h-full"}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
      <section id={"3"} className="h-fit flex bg-muted capture py-14">
        <div className="flex-1 pr-5">
          <div className="grid grid-cols-2">
            <div
              className={`origin-left h-[600px] transition-all duration-1000 rounded-e overflow-x-hidden ${id === "3" ? "w-[800px]" : "w-0"}`}
            >
              <img
                src={Images.imageThree}
                className="h-full object-cover min-w-[800px] "
              />
            </div>
            <div className="flex items-center">
              <h1 className="font-bold text-[60px] font-bebas text-end text-primary">
                Bhutan Travels are true specialists in accessing the wilderness.
                They know where to go and importantly, when to go there. Highly
                recommended
              </h1>
            </div>
          </div>
        </div>
        <div className="customDiv"></div>
      </section>

      <section id={"4"} className="h-fit capture bg-foreground py-14">
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${Images.imageFour})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="flex items-center h-[500px] px-5"
        >
          <div className="w-full 2xl:max-w-[1500px] mx-auto">
            <div
              className={`bg-foreground w-[500px] px-5 py-9 transition-all duration-500 ${
                id === "4"
                  ? "opacity-100" + " translate-y-0"
                  : "opacity-0 translate-y-[35px]"
              }`}
            >
              <h1 className="text-primary text-[30px] font-bold font-bebas">
                HOW IT WORKS
              </h1>
              <p className="text-background font-semibold text-lg">
                We believe meaningful travel begins with genuine connections. We
                take the time to understand each client’s interests and rely on
                well-established local partnerships to create private, carefully
                tailored itineraries that balance comfort with thoughtful
                exploration.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`w-full 2xl:max-w-[1500px] grid grid-cols-3 gap-10 transition-all duration-500 mx-auto px-5 text-background ${id === "4" ? "-translate-y-[60px]" : "translate-y-0"}`}
        >
          {stepsToPerform.map((datum, index) => (
            <div key={index} className={"flex flex-col items-center gap-7"}>
              <div className={"bg-primary p-10 rounded-full text-white"}>
                <datum.Icon width={50} height={50} />
              </div>
              <div className={"text-center flex flex-col gap-3"}>
                <span className="text-3xl font-bebas">
                  <h1>STEP {index + 1}:</h1>
                  <h1 className="text-primary">{datum.title}</h1>
                </span>
                <p className={"text-center font-semibold"}>
                  {datum.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id={"5"}
        className="h-fit capture px-5 text-background bg-background py-14"
      >
        <div className="w-full 2xl:max-w-[1500px] mx-auto grid gap-10 grid-cols-4 [&>div>img]:border [&>div>img]:border-primary [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:gap-5">
          <div>
            <img
              src={Images.imageThree}
              width={300}
              height={500}
              className={`${id === "5" ? "translate-y-0 opacity-100" : "opacity-50 translate-y-[35px]"} transition-all duration-500`}
            />
          </div>
          <div>
            <img
              src={Images.imageOne}
              width={300}
              height={500}
              className={`${id === "5" ? "translate-y-0 opacity-100" : "opacity-50 translate-y-[35px]"} transition-all duration-500`}
            />
            <img
              src={Images.imageTwo}
              width={300}
              height={500}
              className={`${id === "5" ? "translate-y-0 opacity-100" : "opacity-50 translate-y-[35px]"} transition-all duration-500`}
            />
          </div>
          <span className={"text-foreground  flex flex-col gap-7"}>
            <h1 className="text-[50px] uppercase font-bebas">
              Why <span className="text-primary">Choose</span> <br /> Bhutan
              Travels?
            </h1>
            <p>
              Bhutan Travel’s independence allows us to remain fully dedicated
              to designing bespoke experiences that reflect the unique
              preferences of each client, free from the influence of external
              shareholders or corporate constraints.
            </p>
            <p>
              Our emphasis on personalization is complemented by long-standing
              relationships with trusted local partners. These enduring
              connections, built over decades, enable us to craft meaningful and
              insightful Bhutanese journeys that deeply resonate with our
              clients.
            </p>
            <Button>ABOUT US</Button>
          </span>
          <div>
            <img
              src={Images.imageFour}
              width={300}
              height={500}
              className={`${id === "5" ? "translate-y-0 opacity-100" : "opacity-50 translate-y-[35px]"} transition-all duration-500`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
