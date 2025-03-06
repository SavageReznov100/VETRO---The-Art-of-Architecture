import { useInView, useAnimation, motion } from "motion/react";
import { FC, useEffect, useRef } from "react";

interface MotionProps {
  direction: string;
  delayChildren?: number;
  staggerChildren?: number;
  duration: number;
  delay?: number;
  text: string;
  cn?: string;
}
const TextMotion: FC<MotionProps> = ({
  staggerChildren,
  delayChildren,
  direction,
  duration,
  delay = 0,
  text,
  cn,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <div ref={ref} className={cn}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: staggerChildren,
              delayChildren: delayChildren,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <div>
          {text.split("").map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  x:
                    direction === "right" ? -10 : direction === "left" ? 10 : 0,
                  y: direction === "down" ? -10 : direction === "up" ? 10 : 0,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    delay: index * delay,
                    duration: duration,
                    ease: "easeOut",
                  },
                },
              }}
              style={{
                whiteSpace: word === " " ? "pre" : "normal",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TextMotion;
