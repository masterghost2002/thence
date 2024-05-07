import AskQuestions from '../components/home/ask-questions';
import Metric from '../components/home/metric';
import FeatureCarousel from '../components/home/feature-carousel';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import Rectangles from '../assets/rectangles.svg';
export default function HomePage() {
  return (
    <div className="flex relative flex-col  flex-1">
      <div className="flex items-center justify-center mt-[80px]">
        <div className="flex flex-col items-center justify-center w-[588px] text-center gap-[14px]">
          <span
            className="text-[36px] font-[400] font-cursive leading-[40px] text-[#2DA950]"
            style={{ letterSpacing: '-2px' }}
          >
            Success stories
          </span>
          <p
            className="text-[56px] leading-[67px] font-[600]"
            style={{ letterSpacing: '-2px' }}
          >
            Every success journey we’ve encountered.
          </p>
        </div>
      </div>
      <div className="flex gap-[106px] pt-[112px] pb-[148px] px-[62px]">
        <Metric />
        <div className="flex   flex-col justify-between gap-[130px]">
          <div className="absolute right-[0]">
            <img src={Rectangles} />
          </div>
          <FeatureCarousel />
          <Button
            variant={'filled'}
            className="pt-[31px] h-[88px] pr-[40px] pb-[31px] pl-[40px] w-[244px]"
          >
            <div className="flex  gap-[16px] items-center">
              <span className="text-[20px]">Explore More</span>
              <ArrowRight />
            </div>
          </Button>
        </div>
      </div>
      <AskQuestions />
    </div>
  );
}
