import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  return (
    <section id="contact" className="h-fit flex bg-background py-14 mx-5">
      <div className="w-full 2xl:max-w-[1500px] mx-auto">
        <form className="mx-auto w-full lg:w-[800px] gap-8 flex flex-col items-center">
          <h1 className="text-[50px] font-rye text-primary">Contact Us!</h1>
          <div className="grid lg:grid-cols-2 gap-5 font-rye w-full [&>label>input]:rounded-none [&>*>h4]:text-primary [&>*>h4]:font-semibold [&>*>h4]:text-lg ">
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
              <h4>Number of Adults and Children:</h4>
              <Input />
            </label>
            <div className="flex flex-col gap-2">
              <h4>Age Range</h4>
              <div className="flex gap-5 items-center ">
                <span className="flex items-center gap-5 flex-1">
                  <p>From</p>
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Age" />
                    </SelectTrigger>
                    <SelectContent>
                      {new Array(99).fill(0).map((_, i) => (
                        <SelectItem key={i} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </span>
                <span className="flex items-center gap-5 flex-1">
                  <p>To</p>
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Age" />
                    </SelectTrigger>
                    <SelectContent>
                      {new Array(99).fill(0).map((_, i) => (
                        <SelectItem key={i} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </span>
              </div>
            </div>
          </div>
          <Button className="w-full">Submit</Button>
        </form>
      </div>
    </section>
  );
}
