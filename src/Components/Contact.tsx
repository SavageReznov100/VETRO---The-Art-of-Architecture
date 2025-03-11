import { useContext, useEffect, useRef } from "react";
import { Context } from "../Context/Provider";
import { useScroll } from "motion/react";

interface SideBarProps {
  scrollToSection: (section: string) => void;
}
const Contact: React.FC<SideBarProps> = ({ scrollToSection }) => {
  const container = useRef(null);
  const { setTheme } = useContext(Context);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newTheme = latest > 0.4 ? "dark" : "light";
      setTheme(newTheme);
    });

    return () => unsubscribe();
  }, [scrollYProgress, setTheme]);

  return (
    <>
      <section
        ref={container}
        className="bg-explosivegrey transition-colors duration-300 ease-linear dark:bg-background"
      >
        <div className="container">
          <div>
            <p className="about_text_p1 text-pretty text-black dark:text-explosivegrey">
              We believe in building true partnerships, where collaboration
              flows smoothly, is enjoyable, and incredibly productive. With this
              approach, the results speak for themselves exceptional design and
              execution every time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-y-4 py-5 text-black dark:text-explosivegrey md:grid-cols-3">
            <div>
              <p className="pb-2 text-2xl uppercase tracking-widest">Sitemap</p>
              <ul className="group cursor-pointer">
                <li
                  className="hover:!opacity-100 group-hover:opacity-50"
                  onClick={() => {
                    scrollToSection("About");
                  }}
                >
                  About
                </li>
                <li
                  className="hover:!opacity-100 group-hover:opacity-50"
                  onClick={() => {
                    scrollToSection("Services");
                  }}
                >
                  Services
                </li>
                <li
                  className="hover:!opacity-100 group-hover:opacity-50"
                  onClick={() => {
                    scrollToSection("Work");
                  }}
                >
                  Work
                </li>
                <li
                  className="hover:!opacity-100 group-hover:opacity-50"
                  onClick={() => {
                    scrollToSection("Clients");
                  }}
                >
                  Clients
                </li>
                <li
                  className="hover:!opacity-100 group-hover:opacity-50"
                  onClick={() => {
                    scrollToSection("Brands");
                  }}
                >
                  Brands
                </li>
              </ul>
            </div>
            <div>
              <p className="pb-2 text-2xl uppercase tracking-widest">Socials</p>
              <ul className="group cursor-pointer">
                <li className="hover:!opacity-100 group-hover:opacity-50">
                  Facebook
                </li>
                <li className="hover:!opacity-100 group-hover:opacity-50">
                  Instagram
                </li>
                <li className="hover:!opacity-100 group-hover:opacity-50">
                  Twitter
                </li>
                <li className="hover:!opacity-100 group-hover:opacity-50">
                  Linkedin
                </li>
              </ul>
            </div>
            <div>
              <p className="pb-2 text-2xl uppercase tracking-widest">Contact</p>
              <p>
                No. 47, Olayiwola Street, Off Awolowo Road, Ikeja, Lagos State,
                Nigeria.
              </p>
              <p className="cursor-pointer py-2">vetro@yahoo.com</p>
            </div>
          </div>
          <div className="text-start text-black dark:text-explosivegrey">
            <p className="contact_text">VETRO</p>
          </div>

          <div className="flex flex-col justify-between gap-y-2 pb-10 text-2xl uppercase tracking-widest text-black dark:text-explosivegrey md:flex-row">
            <div>
              <p className="text-2xl uppercase tracking-widest">
                © 2021 Vetro. All Rights Reserved.
              </p>
            </div>
            <div className="group flex gap-x-4 uppercase tracking-widest">
              <p className="cursor-pointer text-xl hover:!opacity-100 group-hover:opacity-50 md:text-2xl">
                privacy
              </p>
              <p className="cursor-pointer text-xl hover:!opacity-100 group-hover:opacity-50 md:text-2xl">
                terms
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
