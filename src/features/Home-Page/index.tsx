"use client";

import { useCallback, useEffect, useState } from "react";
import HeroComponent from "@/components/heroComponent";
import { CarouselImages, Images } from "@/lib/images";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { jumpToContact, services } from "@/lib/siteConfigs";
import ContactForm from "@/components/contactForm";
import Link from "next/link";
import { Items } from "@/lib/itineraries";
import { SquareArrowOutUpRight } from "lucide-react";

const options = {
  threshold: 0.35,
  root: null,
  // rootMargin: "50px",
} satisfies IntersectionObserverInit;

export default function HomePage() {
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
    <main className="h-fit flex-1">
      <HeroComponent id={id}/>

      <section
        id={"1"}
        className="test h-fit bg-accent-foreground py-14 capture"
      >
        <div className="w-full 2xl:max-w-[1500px] mx-auto text-black flex flex-col lg:grid grid-cols-2 ">
          <div
            id={"1"}
            className="flex capture items-center justify-center mx-5 mb-5 md:mb-0 lg:mx-0"
          >
            <div
              className={`lg:w-[300px] w-full h-[250px]  lg:h-[400px] overflow-hidden duration-500 rounded transition-all ${id.includes("1") ? "opacity-100 -translate-y-[35px]" : "opacity-0 translate-y-[35px]"} `}
            >
              <img
                src={Images.imageOne}
                alt={"image"}
                className={`w-full object-cover object-center h-full hover:scale-125 transition-all `}
              />
            </div>
            <div
              className={`lg:w-[300px] w-full h-[250px] lg:h-[400px] overflow-hidden rounded transition-all duration-500 ${
                id.includes("1")
                  ? "translate-y-[5px] lg:-translate-x-[50px] opacity-100"
                  : "opacity-0 -translate-y-[35px] xl:translate-x-[50px]"
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
            className={`px-5 flex flex-col gap-5 justify-between items-center lg:items-start transition-all duration-500 ${
              id.includes("1")
                ? "opacity-100" + " translate-y-0"
                : "opacity-0 translate-y-[35px]"
            }`}
          >
            <h5 className="uppercase text-2xl font-bebas">
              Why Choose{" "}
              <span className="text-primary">Wings To Himalayan Kingdom</span>
            </h5>
            <h1 className="text-[40px] lg:text-[60px] text-center lg:text-start font-bebas">
              <span className="text-transparent text-stroke-3">
                Exclusive Journeys
              </span>{" "}
              and Select Departures to Remote Corners of Bhutan.
            </h1>
            <ul className="text-lg  font-semibold text-start list-disc grid gap-3 marker:text-primary">
              <li>
                <span className="text-primary font-bold">
                  Tailored Travel Experiences:
                </span>{" "}
                We understand that every traveler is unique. That’s why we offer
                customized tours based on your interests and preferences,
                ensuring that your trip to Bhutan is memorable and truly
                special.
              </li>
              <li>
                <span className="text-primary font-bold">Expert Guides:</span>{" "}
                Our knowledgeable, English-speaking local guides will take you
                on a journey through Bhutan’s rich cultural heritage, explaining
                the history, traditions, and significance of each site you
                visit.
              </li>
              <li>
                <span className="text-primary font-bold">
                  Hassle-Free Travel:
                </span>{" "}
                From flight bookings to visa arrangements, and everything in
                between, we handle all the logistics to ensure a smooth,
                stress-free travel experience. Our team takes care of every
                detail so you can focus on enjoying the beauty of Bhutan.
              </li>
              <li>
                {" "}
                <span className="text-primary font-bold">
                  Sustainable Travel:
                </span>{" "}
                As Bhutan remains one of the most environmentally conscious
                countries in the world, we are proud to support sustainable
                tourism. We help minimize the impact on the environment while
                promoting cultural preservation and responsible travel.
              </li>
            </ul>
            <Button onClick={jumpToContact} className="py-6 w-fit px-7">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
      <section className=" py-14 h-fit mx-5">
        <div
          id={"2"}
          className={`capture w-full 2xl:max-w-[1500px] mx-auto flex flex-col gap-5 transition-all duration-500 ${
            id.includes("2")
              ? "opacity-100" + " translate-y-0"
              : "opacity-0 translate-y-[35px]"
          }`}
        >
          <span className="flex justify-between gap-5 lg:gap-0 flex-col lg:flex-row">
            <h1 className="text-[30px] lg:text-[40px] font-rye">
              Discover the{" "}
              <span className="text-primary">Kingdom of Bhutan</span>
            </h1>
            <p className="text-start w-full lg:w-1/2 text-lg font-semibold">
              <span className="text-primary font-semibold">
                Nestled in the eastern Himalayas,
              </span>{" "}
              Bhutan is a hidden gem that remains untouched by modern pressures.
              With its awe-inspiring mountain peaks, serene monasteries, and
              lush valleys, Bhutan offers more than just scenic beauty; it
              invites you into a world where happiness is the measure of
              success, and nature is revered as sacred.
              <br className="mb-3"/>
              From the iconic Tiger’s Nest Monastery perched on the edge of a
              cliff to the tranquil valleys of Paro and Punakha, Bhutan is a
              destination like no other. Whether you seek spiritual
              enlightenment, adventure in the mountains, or cultural immersion,
              Bhutan has something for every traveler.
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
                        className={"rounded w-full h-full object-cover"}
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
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              className={`origin-left h-[600px] transition-all duration-1000 rounded-e overflow-x-hidden ${id.includes("3") ? "w-full lg:w-[760px]" : "w-0"}`}
            >
              <img
                src={Images.imageThree}
                className="h-full object-cover lg:min-w-[760px] "
              />
            </div>
            <div className="flex items-center">
              <h1
                className="font-bold mt-5 lg:mt-0 text-[35px] text-center lg:text-[60px] font-bebas lg:text-end text-primary">
                Wings To Himalayan Kingdom are true specialists in accessing the
                wilderness. They know where to go and importantly, when to go
                there. Highly recommended
              </h1>
            </div>
          </div>
        </div>
        <div className="customDiv"></div>
      </section>

      <section className="h-fit capture bg-foreground py-14">
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${Images.imageFour})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="flex items-center h-[500px] px-5"
        >
          <div id={"4"} className="capture w-full 2xl:max-w-[1500px] mx-auto">
            <div
              className={`bg-foreground w-full text-center lg:text-start lg:w-[500px] px-5 py-9 transition-all duration-500 ${
                id.includes("4")
                  ? "opacity-100" + " translate-y-0"
                  : "opacity-0 translate-y-[35px]"
              }`}
            >
              <h1 className="text-primary text-[30px] font-bold font-bebas">
                OUR SERVICES
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
          className={`w-full 2xl:max-w-[1500px] flex flex-col justify-center items-center lg:grid grid-cols-3 gap-10 transition-all duration-500 mx-auto px-5 text-background ${id.includes("4") ? "-translate-y-[60px]" : "translate-y-0"}`}
        >
          {services.map((datum, index) => (
            <div key={index} className={"flex flex-col items-center gap-7"}>
              <div className={"bg-primary p-10 rounded-full text-white"}>
                <datum.Icon width={50} height={50}/>
              </div>
              <div className={"text-center flex flex-col gap-3"}>
                <span className="text-3xl font-bebas">
                  <h1>SERVICE {index + 1}:</h1>
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
        <div
          className="w-full 2xl:max-w-[1500px] mx-auto grid gap-10 lg:grid-cols-4 [&>div>img]:border [&>div>img]:border-primary [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:gap-5">
          <div>
            <img
              src={Images.imageSix}
              id={"5"}
              className={`${id.includes("5") ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[35px]"} capture transition-all duration-500`}
            />
          </div>
          <div>
            <img
              src={Images.imageSeven}
              className={`${id.includes("5") ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[35px]"} transition-all duration-500`}
            />
            <img
              src={Images.imageEight}
              className={`${id.includes("5") ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[35px]"} transition-all duration-500`}
            />
          </div>
          <span className={"text-foreground  flex flex-col gap-7"}>
            <h1 className="text-[35px] uppercase font-bebas">
              {/*Why <span className="text-primary">Choose</span> <br /> Wings To*/}
              {/*Himalayan Kingdom?*/}
              Explore Bhutan with
              <br/>
              <span className="text-primary">Wings to Himalayan Kingdom.</span>
            </h1>
            <p>
              When you travel with us, you are not just visiting a country – you
              are stepping into a living, breathing cultural experience that
              will leave you inspired and rejuvenated. Let Wings to Himalayan
              Kingdom be your guide as you explore this magical kingdom, where
              every moment feels like a journey of discovery.
            </p>
            <p>
              We prioritize personalization, supported by our deep,
              long-standing partnerships with trusted local collaborators. These
              enduring relationships, developed over decades, allow us to create
              authentic and impactful Bhutanese experiences that truly connect
              with our clients.
            </p>
            <Link href={"/about-us"} className="">
              <Button className="w-full">ABOUT US</Button>
            </Link>
          </span>
          <div>
            <img
              src={Images.imageNine}
              id={"5"}
              className={`${id.includes("5") ? "translate-y-0 opacity-100" : "opacity-0 translate-y-[35px]"} capture transition-all duration-500`}
            />
          </div>
        </div>
      </section>

      <section className="h-fit flex bg-muted  py-14">
        <div className="customDiv"/>
        <div
          id={"6"}
          className="flex-1 capture pl-5 grid md:grid-cols-2 gap-5 overflow-x-hidden"
        >
          <div className=" flex flex-col gap-5 justify-center">
            <h3 className="font-bebas font-semibold text-2xl">OUR APPROACH</h3>
            <h1 className="font-bebas font-bold text-[60px]">
              Remote, <span className="text-primary">Elite,</span> Uninterrupted
            </h1>
            <p className="font-semibold">
              Contact us today to start planning your unforgettable Bhutan
              adventure. Whether you are looking for a peaceful retreat, an
              adventurous trek, or a cultural immersion, we are here to help you
              experience the best that Bhutan has to offer.
            </p>
            <p className="font-semibold">
              To discuss your travel plans, we welcome you to arrange a meeting
              or phone call, enabling us to provide expert guidance shaped to
              your preferences.
            </p>
            <Button
              onClick={() => jumpToContact()}
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
                src={Images.imageFive}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id={"5"}
        className="h-fit capture px-5 text-background bg-background py-14"
      >
        <div
          className="w-full 2xl:max-w-[1500px] mx-auto gap-10">
          <h1 id={"itineraries"} className="text-primary text-[50px] font-bold font-bebas w-fit mx-auto">
            ITINERARIES
          </h1>
          <div className="gap-5 mt-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
            {
              Items.map((item, index) => (
                <Link href={item.href} prefetch={false} key={index} target={"_blank"}
                      className="border hover:bg-muted py-3 px-5 rounded border-primary text-primary w-full flex justify-between items-center">
                  <p className="font-bold">{item.title}</p> <SquareArrowOutUpRight/></Link>
              ))
            }
          </div>
        </div>
      </section>

      <ContactForm/>
    </main>
  );
}
