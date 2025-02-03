import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section id="contact" className="h-fit flex bg-background py-14 mx-5">
      <div className="w-full 2xl:max-w-[1500px] mx-auto">
        <form className="mx-auto w-full lg:w-[800px] gap-8 flex flex-col items-center">
          <h1 className="text-[50px] font-rye text-primary">Contact Us!</h1>
          <div className="grid lg:grid-cols-2 gap-5 font-rye w-full [&>label>input]:rounded-none [&>label>h4]:text-primary [&>label>h4]:font-semibold [&>label>h4]:text-lg ">
            <label className="flex flex-col gap-2">
              <h4>Name:</h4>
              <Input />
            </label>
            <label className="flex flex-col gap-2">
              <h4>Email:</h4>
              <Input />
            </label>
            <label className="flex flex-col gap-2">
              <h4>Contact Number:</h4>
              <Input />
            </label>
            <label className="flex flex-col gap-2">
              <h4>Country:</h4>
              <Input />
            </label>
            <label className="flex flex-col gap-2">
              <h4>Number of Passengers:</h4>
              <Input />
            </label>
          </div>
          <Button className="w-full">Submit</Button>
        </form>
      </div>
    </section>
  );
}
