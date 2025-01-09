import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "./Hero.scss";

const heroSlides = [
  {
    id: 1,
    title: "SPIN OF THRONES III",
    subtitle: "€250,000 + 60,555 FS",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 2,
    title: "MEGA TOURNAMENT",
    subtitle: "Win up to €100,000 Daily",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 3,
    title: "LIVE CASINO BONUS",
    subtitle: "200% Welcome Bonus",
    imageUrl:
      "https://images.unsplash.com/photo-1636487658547-c05ee4cdc1ac?auto=format&fit=crop&w=2000&q=80",
  },
  {
    id: 4,
    title: "SLOTS PARADISE",
    subtitle: "1000+ Games Available",
    imageUrl:
      "https://images.unsplash.com/photo-1592155931584-901ac15763e3?auto=format&fit=crop&w=2000&q=80",
  },
];

export const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        effect="fade"
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <div className="image-wrapper">
                <img src={slide.imageUrl} alt={slide.title} />
                <div className="overlay" />
              </div>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button className="btn-play">PLAY NOW</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
