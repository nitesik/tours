import * as Lucid from "lucide-react";

export const services = [
  {
    Icon: Lucid.BinocularsIcon,
    title: "Cultural Tours",
    description:
      "Explore Bhutan’s ancient temples, forts, and monasteries, and experience firsthand its rich heritage. Visit Thimphu, the capital city, or marvel at the beauty of the Paro Valley.",
  },
  {
    Icon: Lucid.BirdIcon,
    title: "Adventure & Trekking",
    description:
      "For the adventurous at heart, embark on one of Bhutan’s many trekking routes, such as the challenging Jomolhari Trek or the scenic Druk Path Trek.",
  },
  {
    Icon: Lucid.FlowerIcon,
    title: "Spiritual Journeys",
    description:
      "Bhutan is known as the last great Himalayan kingdom of happiness, where the Buddhist culture is deeply woven into daily life. We offer spiritual tours, including visits to meditation retreats, monasteries, and sacred sites",
  },
  {
    Icon: Lucid.LandPlotIcon,
    title: "Festivals & Events",
    description:
      "Bhutan is home to vibrant and colorful festivals like the Paro Tsechu, Thimphu Tsechu and Black Necked Crane. These events are an incredible way to experience Bhutanese culture through traditional dances, music, and rituals.",
  },
  {
    Icon: Lucid.HeaterIcon,
    title: "Luxury & Comfort",
    description:
      "Whether you are looking for a luxury resort stay or a more intimate guesthouse experience, we offer a range of accommodations to suit your preferences and budget.\n",
  },
];

export const jumpToContact = () => {
  document
    .querySelector("#contact")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const jumpToItineraries = () => {
  window.location.assign("/#itineraries");
  // document
  //   .querySelector("#itineraries")
  //   ?.scrollIntoView({ behavior: "smooth", block: "start" });
};
