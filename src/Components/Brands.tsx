import classNames from "classnames";
import { useContext, useState } from "react";
import { architectureProjects } from "../Data/data";
import { motion } from "motion/react";
import { Context } from "../Context/Provider";
import Minus from "../assets/Icons/SVG/minus.svg";
import MinusWhite from "../assets/Icons/SVG/minuswhite.svg";
import Plus from "../assets/Icons/SVG/plus.svg";
import PlusWhite from "../assets/Icons/SVG/pluswhite.svg";

const Brands = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const { theme } = useContext(Context);

  const [isHovered, setIsHovered] = useState(null);
  const handleAccordionClick = (id: any) => {
    setAccordionOpen((prevId) => (prevId === id ? null : id));
  };
  const handleHover = (id: any) => {
    setIsHovered((prevId) => (prevId === id ? null : id));
  };

  const variants = {
    rest: {
      scaleX: 0,
      transformOrigin: "right",
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    hover: {
      scaleX: 1,
      transformOrigin: "left",
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };
  return (
    <section className="container bg-explosivegrey py-10 dark:bg-background">
      <div className="flex justify-center text-center text-black dark:text-explosivegrey">
        <p className="about_text">
          Trusted by Leading Brands: Our Legacy of Architectural Excellence
        </p>
      </div>
      {architectureProjects.map((projects, index) => (
        <div
          key={index}
          onClick={() => handleAccordionClick(projects.id)}
          onMouseEnter={() => handleHover(projects.id)}
          onMouseLeave={() => handleHover(null)}
          className="relative block cursor-pointer py-4"
        >
          <button className="flex w-full flex-row text-black dark:text-explosivegrey">
            <p className="basis-1/2 text-start uppercase">{projects.brand}</p>
            <p className="basis-1/4 text-start uppercase">{projects.service}</p>
            <div className="flex basis-1/4 items-center justify-end gap-2 uppercase">
              {accordionOpen === projects.id ? <p>Less</p> : <p>More</p>}
              {accordionOpen === projects.id ? (
                <span>
                  {theme === "dark" ? (
                    <img src={MinusWhite} alt="MinusWhite" />
                  ) : (
                    <img src={Minus} alt="Minus" />
                  )}
                </span>
              ) : (
                <span>
                  {theme === "dark" ? (
                    <img src={PlusWhite} alt="PlusWhite" />
                  ) : (
                    <img src={Plus} alt="Plus" />
                  )}
                </span>
              )}
            </div>
          </button>
          <div
            className={classNames(
              "grid grid-cols-2 overflow-hidden transition-all duration-300 ease-in-out",
              accordionOpen === projects.id
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="order-first"></div>
            <div className="overflow-hidden">
              <p className="brand_text_p1">{projects.description}</p>
            </div>
          </div>
          <motion.div
            className={classNames(
              "absolute bottom-0 left-0 right-0 w-full",
              accordionOpen === projects.id
                ? "h-[1.5px] bg-black dark:bg-explosivegrey"
                : "h-[1px] bg-black/40 dark:bg-explosivegrey/40",
            )}
          />
          <motion.div
            variants={variants}
            animate={isHovered === projects.id ? "hover" : "rest"}
            className={classNames(
              "absolute bottom-0 left-0 right-0 h-[1.5px] w-full bg-black dark:bg-explosivegrey",
            )}
          />
        </div>
      ))}
    </section>
  );
};

export default Brands;
