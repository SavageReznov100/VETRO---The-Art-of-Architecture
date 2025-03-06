import { motion, useScroll } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { projects } from "../Data/data";
import ImageMotion from "./Motion/ImageMotion";
import { Context } from "../Context/Provider";
import SplitText from "./Motion/SplitText";

const Work = () => {
  const container = useRef(null);
  const { theme, setTheme } = useContext(Context);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newTheme = latest > 0.2 ? "light" : "dark";
      setTheme(newTheme);
      console.log("Scroll progress:", latest);
      console.log("Setting theme to:", newTheme);
    });

    return () => unsubscribe();
  }, [scrollYProgress, setTheme]);

  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

  return (
    <section ref={container}>
      <div className="h-full w-full bg-explosivegrey transition-colors duration-300 ease-linear dark:bg-background">
        <div className="container">
          <p className="about_text py-5 text-center text-black dark:text-explosivegrey">
            Bringing Architectural Visions to Life
          </p>
          {projects.map((project, index) => (
            <div
              className="grid grid-cols-1 gap-2 py-8 md:grid-cols-2"
              key={index}
            >
              <motion.div className="order-last flex flex-col items-center justify-center md:order-first md:items-start">
                <div className="aspect-auto w-[35vw] overflow-hidden lg:w-[25vw]">
                  <ImageMotion delay={0.7} duration={1.3}>
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </ImageMotion>
                </div>
              </motion.div>
              <motion.div className="order-first flex flex-col justify-evenly gap-2 border-t border-black py-2 text-black dark:border-explosivegrey dark:text-explosivegrey md:order-last md:py-4 lg:flex-row">
                <div className="w-full">
                  <SplitText
                    text={project.name}
                    className="text-xl font-bold md:text-2xl"
                    delay={150}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,0,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    threshold={0.2}
                    rootMargin="50px"
                  />
                </div>
                <div className="w-full">
                  <SplitText
                    text={project.description}
                    className="text-xl md:text-2xl"
                    delay={10}
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0,0,0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    threshold={0.2}
                    rootMargin="50px"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
