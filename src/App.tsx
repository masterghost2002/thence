import { Route, Routes } from 'react-router-dom';
import { RootLayout } from './layouts/root.layout';
import HomePage from './pages/home.page';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
