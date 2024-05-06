import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
const HomeNavigations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const navigateTo = (path: string) => {
    navigate(path);
  };
  if (pathname !== '/') return null;
  return (
    <>
      <Button
        variant={'outlined'}
        size={'lg'}
        onClick={() => navigateTo('/get-project')}
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
    </>
  );
};
export default function Navigation() {
  return (
    <nav className="flex gap-[16px] items-center">
      <HomeNavigations />
    </nav>
  );
}
