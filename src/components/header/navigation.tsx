import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
export const HomeNavigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex gap-[16px] items-center">
      <Button
        variant={'outlined'}
        size={'lg'}
        onClick={() => navigate('/get-project')}
      >
        Get Project
      </Button>
      <Button
        variant={'filled'}
        size={'lg'}
        onClick={() => navigate('/onboard-talent')}
      >
        Onboard Talent
      </Button>
    </nav>
  );
};
export const GetProjectNavigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex gap-[16px] items-center">
      <Button variant={'outlined'} size={'icon'} onClick={() => navigate('/')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </Button>
    </nav>
  );
};
