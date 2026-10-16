import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo';
import { useTheme } from '../context/ThemeContext';

export type PageId = 'home' | 'coaching' | 'formations' | 'temoignages';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'coaching', label: 'Coaching & Offres' },
    { id: 'formations', label: 'Formations IA' },
    { id: 'temoignages', label: 'Témoignages' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 ${
      isDark 
        ? 'bg-slate-950/90 border-slate-800/80 text-slate-100' 
        : 'bg-white/95 border-slate-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone Top Bar Contract separated by gap-8 */}
        <div className="flex items-center justify-between gap-6 md:gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (single clean element with prominent high-visibility logo) */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer shrink-0 py-1"
          >
            <Logo size="md" />
          </div>

          {/* Zone 2: 4 Nav links (clean, single-line text links with subtle active/hover state) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? isDark ? 'text-cyan-400 font-bold' : 'text-cyan-700 font-bold'
                      : isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions - Theme Switcher Icon + Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Theme Switcher - Icon only as requested */}
            <button
              onClick={toggleTheme}
              title={isDark ? "Version claire" : "Version sombre"}
              aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
              className={`p-2.5 rounded-xl transition-all border cursor-pointer shrink-0 shadow-sm flex items-center justify-center ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 border-slate-700/80 text-amber-400 hover:border-cyan-500/50 hover:scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-cyan-700 hover:border-teal-600 hover:scale-105'
              }`}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-700" />
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 shadow-md whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                isDark
                  ? 'text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-teal-300 shadow-cyan-950/40'
                  : 'text-white bg-gradient-to-r from-[#0B1E3F] via-slate-900 to-[#123B70] hover:bg-slate-800 shadow-slate-300'
              }`}
            >
              <span>Prendre Rendez-vous</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              title={isDark ? "Version claire" : "Version sombre"}
              aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
              className={`p-2 rounded-lg border text-xs font-semibold ${
                isDark ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-300 text-cyan-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-black hover:bg-slate-100'
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 pt-2 pb-6 space-y-3 ${
          isDark ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'
        }`}>
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? isDark ? 'bg-slate-900 text-cyan-400 font-bold' : 'bg-slate-100 text-cyan-700 font-bold'
                      : isDark ? 'text-slate-300 hover:bg-slate-900 hover:text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={toggleTheme}
              title={isDark ? "Version claire" : "Version sombre"}
              aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
              className={`p-2.5 rounded-lg flex items-center justify-center border shrink-0 ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-amber-400'
                  : 'bg-slate-100 border-slate-300 text-cyan-700'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 ${
                isDark
                  ? 'text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400'
                  : 'text-white bg-slate-900'
              }`}
            >
              <span>Prendre Rendez-vous</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

