import Lenis from "lenis";
import { useEffect } from "react";
import { ReactNode } from "react";
const LenisScroll = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default LenisScroll;
