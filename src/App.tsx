import { useEffect, useContext, useRef, lazy, Suspense } from "react";
import { Context } from "./Context/Provider";
import Lenis from "lenis";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
const AboutUs = lazy(() => import("./Components/AboutUs"));
const Services = lazy(() => import("./Components/Services"));
const Work = lazy(() => import("./Components/Work.tsx"));
const Clients = lazy(() => import("./Components/Clients"));
const Brands = lazy(() => import("./Components/Brands"));
const SectionLoader = () => (
  <div className="flex h-64 w-full items-center justify-center">
    <div className="h-32 w-3/4 animate-pulse rounded-md bg-white dark:bg-background"></div>
  </div>
);

function App() {
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
    const preloadImages = [
      "/public/Hero/image-1.webp",
      "/public/Hero/image-2.webp",
      "/public/Hero/image-3.webp",
      "/public/Hero/image-4.webp",
      "/public/Hero/image-5.webp",
      "/public/Hero/image-6.webp",
      "/public/Hero/image-7.webp",
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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
            <Suspense fallback={<SectionLoader />}>
              <AboutUs />
            </Suspense>
          </section>
          <section ref={ServicesRef}>
            <Suspense fallback={<SectionLoader />}>
              <Services />
            </Suspense>
          </section>
          <section ref={WorkRef}>
            <Suspense fallback={<SectionLoader />}>
              <Work />
            </Suspense>
          </section>
          <section ref={ClientsRef}>
            <Suspense fallback={<SectionLoader />}>
              <Clients />
            </Suspense>
          </section>
          <section ref={BrandsRef}>
            <Suspense fallback={<SectionLoader />}>
              <Brands />
            </Suspense>
          </section>
        </>
      )}
    </>
  );
}

export default App;
