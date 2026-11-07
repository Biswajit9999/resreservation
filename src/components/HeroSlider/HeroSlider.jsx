import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import offer1 from "../../assests/restoffer1.png";
import offer2 from "../../assests/restoffer2.png";
import styles from "./HeroSlider.module.css";

// active slide is index 0, so the poster is centered, noodles on both sides
const slides = [offer2, offer1, offer2, offer1];

export default function HeroSlider() {
  return (
    <section className={styles.slider}>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={12}
        slidesPerView={1.4}
        breakpoints={{
          768: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <img src={src} alt={`Offer ${i + 1}`} className={styles.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}