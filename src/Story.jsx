import { Button } from "@chakra-ui/react";
import { useRef } from "react";
import { list, item } from "./libs/variants";
import { motion, useScroll, useTransform } from "framer-motion";

export const Story = () => {
  return (
    <motion.div className="container-body">
      <motion.div
        className="container-head"
        variants={list}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h1 variants={item}>VIDEO STORYTELLING FOR YOUR BRAND</motion.h1>
        <hr />
        <div>
          <motion.span variants={item}>
            A local leader in business video production, Ideal Video Strategies
            uses storytelling, skill, and industry savvy to ensure that your
            video marketing investment gets results.
          </motion.span>
        </div>
        <br />
        <div>
          <motion.span variants={item}>
            Our professional, proactive, and thorough approach makes the process
            easy and worry-free. We serve as a single point of contact for
            everything related to your video. From the initial planning meeting
            to the delivery of your final files, we’re your creative partner
            every step of the way. You can feel confident that your video will
            meet the requirements for sponsored advertising on social channels,
            highlight your product or service professionally, or include
            stunning drone imagery captured while meeting all FAA regulations.
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        variants={list}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.iframe
          variants={item}
          className="video-container"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-43hQoHfI6k?si=FfHMxBLtqxT41TWc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></motion.iframe>

        <div className="container-button">
          <div>
            <h2>
              Let's get your video idea out of your head and into the world!
            </h2>
          </div>
          <Button
            width="100%"
            height="100%"
            backgroundColor="rgb(243, 189, 77)"
          >
            CONTACT US
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
