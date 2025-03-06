import SplitText from "./Motion/SplitText";
const AboutUs = () => {
  return (
    <>
      <section className="min-h-dvh bg-background text-white lg:min-h-screen">
        <div className="container py-10">
          <SplitText
            text="Designing spaces that inspire, connect, and endure."
            className="about_text"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,0,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="flex flex-col gap-10 pt-20 md:flex-row">
            <div className="w-full">
              <SplitText
                text="At VETRO, we exist to ideate, visualize and create a new era of realities."
                className="about_text_p1"
                delay={20}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,0,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="50px"
              />
            </div>
            <div className="flex w-full items-center justify-center leading-10">
              <SplitText
                text="Our in-house team,led by visionary architect and spatial experience designer Afolabi Olaide,collaborates to bring your project to life through innovative architectural concepts,immersive 3D visualizations,and dynamic motion design.Whether shaping physical spaces or digital environments, we specialize in crafting compelling architectural narratives that transform ideas into breathtaking,functional,and highly desirable experiences."
                className="about_text_p2"
                delay={20}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,0,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="50px"
                textAlign="start"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
