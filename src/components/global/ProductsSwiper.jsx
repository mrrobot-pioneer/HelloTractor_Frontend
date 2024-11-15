import "../../assets/styles/global/products-swiper.css";
import Product from "./Product";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function ProductsSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        400: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide">
        <Product />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Product />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Product />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Product />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Product />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <Product />
      </SwiperSlide>
    </Swiper>
  );
}
