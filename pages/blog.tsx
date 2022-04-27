import type { NextPage } from "next";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.1,
          },
        }}
      >
        <h1 className="title">Blog!</h1>
      </motion.div>
    </div>
  );
};

export default Blog;
