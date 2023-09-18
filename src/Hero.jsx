import { Button } from "@chakra-ui/react";
import banner from "./assets/banners.png";

export const Hero = () => {
  return (
    <div className="container">
      <img src={banner} />
      <h1 className="container-h1">
        A FULL-SERVICE VIDEO PRODUCTION COMPANY SERVING BUSINESSES ACROSS ORANGE
        COUNTY
      </h1>
      <span className="container-span">
        Helping small businesses use the power of video to share the best of
        what they do with the world.
      </span>
      <div className="home-button">
        <Button width="50%" height="50%" backgroundColor="rgb(243, 189, 77)">
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};
