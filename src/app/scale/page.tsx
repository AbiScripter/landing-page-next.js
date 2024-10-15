import Hero from "@/components/hero";
import scaleImg from "/public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imageData={scaleImg}
      imageAlt="big factory"
      title="Scaling is made easy with our app"
    />
  );
}
