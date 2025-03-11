import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useContext } from "react";
import { Context } from "../Context/Provider";
import Loader2 from "./Motion/Loader2";
import Motion from "./Motion/Motion";
import Rotate from "./Motion/Rotate";
import image2 from "../assets/Images/Hero/image-2.webp";
import image6 from "../assets/Images/Hero/image-6.webp";
import image7 from "../assets/Images/Hero/image-7.webp";

const Header = () => {
  const { loading } = useContext(Context);

  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            layout
            transition={{
              layout: { duration: 0.5, ease: "easeInOut" },
            }}
            className="overflow-hidden"
          >
            <Loader2 />
          </motion.div>
        ) : (
          <motion.section
            layout
            transition={{
              layout: { duration: 0.5, ease: "easeInOut" },
            }}
            className="relative flex h-screen w-full overflow-hidden"
          >
            <picture>
              <source srcSet={image6} media="(max-width: 600px)" />
              <source srcSet={image7} media="(max-width: 768px)" />
              <source srcSet={image2} media="(min-width: 1024px)" />
              <motion.img
                src={image2}
                layout
                layoutId="hero-image"
                transition={{
                  layout: { duration: 0.7, ease: "easeInOut" },
                }}
                alt="Hero"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </picture>

            <div className="absolute bottom-16 left-5 z-20 font-playfair text-white md:left-16 lg:bottom-0">
              <Motion direction="up" duration={1} delay={0.7}>
                <h1>VETRO</h1>
              </Motion>
            </div>
            <div className="absolute right-10 top-10 z-20 text-white md:right-16">
              <Motion direction="down" duration={1} delay={0.7}>
                <div className="flex items-center justify-end text-balance">
                  <p className="header_text">
                    We collaborate with visionary designers, forward-thinking
                    brands, and dynamic teams to challenge the limits of the
                    present and explore the endless potential of the
                    future.Through innovative spatial concepts, motion design,
                    and cutting-edge 3D visuals, we bring bold ideas to life.
                  </p>
                </div>
              </Motion>
            </div>
            <div className="absolute bottom-0 right-0 z-20 hidden text-white md:right-0 md:block">
              <Rotate />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default Header;
