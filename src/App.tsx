import { useEffect, useContext, useRef } from "react";
import { Context } from "./Context/Provider";
import Lenis from "lenis";
import Brands from "./Components/Brands";
import Clients from "./Components/Clients";
import Header from "./Components/Header";
import Work from "./Components/Work.tsx";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import AboutUs from "./Components/AboutUs";
import { UseScreenDetector } from "./Utils/UseScreenDetector.tsx";

function App() {
  UseScreenDetector();
  const { loading, setIsMenu } = useContext(Context);
  let menuRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(Context);
  const AboutUsRef = useRef(null);
  const ServicesRef = useRef(null);
  const WorkRef = useRef(null);
  const ClientsRef = useRef(null);
  const BrandsRef = useRef(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenisRef.current = lenis;
    return () => lenis.destroy();
  }, []);

  const scrollToSection = (section: string) => {
    const targetRef =
      section === "About"
        ? AboutUsRef
        : section === "Services"
          ? ServicesRef
          : section === "Work"
            ? WorkRef
            : section === "Clients"
              ? ClientsRef
              : section === "Brands"
                ? BrandsRef
                : null;

    if (targetRef && lenisRef.current) {
      if (targetRef.current) {
        lenisRef.current.scrollTo(targetRef.current);
      }
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
      <Header />
      {!loading && (
        <>
          <SideBar ref={menuRef} scrollToSection={scrollToSection} />
          <Navbar />
          <section ref={AboutUsRef}>
            <AboutUs />
          </section>
          <section ref={ServicesRef}>
            <Services />
          </section>
          <section ref={WorkRef}>
            <Work />
          </section>
          <section ref={ClientsRef}>
            <Clients />
          </section>
          <section ref={BrandsRef}>
            <Brands />
          </section>
        </>
      )}
    </>
  );
}

export default App;
