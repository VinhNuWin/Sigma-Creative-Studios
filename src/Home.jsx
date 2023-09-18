import { Story } from "./Story";
import { OurValues } from "./OurValues";
import { Services } from "./Services";
import { FeatureProjects } from "./FeatureProjects";
import { Footer } from "./Footer";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Story />
      <OurValues />
      <Services />
      <FeatureProjects />
      <Footer />
    </div>
  );
};
