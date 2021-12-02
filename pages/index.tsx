import { Meta } from "~/components/partials/Meta";
import { Footer } from "~/components/parts/Footer";
import { Section1 } from "~/components/parts/Section1";
import { Section2 } from "~/components/parts/Section2";
import { Section3 } from "~/components/parts/Section3";
import { Section4 } from "~/components/parts/Section4";
import { Section5 } from "~/components/parts/Section5";

export default function Home() {
  return (
    <>
      <Meta
        title="Enviroso ━ A Social Platform for Environmental Activists"
        description="Meet Enviroso, A platform built for environmental activists to network and organize cleanup missions."
        keywords="enviornment, activist, network, pollution, cleanup, mission, organization, platform"
        image="https://avatars.githubusercontent.com/u/95420495?s=200&v=4"
        url="https://enviroso.netlify.app"
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </>
  );
}
