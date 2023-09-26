import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { list, item } from "./libs/variants";
import {
  GiDeliveryDrone,
  GiVideoConference,
  GiVirtualMarker,
  GiSoundWaves,
  GiMusicSpell,
  GiTeamIdea,
  GiStripedSun,
} from "react-icons/gi";
import {
  IoShareSocialOutline,
  IoVideocamOutline,
  IoMicCircle,
} from "react-icons/io5";

export const Services = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="container">
      <div className="container-head">
        <h1>OUR SERVICES</h1>
        <hr />

        <div className="container-body">
          <motion.ul
            className="item-block"
            variants={list}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <span>
              Imagine the messages you could share with the help of our
              professional video production expertise. Our specialties include:
            </span>
            <motion.div variants={item} className="item">
              <GiVideoConference color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Marketing Video</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <IoShareSocialOutline
                color="rgb(113, 76, 244)"
                fontSize="1.5em"
              />
              <span className="item-span">Video for Social Channels</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <IoVideocamOutline color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Video Editing</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <GiVirtualMarker color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Virtual Events</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <GiVideoConference color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Motion Graphics</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <GiStripedSun color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Logo Animation</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <GiSoundWaves color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Voice Over Talent</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <GiMusicSpell color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Music Selection</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <GiDeliveryDrone color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Aerial Video</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <GiTeamIdea color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Interview Facilitation</span>
            </motion.div>
            <motion.div variants={item} className="item">
              <IoMicCircle color="rgb(113, 76, 244)" fontSize="1.5em" />
              <span className="item-span">Podcast Editing</span>
            </motion.div>
          </motion.ul>

          <div className="button-wrapper">
            <div className="container-button">
              <Button
                width="100%"
                height="50%"
                backgroundColor="rgb(113, 76, 244)"
                textColor="white"
              >
                VIDEO MARKETING
              </Button>
            </div>
            <div className="container-button">
              <Button
                width="100%"
                height="50%"
                backgroundColor="rgb(113, 76, 244)"
                textColor="white"
              >
                AERIAL VIDEO & PHOTO
              </Button>
            </div>
            <div className="container-button">
              <Button
                width="100%"
                height="50%"
                backgroundColor="rgb(113, 76, 244)"
                textColor="white"
              >
                VIDEO EDITING
              </Button>
            </div>

            <div className="container-button">
              <Button
                width="100%"
                height="50%"
                backgroundColor="rgb(113, 76, 244)"
                textColor="white"
              >
                LET'S DISCUSS YOUR VIDEO STRATEGY!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
