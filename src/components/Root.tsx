import { Outlet } from '@tanstack/react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Root() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}