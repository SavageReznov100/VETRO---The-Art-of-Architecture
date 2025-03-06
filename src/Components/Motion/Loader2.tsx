import { motion } from "motion/react";
import { Context } from "../../Context/Provider";
import { FC, useContext } from "react";

const Loader2 = () => {
  const { setLoading } = useContext(Context);

  const container = {
    hidden: {},
    show: {
      transition: {
        delay: 1.5,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.0,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      layout
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-background"
    >
      <ImageBlock variants={item} id="image-1" />
      <ImageBlock variants={item} id="image-3" />
      <ImageBlock variants={item} id="image-4" />
      <ImageBlock variants={item} id="image-5" />
      <motion.div
        layout
        variants={itemMain}
        initial="hidden"
        animate="show"
        className="absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center overflow-hidden"
      >
        <picture>
          <source
            srcSet="/public/Hero/image-6.webp"
            media="(max-width: 600px)"
          />
          <source
            srcSet="/public/Hero/image-7.webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/public/Hero/image-2.webp"
            media="(min-width: 1024px)"
          />
          <motion.img
            layout
            layoutId="hero-image"
            loading="lazy"
            style={{
              height: "50vh",
              width: "50vw",
              objectFit: "cover",
            }}
            src="/src/assets/Images/Hero/image-2.webp"
            alt="Hero"
          />
        </picture>
      </motion.div>
    </motion.div>
  );
};

interface ImageBlockProps {
  posX?: number;
  posY?: number;
  variants: any;
  id: string;
}

export const ImageBlock: FC<ImageBlockProps> = ({ variants, id }) => {
  return (
    <motion.div variants={variants} className={`image-block ${id}`}>
      <img src={`/public/Hero/${id}.webp`} loading="lazy" alt={id} />
    </motion.div>
  );
};

export default Loader2;
