/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CoachingPage } from './pages/CoachingPage';
import { FormationsPage } from './pages/FormationsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { MessageSquare, ArrowUp, X, Sparkles, Send } from 'lucide-react';
import { BRAND_INFO } from './data/content';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isQuickBookingOpen, setIsQuickBookingOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = () => {
    const contactElem = document.getElementById('contact-section');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuickBookingOpen(true);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 antialiased ${
      isDark 
        ? 'bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white' 
        : 'bg-white text-slate-900 selection:bg-cyan-600 selection:text-white'
    }`}>
      
      {/* Top Navbar with Theme Switcher Button */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Page Routing */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
          />
        )}
        {currentPage === 'coaching' && (
          <CoachingPage />
        )}
        {currentPage === 'formations' && (
          <FormationsPage />
        )}
        {currentPage === 'temoignages' && (
          <TestimonialsPage />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Button: Quick WhatsApp Contact */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* WhatsApp Direct Floating Button */}
        <a
          href="https://wa.me/33600000000?text=Bonjour%20Sergio%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20formules%20AI-Xpertise."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all duration-200 hover:scale-105"
          aria-label="Contacter Sergio sur WhatsApp"
        >
          <div className="p-1 rounded-full bg-white/20">
            <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />
          </div>
          <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
            Échanger avec Sergio sur WhatsApp
          </span>
        </a>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`p-3 rounded-full border shadow-md backdrop-blur-sm transition-all cursor-pointer ${
              isDark 
                ? 'bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700' 
                : 'bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-300'
            }`}
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Booking Modal if triggered outside form */}
      {isQuickBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className={`border rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-4 ${
            isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900 shadow-slate-300'
          }`}>
            <button
              onClick={() => setIsQuickBookingOpen(false)}
              className={`absolute top-5 right-5 p-1 rounded-lg ${
                isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`flex items-center gap-2 text-xs font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
              <Sparkles className="w-4 h-4" />
              <span>Prise de contact directe</span>
            </div>

            <h3 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
              Démarrer avec Sergio
            </h3>

            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Pour une prise en charge immédiate, vous pouvez contacter directement Sergio par message privé sur LinkedIn ou WhatsApp.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/33600000000?text=Bonjour%20Sergio%2C%20je%20souhaite%20lancer%20un%20accompagnement%20AI-Xpertise."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ouvrir WhatsApp (+33 6 00 00 00 00)</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.contactEmail}`}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 border transition-colors ${
                  isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                }`}
              >
                <span>Envoyer un email ({BRAND_INFO.contactEmail})</span>
              </a>
            </div>

            <p className={`text-[11px] text-center italic pt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Règlements acceptés : CB, PayPal, Wero, virement, MoneyGram ou Ria. Sergio 🙂
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
