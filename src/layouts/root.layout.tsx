import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
export function RootLayout() {
  return (
    <div className="p-[24px] h-screen w-screen">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
