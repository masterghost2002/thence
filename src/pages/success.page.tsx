import { useNavigate } from 'react-router-dom';
import useTimer from '../hooks/useTimer';
export default function SuccessPage() {
  const navigate = useNavigate();
  const remainingTime = useTimer(() => navigate('/'), 5);
  return (
    <div className="flex-1 flex flex-col ">
      <div className="flex flex-col flex-1 items-center justify-center">
        <div className="flex flex-col   w-[718px] text-center items-center gap-[25px]">
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.0014 67.3219C15.5919 67.3219 0.668091 52.3979 0.668091 33.9886C0.668091 15.5791 15.5919 0.655273 34.0014 0.655273C52.4107 0.655273 67.3347 15.5791 67.3347 33.9886C67.3347 52.3979 52.4107 67.3219 34.0014 67.3219ZM30.6768 47.3219L54.2471 23.7517L49.5331 19.0377L30.6768 37.8939L21.2488 28.4656L16.5347 33.1799L30.6768 47.3219Z"
              fill="#28B246"
            />
          </svg>
          <div className="flex gap-[16px] flex-col items-center justify-center">
            <span
              className="text-[36px] font-[400] font-cursive text-[#2DA950] leading-[40px]"
              style={{ letterSpacing: '-2px' }}
            >
              Success Submited
            </span>
            <div className="flex flex-col items-center justify-center gap-[20px]">
              <span
                className="font-[600] text-[56px] leading-[67px]"
                style={{ letterSpacing: '-2px' }}
              >
                Congratulations
              </span>
              <p className="text-[26px] font-[500] leading-[35px] text-[#727272]">
                Your request has been successfully submitted to us. We will
                validate your information and reach out to your shortly with
                updates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[42px] w-full flex justify-center ">
        <p className="text-[20px] text-[#727272] font-[400] leading-[26px]">
          Redirecting you to Homepage in{' '}
          <span className="text-black font-[600]">
            {' '}
            {remainingTime} Seconds{' '}
          </span>
        </p>
      </div>
    </div>
  );
}
