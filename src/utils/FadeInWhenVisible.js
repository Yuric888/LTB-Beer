import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  console.log("inView :>> ", inView);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="container-inner"
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 2 }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -200, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};
