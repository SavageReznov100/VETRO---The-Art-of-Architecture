import { motion } from "motion/react";
import { Context } from "../../Context/Provider";
import { FC, useContext, useEffect } from "react";
import image1 from "../../../src/assets/Images/Hero/image-1.webp";
import image2 from "../../../src/assets/Images/Hero/image-2.webp";
import image3 from "../../../src/assets/Images/Hero/image-3.webp";
import image4 from "../../../src/assets/Images/Hero/image-4.webp";
import image5 from "../../../src/assets/Images/Hero/image-5.webp";
import image6 from "../../../src/assets/Images/Hero/image-6.webp";
import image7 from "../../../src/assets/Images/Hero/image-7.webp";

const imageMap: { [key: string]: string } = {
  "image-1": image1,
  "image-2": image2,
  "image-3": image3,
  "image-4": image4,
  "image-5": image5,
  "image-6": image6,
  "image-7": image7,
};

const Loader2 = () => {
  const { setLoading } = useContext(Context);

  useEffect(() => {
    Object.values(imageMap).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
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
          <source srcSet={image6} media="(max-width: 600px)" />
          <source srcSet={image7} media="(max-width: 768px)" />
          <source srcSet={image2} media="(min-width: 1024px)" />
          <motion.img
            layout
            layoutId="hero-image"
            style={{
              height: "50vh",
              width: "50vw",
              objectFit: "cover",
            }}
            src={image2}
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
      <img src={imageMap[id]} loading="lazy" alt={id} />
    </motion.div>
  );
};

export default Loader2;
