import logoFull from "@/assets/logo-full.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="p-5 text-center md:text-start">
      <div className="flex md:flex-row flex-col items-center gap-5 justify-center w-full 2xl:max-w-[1500px] mx-auto">
        <div className="font-rye text-[60px] text-primary">
          <Image src={logoFull} alt={"Logo"} width={275} />
        </div>
        <hr className="h-[200px] border-2  border-primary hidden md:inline" />
        <div className="grid gap-5 font-bebas text-primary text-3xl">
          <span>
            <a href="tel:77655585">+975-77655585</a>
          </span>
          <a href="mailto:wingstobhutan@outlook.com">
            wingstobhutan@outlook.com
          </a>
          <span>
            <p>Address: Wings to Himalayan Kingdom, Thimphu, Bhutan</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
