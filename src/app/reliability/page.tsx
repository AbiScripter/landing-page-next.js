import Hero from "@/components/hero";
import reliabilityImg from "/public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imageData={reliabilityImg}
      imageAlt="welding man"
      title="Cloud computing made reliable"
    />
  );
}
