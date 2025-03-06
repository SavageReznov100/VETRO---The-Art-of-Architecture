import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

interface Client {
  description: string;
  name: string;
  location: string;
  image: string;
}

interface ClientswiperProps {
  clients: Client[];
}

const Clientswiper = ({ clients }: ClientswiperProps) => {
  return (
    <section>
      <Swiper
        className="h-full w-full"
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        spaceBetween={5}
        slidesPerView={1}
        navigation
        effect="fade"
        pagination={{ clickable: true }}
        fadeEffect={{ crossFade: true }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-row justify-between gap-6 p-3 md:p-8 lg:p-10">
              <div className="flex w-full basis-1/3 items-center justify-center">
                <div className="h-60 w-60 overflow-hidden rounded-md">
                  <img
                    src={client.image}
                    loading="lazy"
                    alt="avatar"
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full basis-2/3 flex-col gap-4">
                <div>
                  <p className="text-justify text-sm font-bold leading-snug tracking-normal text-black dark:text-white md:text-lg md:tracking-widest lg:text-2xl lg:leading-normal">
                    {client.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-raisinblack dark:text-explosivegrey">
                  <p className="text-sm font-bold md:text-base">
                    {client.name}
                  </p>
                  <p className="text-xs">{client.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Clientswiper;
