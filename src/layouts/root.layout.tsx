import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Footer from '../components/footer';
export function RootLayout() {
  return (
    <div className="w-screen min-h-[100vh] flex flex-col">
      <Header />
      <main className="flex-1 flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
