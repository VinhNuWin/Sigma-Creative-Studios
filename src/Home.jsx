import { Story } from "./Story";
import { OurValues } from "./OurValues";
import { Services } from "./Services";
import { FeatureProjects } from "./FeatureProjects";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";

export const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Story />
      <OurValues />
      <Services />
      <FeatureProjects />
      <Footer />
    </div>
  );
};
