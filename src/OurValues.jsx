import { motion } from "framer-motion";
import { list, item } from "./libs/variants";

export const OurValues = () => {
  return (
    <div className="container">
      <div className="container-head">
        <h1>OUR VALUES</h1>
        <hr />
        <motion.div
          className="container-body"
          variants={list}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="item-container">
            <h2>COLLABORATION</h2>
            <span>
              We treat each client relationship as a partnership, knowing that
              the best outcomes happen when your ideas and our experience come
              together. We respect your time, your input, and your vision at
              every stage of the process.
            </span>
          </motion.div>
          <motion.div variants={item} className="item-container">
            <h2>STORYTELLING</h2>
            <span>
              Story is why we do what we do. We are skilled at drawing the best
              stories out of our clients, weaving them together to create
              multilayered, authentic narratives. Achieving emotional connection
              and clarity are key to a successful video.
            </span>
          </motion.div>
          <motion.div variants={item} className="item-container">
            <h2>TRANSPARENCY</h2>
            <span>
              From our first call to the moment we deliver your final video,
              you’ll always know what to expect. We are committed to always
              answering questions promptly and clearly. Proactive communication
              is a key component of our approach.
            </span>
          </motion.div>
          <motion.div variants={item} className="item-container">
            <h2>DEPENDABILITY</h2>
            <span>
              Professionalism matters. We do everything we can to make your
              experience easy and worry-free. On shoot days, we show up on time,
              fully prepared, and ready for action. Throughout the editing
              stage, we deliver drafts on time and with all of your feedback
              carefully incorporated.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
