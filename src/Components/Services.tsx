import { motion, useScroll } from "framer-motion";
import CountUp from "react-countup";
import { useRef, useState } from "react";
import { services } from "../Data/data";
import { count } from "../Data/data";
import { title } from "../Data/data";
import classNames from "classnames";
import ImageMotion from "./Motion/ImageMotion";

const Services = () => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isStart, setStart] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });
  scrollYProgress.onChange((latest) => {
    if (latest > 0.3) {
      setStart(true);
    }
  });

  const handleHover = (id: any) => {
    setIsHovered((prevId) => (prevId === id ? null : id));
  };

  const variants = {
    rest: {
      scaleX: 0,
      transformOrigin: "right",
      transition: {
        duration: 0.5,
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
    <section className="bg-background">
      <div className="container relative">
        <h3 className="about_text py-5 text-white">
          Innovative Architectural Solutions for Every Project
        </h3>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index: any) => (
          <div key={index} className="border-tetiary border opacity-75">
            <div className="px-5 py-16 text-white">
              <img
                src={service.image}
                alt={service.title}
                className="mb-5 h-10 w-10"
              />
              <h3 className="font-bold tracking-wide">{service.title}</h3>
              <p className="text-pretty py-4 leading-relaxed">
                {service.description}
              </p>
              <div className="relative w-24">
                <p
                  className="cursor-pointer pb-2"
                  onMouseEnter={() => handleHover(service.id)}
                  onMouseLeave={() => handleHover(null)}
                >
                  Learn More
                </p>
                <motion.div
                  variants={variants}
                  animate={isHovered === service.id ? "hover" : "rest"}
                  className={classNames(
                    "absolute bottom-0 left-0 right-0 h-[1.5px] w-14 bg-white md:w-20",
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container flex justify-center pt-5 text-center text-explosivegrey">
        <p className="about_text">
          Why
          <span className="px-1 uppercase tracking-wider text-white">
            "Vetro"
          </span>
          is the Foundation for Elevating Your Architectural Vision
        </p>
      </div>

      <div className="container grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-4">
        {title.map((title, index) => (
          <div key={index}>
            <ImageMotion delay={0.2} duration={1.3}>
              <div className="relative flex min-h-[400px] flex-col gap-4 overflow-hidden rounded-xl">
                <div className="absolute inset-0 h-full w-full">
                  <img
                    src={title.image}
                    alt={title.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 z-10 bg-black opacity-50" />
                <div className="absolute inset-0 z-20 flex flex-col gap-6 p-7 text-white">
                  <h3>{title.title}</h3>
                  <p>{title.subtitle}</p>
                </div>
              </div>
            </ImageMotion>
          </div>
        ))}
      </div>

      <div
        ref={ref}
        className="container grid grid-cols-2 gap-4 py-20 md:grid-cols-3 lg:grid-cols-4"
      >
        {count.map((count, index) => (
          <div
            key={index}
            className="border-tetiary flex w-full flex-col gap-10 border px-8 py-10 text-white opacity-75"
          >
            <div className="flex flex-col gap-3">
              <h3>
                <CountUp
                  className="font-bold"
                  start={0}
                  end={isStart ? count.value : 0}
                  delay={2}
                  duration={5}
                  suffix={count.symbol}
                />
              </h3>

              <h4 className="text-xs uppercase">{count.description}</h4>
            </div>
            <div className="text-balance text-explosivegrey md:text-pretty">
              <p>{count.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
