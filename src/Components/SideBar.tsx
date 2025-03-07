import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useContext } from "react";
import { Context } from "../Context/Provider";
import { sidebar } from "../Data/data";
import { FacebookIcon } from "../assets/Icons/Facebook";
import { InstagramIcon } from "../assets/Icons/Instagram";
import { TwitterIcon } from "../assets/Icons/Twitter";
import { LinkedinIcon } from "../assets/Icons/Linkedin";
import X from "../assets/Icons/SVG/x.svg";
import XWhite from "../assets/Icons/SVG/xwhite.svg";

interface SideBarProps {
  scrollToSection: (section: string) => void;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ scrollToSection }, ref) => {
    const { isMenu, setIsMenu, theme } = useContext(Context);
    const toggleMenu = () => {
      setIsMenu(!isMenu);
    };
    const menuVariants = {
      initial: {
        x: "100%",
      },
      animate: {
        x: 0,
        transition: {
          duration: 0.5,
          ease: "easeIn",
          when: "beforeChildren",
        },
      },
      exit: {
        x: "100%",
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: "easeInOut",
          when: "afterChildren",
        },
      },
    };

    const containerVariants = {
      initial: { opacity: 0, x: 500 },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
      // exit: {
      //   x: 50,
      //   opacity: 0,
      //   transition: {
      //     duration: 1.2,
      //     delayChildren: 0.2,
      //     staggerChildren: 0.1,
      //     staggerDirection: -1,
      //   },
      // },
    };

    const letterVariants = {
      initial: { opacity: 0, y: 50 },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.4,
          ease: "easeIn",
        },
      },
      // exit: {
      //   opacity: 0,
      //   y: 50,
      //   transition: {
      //     duration: 0.4,
      //     ease: "easeOut",
      //   },
      // },
    };

    return (
      <AnimatePresence mode="wait">
        {isMenu && (
          <motion.div
            ref={ref}
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed right-0 top-0 z-30 h-screen w-screen border-l border-l-background bg-explosivegrey transition-colors duration-300 ease-linear dark:border-l-explosivegrey dark:bg-background md:w-[40vw]"
          >
            <div className="relative h-full">
              <div
                className="group absolute right-4 top-4 cursor-pointer"
                onClick={toggleMenu}
              >
                {theme === "dark" ? (
                  <img src={XWhite} alt="XWhite" />
                ) : (
                  <img src={X} alt="X" />
                )}
              </div>
              <div className="group flex h-full flex-col items-start gap-y-8 pl-20 pt-20 md:justify-center md:pt-0">
                {sidebar.map((item, i) => (
                  <motion.div
                    onClick={() => {
                      scrollToSection(item.content);
                      toggleMenu();
                    }}
                    key={i}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="cursor-pointer text-2xl font-bold text-black dark:text-white md:text-6xl"
                  >
                    <a className="transition-all duration-300 hover:!opacity-100 group-hover:opacity-50">
                      {item.content.split("").map((letter, index) => (
                        <motion.span
                          key={index}
                          variants={letterVariants}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                          }}
                          className="inline-block"
                          style={{
                            whiteSpace: letter === " " ? "pre" : "normal",
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </a>
                  </motion.div>
                ))}
                <div className="flex flex-row gap-x-4">
                  <FacebookIcon />
                  <InstagramIcon />
                  <LinkedinIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

export default SideBar;
