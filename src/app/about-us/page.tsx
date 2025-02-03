import AboutUsPage from "@/features/About-Us-Page";
import Head from "next/head";

export async function generateMetadata() {
  return {
    title: "About Us | Wings to Himalayan Kingdom",
  };
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <AboutUsPage />;
    </>
  );
}
