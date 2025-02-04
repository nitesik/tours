import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import wretch from "wretch";
import { CreateEmailResponseSuccess } from "resend";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren } from "react";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().min(1, { message: "Field is required" }),
  email: z.string().email(),
  contactNumber: z.string().optional(),
  country: z.string().min(1, { message: "Field is required" }),
  numberOfPeople: z.coerce
    .number({ message: "Must be a number" })
    .min(1)
    .transform((x) => x.toString()),
  fromAge: z.coerce
    .number()
    .min(1)
    .transform((x) => x.toString()),
  toAge: z.coerce
    .number()
    .min(1)
    .transform((x) => x.toString()),
  date: z.string().min(1, { message: "Field is required" }),
  budgetPerPerson: z.string().min(1, { message: "Field is required" }),
});

export default function ContactForm() {
  const { toast } = useToast();

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ["contactForm"],
    mutationFn: async (body: z.infer<typeof schema>) => {
      const data = await wretch("/api/send", { credentials: "include" })
        .post(body)
        .json()
        .catch();

      return data as CreateEmailResponseSuccess | null;
    },
    onSuccess: () => {
      toast({
        duration: 3000,
        title: "Email sent successfully",
      });
    },
  });

  const {
    register,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    values: {
      name: "",
      email: "",
      contactNumber: "",
      country: "",
      numberOfPeople: "",
      fromAge: "",
      toAge: "",
      date: "",
      budgetPerPerson: "",
    },
  });

  watch(["fromAge", "toAge"]);

  function onSubmit(data: z.infer<typeof schema>) {
    // console.log(data);

    mutateAsync(data).then(() => reset());
  }

  return (
    <section id="contact" className="h-fit flex bg-background py-14 mx-5">
      <div className="w-full 2xl:max-w-[1500px] mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full lg:w-[800px] gap-8 flex flex-col items-center"
        >
          <h1 className="text-[50px] font-bebas text-primary">Contact Us!</h1>
          <div className="grid lg:grid-cols-2 gap-5 font-sans w-full [&>label>input]:rounded-none [&>*>h4]:text-primary [&>*>h4]:font-semibold [&>*>h4]:text-lg ">
            <label className="flex flex-col gap-2">
              <h4>Name:</h4>
              <Input {...register("name")} />
              {errors.name && <ErrorLabel>{errors.name.message}</ErrorLabel>}
            </label>
            <label className="flex flex-col gap-2">
              <h4>Email:</h4>
              <Input {...register("email")} />
              {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
            </label>
            <label className="flex flex-col gap-2">
              <h4>Contact Number:</h4>
              <Input {...register("contactNumber")} />
              {errors.contactNumber && (
                <ErrorLabel>{errors.contactNumber.message}</ErrorLabel>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h4>Country:</h4>
              <Input {...register("country")} />
              {errors.country && (
                <ErrorLabel>{errors.country.message}</ErrorLabel>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h4>Number of Adults and Children:</h4>
              <Input {...register("numberOfPeople")} />
              {errors.numberOfPeople && (
                <ErrorLabel>{errors.numberOfPeople.message}</ErrorLabel>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h4>Budget Per Person:</h4>
              <Input {...register("budgetPerPerson")} />
              {errors.budgetPerPerson && (
                <ErrorLabel>{errors.budgetPerPerson.message}</ErrorLabel>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <h4>Date of Travel:</h4>
              <Input type="date" {...register("date")} />
              {errors.date && <ErrorLabel>{errors.date.message}</ErrorLabel>}
            </label>
            <div className="flex flex-col gap-2">
              <h4>Age Range</h4>
              <div className="flex gap-5 items-center ">
                <div className="flex-1">
                  <span className="flex items-center gap-5 flex-1">
                    <p>From</p>
                    <Select
                      value={getValues("fromAge")}
                      onValueChange={(e) => e && setValue("fromAge", e)}
                    >
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
                  {errors.fromAge && (
                    <ErrorLabel>{errors.fromAge.message}</ErrorLabel>
                  )}
                </div>
                <div className="flex-1">
                  <span className="flex items-center gap-5 flex-1">
                    <p>To</p>
                    <Select
                      value={getValues("toAge")}
                      onValueChange={(e) => e && setValue("toAge", e)}
                    >
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
                  {errors.toAge && (
                    <ErrorLabel>{errors.toAge.message}</ErrorLabel>
                  )}
                </div>
              </div>
            </div>
          </div>
          {error && <ErrorLabel>{error.message}</ErrorLabel>}
          <Button disabled={isPending} className="w-full">
            {isPending ? <Loader2 className="animate-spin" /> : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
}

function ErrorLabel(props: PropsWithChildren) {
  return (
    <p className="text-sm max-w-[50vw] text-destructive font-sans font-semibold">
      {props.children}
    </p>
  );
}
