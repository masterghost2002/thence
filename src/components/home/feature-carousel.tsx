import { Swiper, SwiperSlide } from 'swiper/react';
import features from '../../constant/carousel-features';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { useRef, useState } from 'react';
type CarouselButtonProps = {
  currentIndex: number;
  activeIndex: number;
  onClick: (index: number) => void;
};
const CarouselButton = ({
  currentIndex,
  activeIndex,
  onClick
}: CarouselButtonProps) => {
  const isActive = currentIndex === activeIndex;
  return (
    <button
      onClick={() => onClick(currentIndex)}
      className={`w-[10px] ${!isActive && 'hover:bg-[#CAD0CB]'} cursor-pointer h-[10px] rounded-full ${isActive ? 'bg-[#2DA950]' : 'bg-[#E4E3E3]'}`}
    />
  );
};
export default function FeatureCarousel() {
  // TODO: find the fix for swiper type error
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(index);
  };
  return (
    <div className="w-[400px] relative mt-[71px]">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay]}
        onSlideChange={(e) => {
          setActiveIndex(e.realIndex);
        }}
        className="mySwiper"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <span
              className="text-[40px] font-[600]"
              style={{ letterSpacing: '-2px' }}
            >
              {feature}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-[12px] mt-[55px]">
        {features.map((_, index) => (
          <CarouselButton
            key={index}
            currentIndex={index}
            onClick={handleSlideChange}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
