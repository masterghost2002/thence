import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
export function RootLayout() {
  return (
    <div className="] h-screen  w-screen flex flex-col">
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
}
