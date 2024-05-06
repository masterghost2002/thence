import Logo from '../../assets/logo.svg';
import Navigation from './navigation';
export default function Header() {
  return (
    <header className="flex border-[#EAEAEA] justify-between items-center rounded-full w-full px-[20px] py-[16px] border-2">
      <img src={Logo} className="ml-[36px]" />
      <Navigation />
    </header>
  );
}
