import { Footer } from "~/components/parts/Footer";
import { Section1 } from "~/components/parts/Section1";
import { Section2 } from "~/components/parts/Section2";
import { Section3 } from "~/components/parts/Section3";
import { Section4 } from "~/components/parts/Section4";
import { Section5 } from "~/components/parts/Section5";

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}
