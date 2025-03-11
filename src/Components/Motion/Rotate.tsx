import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Motion from "./Motion";

const items = [
  {
    id: 1,
    content: "architects",
  },
  {
    id: 2,
    content: "designers",
  },
  {
    id: 3,
    content: "engineers",
  },
  {
    id: 4,
    content: "developers",
  },
  {
    id: 5,
    content: "planners",
  },
];

const Rotate = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        <Motion direction="left" duration={1} delay={0.7}>
          <motion.div
            className="absolute bottom-2 right-2 p-20 font-raleway text-4xl uppercase"
            key={items[index].id}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            {items[index].content}
          </motion.div>
        </Motion>
      </AnimatePresence>
    </div>
  );
};

export default Rotate;
