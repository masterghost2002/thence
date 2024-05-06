import { useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { HomeNavigation, GetProjectNavigation } from './navigation';
const HomeHeader = () => {
  return (
    <header className="flex  border-[#EAEAEA] justify-between items-center rounded-full m-[24px] px-[20px] py-[16px] border-2">
      <img src={Logo} className="ml-[36px]" />
      <HomeNavigation />
    </header>
  );
};
const GetProjectHeader = () => {
  return (
    <header className="flex justify-between items-center">
      <img src={Logo} className="py-[32px] px-[52px]" />
      <GetProjectNavigation />
    </header>
  );
};
const DefaultHeader = () => {
  return (
    <header className="py-[32px] px-[52px] flex justify-between items-center">
      <img src={Logo} />
    </header>
  );
};
export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  switch (pathname) {
    case '/':
      return <HomeHeader />;
    case '/get-project':
      return <GetProjectHeader />;
    default:
      return <DefaultHeader />;
  }
}
