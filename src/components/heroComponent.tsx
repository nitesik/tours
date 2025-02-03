import { Button } from "@/components/ui/button";
import { Images } from "@/lib/images";
import { jumpToContact } from "@/lib/siteConfigs";

export default function HeroComponent({ id }: { id: string[] }) {
  return (
    <section
      id={"0"}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${Images.backgroundImg})`,
        // backgroundPosition: "left",
      }}
      className="min-h-[750px] my-5 h-fit bg-left text-center lg:text-start flex items-center font-rye justify-center bg-opacity-0 capture"
    >
      <div
        className={`w-3/4 flex flex-col gap-5 justify-between items-center lg:items-start z-40 duration-500 transition-all ${id.includes("0") ? "translate-y-0 opacity-100" : "translate-y-[35px] opacity-50"}`}
      >
        <h3 className="text-2xl font-bebas font-bold text-white lg:leading-3">
          WELCOME TO{" "}
          <span className="text-primary">Wings To Himalayan Kingdom</span>
        </h3>
        <h1 className="text-[35px] lg:text-[60px] font-bold text-primary ">
          <span className="text-white">
            Your Gateway to <br />
            the Land of the{" "}
          </span>{" "}
          <br /> Thunder Dragon
          {/*<span className="text-white">JOURNEYS TO</span> <br /> BHUTAN*/}
        </h1>
        <h5 className="w-full font-bebas lg:w-1/2 font-bold text-2xl text-white">
          At Wings to Himalayan Kingdom, we are your trusted travel partner,
          offering personalized tours to one of the most enchanting and mystical
          destinations in the world – Bhutan. Known for its breathtaking
          landscapes, vibrant culture, and deep spirituality, Bhutan is a place
          where tradition and nature blend seamlessly to offer a truly unique
          travel experience.
        </h5>
        <Button onClick={jumpToContact} className="w-fit px-5 py-6">
          PLAN YOUR TRIP
        </Button>
      </div>
    </section>
  );
}
