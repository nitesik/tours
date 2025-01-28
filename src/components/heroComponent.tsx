import { Button } from "@/components/ui/button";
import { Images } from "@/lib/images";

export default function HeroComponent() {
  return (
    <section
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75) ), url(${Images.backgroundImg})`,
        backgroundPosition: "center",
      }}
      className="h-[750px] bg-cover flex items-center font-rye justify-center bg-opacity-0 relative"
    >
      <div className={"w-3/4 h-3/4 flex flex-col justify-between z-40"}>
        <h3 className="text-2xl font-bold text-white leading-3">
          WELCOME TO <span className="text-primary">BHUTAN TRAVELS</span>
        </h3>
        <h1 className="text-[90px] font-bold text-primary ">
          <span className="text-white">JOURNEYS TO</span> <br /> BHUTAN
        </h1>
        <h5 className="w-1/2 font-bold text-3xl text-white">
          Our safaris exemplify the qualities of modern adventure travel –
          remote, exclusive and seamless.
        </h5>
        <Button className="w-fit px-5 py-6">PLAN YOUR TRIP</Button>
      </div>
    </section>
  );
}
