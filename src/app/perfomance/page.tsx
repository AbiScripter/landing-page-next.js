import Hero from "@/components/hero";
import perfomanceImg from "/public/performance.jpg";

export default function PerfomancePage() {
  return (
    <Hero
      imageData={perfomanceImg}
      imageAlt="welding"
      title="We serve high perfomance applications"
    />
  );
}
