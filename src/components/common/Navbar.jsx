import NavbarRoutes from './NavbarRoutes';
import UserAuthMenu from './UserAuthMenu';
import MobileMenu from './MobileMenu';
import Logo from './logo';

export default function Navbar({ user }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Logo />

        {/* Dekstop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavbarRoutes />
        </div>

        {/* Dekstop btn */}
        <div className="hidden lg:flex items-center gap-3">
          <UserAuthMenu user={user} />
        </div>

        {/* Mobile menu */}
        <div className="flex lg:hidden items-center gap-2">
          <MobileMenu user={user} />
        </div>

      </div>
    </header>
  );
}