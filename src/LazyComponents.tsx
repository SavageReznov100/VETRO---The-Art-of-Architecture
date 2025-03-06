import { useEffect, useContext, useRef } from "react";
import { Context } from "./Context/Provider";
import Brands from "./Components/Brands";
import Clients from "./Components/Clients";
import Work from "./Components/Work.tsx";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import AboutUs from "./Components/AboutUs";
const LazyComponents = () => {
  const { setIsMenu } = useContext(Context);
  let menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <>
      <SideBar ref={menuRef} />
      <Navbar />
      <AboutUs />
      <Services />
      <Work />
      <Clients />
      <Brands />
    </>
  );
};

export default LazyComponents;
