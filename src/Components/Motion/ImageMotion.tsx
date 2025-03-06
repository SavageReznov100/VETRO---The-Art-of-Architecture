import { useInView, useAnimation, motion } from "motion/react";
import { FC, useEffect, useRef } from "react";

interface MotionProps {
  children: React.ReactNode;
  delay: number;
  duration: number;
}

const ImageMotion: FC<MotionProps> = ({ children, duration, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { clipPath: "polygon(0 0 ,100% 0,100% 0,0 0)" },
        visible: {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          transition: {
            delay: delay,
            duration: duration,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ImageMotion;
