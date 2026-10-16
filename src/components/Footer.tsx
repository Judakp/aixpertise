import React from 'react';
import { Mail, MessageSquare, Linkedin, Award, ShieldCheck, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND_INFO } from '../data/content';
import { PageId } from './Navbar';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t text-xs transition-colors duration-200 ${
      isDark 
        ? 'bg-slate-950 border-slate-800 text-slate-400' 
        : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className={`text-sm leading-relaxed max-w-sm pt-2 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Accélérateur de carrière pour cadres dirigeants et talents. Stratégie LinkedIn d'autorité, refonte de CV d'élite et formations d'avant-garde en intelligence artificielle.
            </p>
            <div className={`flex items-center gap-2 text-xs pt-1 font-medium ${
              isDark ? 'text-cyan-400' : 'text-teal-700'
            }`}>
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{BRAND_INFO.favikonRank}</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaching')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Coaching & Offres (CV / LinkedIn)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formations')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Formations Intelligence Artificielle
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('temoignages')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Témoignages & Résultats (+1 000)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Offres par profil */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Formules Spécifiques
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('coaching')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Étudiants & Transition (25 € - 75 €)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaching')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Employés & Confirmés (50 € - 150 €)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('coaching')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Cadres Dirigeants & VIP (125 € - 500 €)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formations')}
                  className="hover:text-cyan-500 transition-colors text-left"
                >
                  Ateliers IA pour Entreprises & Comex
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Direct & Règlement */}
          <div className="space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Contact & Échanges
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${BRAND_INFO.contactEmail}`}
                  className="flex items-center gap-2 hover:text-cyan-500 transition-colors"
                >
                  <Mail className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                  <span>{BRAND_INFO.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-500 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Direct WhatsApp (Sergio)</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-500 transition-colors"
                >
                  <Linkedin className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                  <span>Message privé LinkedIn</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <div className={`text-[11px] font-semibold mb-1.5 ${
                isDark ? 'text-slate-300' : 'text-slate-800'
              }`}>
                Règlements sécurisés acceptés :
              </div>
              <div className="flex flex-wrap gap-1 text-[10px]">
                {['CB', 'PayPal', 'Wero', 'Virement', 'MoneyGram', 'Ria'].map((m) => (
                  <span
                    key={m}
                    className={`px-1.5 py-0.5 rounded border ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-300 text-slate-700'
                    }`}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={`mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] ${
          isDark ? 'border-slate-900 text-slate-500' : 'border-slate-200 text-slate-500'
        }`}>
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} AI-Xpertise. Tous droits réservés.</span>
            <span>·</span>
            <span>Accompagnement par Sergio</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Mentions Légales</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">Politique de Confidentialité</span>
            <span>·</span>
            <span className="hover:underline cursor-pointer">CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
