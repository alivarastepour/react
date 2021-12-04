import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import "./styles.css";

const Setup = () => {
  return (
    <>
      <div className="example-container">
        <motion.div
          animate={{
            scale: [0.5, 1, 1.5, 1, 0.5],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      </div>
    </>
  );
};
export default Setup ;