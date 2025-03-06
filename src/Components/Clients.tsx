import Clientswiper from "./Clientswiper";
import { clients } from "../Data/data";

const Clients = () => {
  return (
    <section className="h-full w-full overflow-hidden bg-explosivegrey dark:bg-background">
      <div className="container">
        <div className="flex justify-center text-center text-black dark:text-explosivegrey">
          <p className="about_text">Experiences that Define Excellence</p>
        </div>
        <Clientswiper clients={clients} />
      </div>
    </section>
  );
};

export default Clients;
