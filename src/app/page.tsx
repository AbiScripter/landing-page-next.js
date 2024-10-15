import Hero from "@/components/hero";
import homeImg from "/public/home.jpg";

export default function Home() {
  return (
    <Hero
      imageData={homeImg}
      imageAlt="Cars"
      title="Professional Cloud Hosting"
    />
  );
}
