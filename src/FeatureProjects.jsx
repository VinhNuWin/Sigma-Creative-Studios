import { list, item } from "./libs/variants";
import { motion } from "framer-motion";

export const FeatureProjects = () => {
  return (
    <div className="container">
      <div className="container-head">
        <h1>FEATURED VIDEO PROJECTS</h1>
        <hr />
        <motion.div
          className="iframe-wrapper"
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
        </motion.div>
      </div>
    </div>
  );
};
