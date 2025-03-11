import { useContext, useRef } from "react";
import { Context } from "../Context/Provider";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Menu from "../assets/Icons/SVG/menu.svg";
import MenuWhite from "../assets/Icons/SVG/menuwhite.svg";

const Navbar = () => {
  const { isHidden, setIsHidden, isMenu, setIsMenu, theme } =
    useContext(Context);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  useMotionValueEvent(scrollY, "change", (y) => {
    const diffrence = y - lastYRef.current;
    if (Math.abs(diffrence) > 5) {
      setIsHidden(diffrence > 0);
    }
    lastYRef.current = y;
  });
  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <motion.nav
      animate={isHidden ? "hidden" : "show"}
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: { y: "-100%" },
        show: { y: "0%" },
      }}
      transition={{ type: "tween", duration: 0.2 }}
      className="fixed top-0 z-20 w-full text-black transition-colors duration-300 ease-linear dark:text-white"
    >
      <div className="container flex items-center justify-between py-2">
        <div>
          <h1 className="font-playfair text-3xl tracking-widest">VETRO</h1>
        </div>
        <div onClick={toggleMenu} className="cursor-pointer">
          {theme == "dark" ? (
            <img src={MenuWhite} alt="MenuWhite" />
          ) : (
            <img src={Menu} alt="Menu" />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
