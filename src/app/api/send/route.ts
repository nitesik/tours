import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name: string;
      email: string;
      contactNumber: string;
      country: string;
      numberOfPeople: string;
      fromAge: string;
      toAge: string;
      date: string;
      budgetPerPerson: string;
    };

    const { data, error } = await resend.emails.send({
      from: "client@wingstohimalayankingdom.com",
      to: ["neetesh2000@gmail.com", "wingstobhutan@outlook.com"],
      subject: "Wings to Himalayan Kingdom",
      html: `
<p>Name: ${body.name}</p>
<p>Email: ${body.email}</p>
<p>Contact Number: ${body.contactNumber}</p>
<p>Country: ${body.country}</p>
<p>Number of People: ${body.numberOfPeople}</p>
<p>Age From: ${body.fromAge}</p>
<p>Age To: ${body.toAge}</p>
<p>Budget Per Person: ${body.budgetPerPerson}</p>
<p>Date of Travel: ${body.date}</p>
`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
