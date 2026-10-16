import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Award, 
  FileText, 
  Linkedin, 
  Target, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Clock, 
  ChevronRight, 
  ShieldCheck, 
  Star, 
  Quote 
} from 'lucide-react';
import { BRAND_INFO, MISSION_TEXT, TESTIMONIALS, FOUNDER_STORY } from '../data/content';
import { ContactAppointmentForm } from '../components/ContactAppointmentForm';
import { PageId } from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectPackage?: (pkgId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Homepage displays exactly 3 testimonials as requested, with a button to view all on testimonials page
  const homeTestimonials = TESTIMONIALS.slice(0, 3);

  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`space-y-0 transition-colors duration-200 ${
      isDark ? 'text-slate-100 bg-slate-950' : 'text-slate-900 bg-white'
    }`}>
      
      {/* 1. HERO SECTION */}
      <section className={`relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden transition-colors duration-200 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' 
          : 'bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white'
      }`}>
        {/* Ambient lighting effects */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-3xl pointer-events-none -z-0 ${
          isDark ? 'bg-gradient-to-r from-cyan-500/15 via-teal-500/10 to-transparent' : 'bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-transparent'
        }`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top trust marker */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm border ${
              isDark 
                ? 'bg-slate-900/90 border-cyan-500/30 text-cyan-300' 
                : 'bg-white border-cyan-200 text-cyan-900 shadow-slate-200'
            }`}>
              <Award className="w-4 h-4 text-amber-500" />
              <span>{BRAND_INFO.favikonRank}</span>
            </div>
          </div>

          {/* Main Title & Value Prop */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.12] ${
              isDark ? 'text-white' : 'text-[#0B1E3F]'
            }`}>
              Accélérateur de carrière pour <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Cadres dirigeants et Talents 🚀
              </span>
            </h1>

            <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Stratégie LinkedIn d'autorité, refonte de CV d'élite & formations IA pour transformer votre parcours en un véritable aimant à opportunités.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 shadow-lg flex items-center justify-center gap-2 cursor-pointer group ${
                  isDark
                    ? 'text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-cyan-950/60'
                    : 'text-white bg-gradient-to-r from-[#0B1E3F] via-slate-900 to-[#123B70] hover:opacity-95 shadow-slate-300'
                }`}
              >
                <span>Propulser ma carrière maintenant</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('coaching')}
                className={`w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold border transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? 'text-slate-200 bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 hover:border-slate-600'
                    : 'text-slate-800 bg-white hover:bg-slate-50 border-slate-300 hover:border-slate-400 shadow-sm'
                }`}
              >
                <span>Consulter les Formules (dès 25 €)</span>
                <ChevronRight className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
              </button>
            </div>

            {/* Proof indicators adjacent to hero */}
            <div className={`pt-8 flex flex-wrap items-center justify-center gap-6 text-xs ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>+1 000 professionnels accompagnés</span>
              </div>
              <span className="opacity-40">·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>Format Word ATS + Canva à vie</span>
              </div>
              <span className="opacity-40">·</span>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>Accompagnement direct par Sergio Ciccone</span>
              </div>
            </div>
          </div>

          {/* Hero Banner Visual showcasing executive environment */}
          <div className={`mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden border shadow-2xl relative group ${
            isDark ? 'border-slate-800/80' : 'border-slate-200 shadow-slate-200'
          }`}>
            <div className="aspect-[16/9] w-full relative bg-slate-900">
              <img
                src="/src/assets/images/hero_career_coaching_1792114566820.jpg"
                alt="AI-Xpertise accompagnement carriere et comites de direction"
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
                    Positionnement Statutaire & Algorithmique
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                    Ne plus chercher les recruteurs. Être chassé pour vos véritables victoires.
                  </h3>
                </div>
                <div className="shrink-0">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs font-bold text-white shadow-md">
                    Délai express 48h - 72h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className={`p-5 rounded-2xl border text-center transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className={`text-2xl sm:text-3xl font-display font-extrabold tabular-nums ${
                isDark ? 'text-cyan-400' : 'text-cyan-700'
              }`}>
                +1 000
              </div>
              <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Professionnels et managers propulsés
              </div>
            </div>

            <div className={`p-5 rounded-2xl border text-center transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className={`text-2xl sm:text-3xl font-display font-extrabold tabular-nums ${
                isDark ? 'text-teal-400' : 'text-teal-700'
              }`}>
                Top 3
              </div>
              <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Créateur LinkedIn France (Favikon)
              </div>
            </div>

            <div className={`p-5 rounded-2xl border text-center transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className={`text-2xl sm:text-3xl font-display font-extrabold tabular-nums ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                98%
              </div>
              <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                D'entretiens qualifiés générés
              </div>
            </div>

            <div className={`p-5 rounded-2xl border text-center transition-colors ${
              isDark ? 'bg-slate-900/60 border-slate-800/80' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className={`text-2xl sm:text-3xl font-display font-extrabold tabular-nums ${
                isDark ? 'text-cyan-300' : 'text-[#0B1E3F]'
              }`}>
                100%
              </div>
              <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Sur-mesure & compatible filtres ATS
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className={`py-20 border-t transition-colors duration-200 relative ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50/70 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-cyan-400' : 'text-teal-700'
            }`}>
              💡 Ma mission avec AI-Xpertise
            </div>
            <h2 className={`text-3xl sm:text-4xl font-display font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B1E3F]'
            }`}>
              L'excellence du Personal Branding au service de votre ambition
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed pt-2 font-medium ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              « {MISSION_TEXT.lead} »
            </p>
            <p className={`text-sm leading-relaxed max-w-2xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {MISSION_TEXT.body}
            </p>
          </div>

          {/* The 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Pillar 1: CV Haut de Gamme */}
            <div className={`p-8 rounded-3xl border transition-all space-y-4 group ${
              isDark 
                ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/40' 
                : 'bg-white border-slate-200 shadow-md hover:border-cyan-500/50 hover:shadow-lg'
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                isDark ? 'bg-cyan-950/60 border border-cyan-800/60 text-cyan-400' : 'bg-cyan-50 border border-cyan-200 text-cyan-700'
              }`}>
                <FileText className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className={`text-xs font-bold tracking-wider uppercase ${
                  isDark ? 'text-cyan-400' : 'text-cyan-700'
                }`}>
                  Format FR / EN
                </span>
                <h3 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  📄 CV Haut de Gamme
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Une refonte stratégique pour mettre en lumière vos véritables accomplissements. Format Word épuré 100% compatible avec les filtres ATS et modèle Canva modifiable à vie.
              </p>
              <div className={`pt-2 text-xs flex items-center gap-1.5 font-medium ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                <span>Rédaction orientée résultats et impact chiffré</span>
              </div>
            </div>

            {/* Pillar 2: Profil LinkedIn */}
            <div className={`p-8 rounded-3xl border transition-all space-y-4 group ${
              isDark 
                ? 'bg-slate-900/50 border-slate-800 hover:border-teal-500/40' 
                : 'bg-white border-slate-200 shadow-md hover:border-teal-500/50 hover:shadow-lg'
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                isDark ? 'bg-teal-950/60 border border-teal-800/60 text-teal-400' : 'bg-teal-50 border border-teal-200 text-teal-700'
              }`}>
                <Linkedin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className={`text-xs font-bold tracking-wider uppercase ${
                  isDark ? 'text-teal-400' : 'text-teal-700'
                }`}>
                  Algorithme & Humain
                </span>
                <h3 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  💻 Profil LinkedIn
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Une optimisation complète calibrée à la fois pour le moteur de recherche LinkedIn et pour l'œil exigeant des recruteurs, afin d'attirer les meilleures opportunités.
              </p>
              <div className={`pt-2 text-xs flex items-center gap-1.5 font-medium ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                <span>SEO LinkedIn, bio statutaire & bannière pro</span>
              </div>
            </div>

            {/* Pillar 3: Personal Branding */}
            <div className={`p-8 rounded-3xl border transition-all space-y-4 group ${
              isDark 
                ? 'bg-slate-900/50 border-slate-800 hover:border-emerald-500/40' 
                : 'bg-white border-slate-200 shadow-md hover:border-emerald-500/50 hover:shadow-lg'
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                isDark ? 'bg-emerald-950/60 border border-emerald-800/60 text-emerald-400' : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
              }`}>
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className={`text-xs font-bold tracking-wider uppercase ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  Ne plus chercher, être chassé
                </span>
                <h3 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  🎯 Personal Branding
                </h3>
              </div>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Un positionnement clair et une posture d'autorité pour vous démarquer instantanément de la concurrence. Vous n'êtes plus un candidat parmi d'autres, mais l'évidence de votre marché.
              </p>
              <div className={`pt-2 text-xs flex items-center gap-1.5 font-medium ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>Stratégie d'influence issue du Top 3 Favikon</span>
              </div>
            </div>

          </div>

          {/* Results callout */}
          <div className={`mt-14 max-w-4xl mx-auto p-6 rounded-2xl border text-center space-y-3 ${
            isDark 
              ? 'bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border-slate-800' 
              : 'bg-gradient-to-r from-white via-cyan-50/40 to-white border-slate-200 shadow-sm'
          }`}>
            <div className={`text-xs uppercase tracking-wider font-bold ${
              isDark ? 'text-cyan-400' : 'text-cyan-800'
            }`}>
              🏆 Les résultats concrets
            </div>
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}>
              <span className="flex items-center gap-2">
                <span className="text-cyan-500 font-bold">➡️</span>
                Plus de 1 000 professionnels et managers déjà accompagnés avec succès.
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="flex items-center gap-2">
                <span className="text-cyan-500 font-bold">➡️</span>
                Des profils qui captent l'attention et génèrent de vrais entretiens.
              </span>
            </div>
            <p className={`text-xs italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              « Ne laissez plus de mauvais outils freiner vos ambitions professionnelles. Il est temps de déclencher les opportunités que vous méritez. »
            </p>
          </div>

        </div>
      </section>

      {/* 3. FOUNDER LEGITIMACY SECTION ("Rencontrez Sergio") */}
      <section className={`py-20 border-t transition-colors duration-200 ${
        isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Founder Portrait */}
            <div className="lg:col-span-5 relative">
              <div className={`relative mx-auto max-w-md rounded-3xl overflow-hidden border shadow-2xl ${
                isDark ? 'border-slate-700/80 bg-slate-950' : 'border-slate-200 bg-white'
              }`}>
                <img
                  src="/src/assets/images/sergio_founder_portrait_1792114565496.jpg"
                  alt="Sergio - Fondateur de AI-Xpertise et Coach Carriere"
                  className="w-full h-auto object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay card */}
                <div className={`absolute bottom-4 left-4 right-4 p-4 rounded-2xl border backdrop-blur-md ${
                  isDark ? 'bg-slate-950/90 border-slate-800/90' : 'bg-white/95 border-slate-200 shadow-md'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Sergio Ciccone</h4>
                      <p className={`text-xs font-medium ${isDark ? 'text-cyan-400' : 'text-teal-700'}`}>{FOUNDER_STORY.role}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                      isDark ? 'bg-cyan-950 border-cyan-800 text-cyan-300' : 'bg-cyan-50 border-cyan-300 text-cyan-800'
                    }`}>
                      Top 3 Favikon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story, Legitimacy & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full border ${
                isDark ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60' : 'text-cyan-900 bg-cyan-50 border-cyan-200'
              }`}>
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Légitimité & Expertise Reconnue</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl font-display font-bold tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-[#0B1E3F]'
              }`}>
                À propos de Sergio Ciccone : <br />
                <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  L'intelligence humaine et stratégique au service de votre carrière
                </span>
              </h2>

              <p className={`text-sm sm:text-base leading-relaxed italic border-l-2 pl-4 py-1 ${
                isDark ? 'text-slate-300 border-cyan-500' : 'text-slate-700 border-teal-600'
              }`}>
                « {FOUNDER_STORY.quote} »
              </p>

              <div className={`space-y-4 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {FOUNDER_STORY.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Founder Credentials Grid */}
              <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                {FOUNDER_STORY.credentials.map((cred, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border ${
                    isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{cred.value}</div>
                    <div className={`text-[11px] font-semibold ${isDark ? 'text-cyan-400' : 'text-teal-700'}`}>{cred.label}</div>
                    <div className={`text-[10px] truncate ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cred.detail}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToContact}
                  className={`px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer ${
                    isDark
                      ? 'text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-cyan-950/50'
                      : 'text-white bg-gradient-to-r from-[#0B1E3F] to-[#123B70] hover:opacity-95 shadow-slate-300'
                  }`}
                >
                  <span>Échanger directement avec Sergio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/33600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs flex items-center gap-1 font-bold ${
                    isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'
                  }`}
                >
                  <span>Discuter sur WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. FORMULAS OVERVIEW SECTION */}
      <section className={`py-20 border-t transition-colors duration-200 ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-slate-50/70 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-cyan-400' : 'text-teal-700'
            }`}>
              Des formules taillées pour chaque étape
            </div>
            <h2 className={`text-3xl sm:text-4xl font-display font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B1E3F]'
            }`}>
              Choisissez l'accompagnement adapté à votre envergure
            </h2>
            <p className={`text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Une tarification claire, inclusive et sans surprise. Choisissez la formule correspondant à votre niveau pour lancer la refonte avec Sergio Ciccone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Étudiants & International */}
            <div className={`p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
            }`}>
              <div className="space-y-4">
                <span className={`text-xs font-bold uppercase tracking-wide ${
                  isDark ? 'text-cyan-400' : 'text-cyan-700'
                }`}>
                  Bloc 1 · Tremplin Emploi
                </span>
                <h3 className={`text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Étudiants & Transition
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Accessible aux étudiants, jeunes diplômés, chômeurs et candidats internationaux (pouvoir d'achat adapté).
                </p>
                <div className={`py-3 border-y space-y-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pack Essentiel CV</span>
                    <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>25 €</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pack Expert CV + LinkedIn</span>
                    <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>75 €</span>
                  </div>
                </div>
                <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                    <span>Format Word + Canva modifiable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                    <span>1 retouche incluse & conseils écrits</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('coaching')}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  isDark
                    ? 'text-cyan-300 bg-cyan-950/60 border-cyan-800/80 hover:bg-cyan-900/60'
                    : 'text-cyan-800 bg-cyan-50 border-cyan-200 hover:bg-cyan-100'
                }`}
              >
                <span>Voir les détails de l'offre</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Employés & Confirmés */}
            <div className={`p-7 rounded-3xl border relative flex flex-col justify-between space-y-6 shadow-xl transition-all ${
              isDark 
                ? 'bg-slate-900/90 border-teal-500/40 shadow-teal-950/20' 
                : 'bg-white border-teal-400 shadow-teal-100 ring-2 ring-teal-500/20'
            }`}>
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wide">
                Très demandé
              </div>
              <div className="space-y-4">
                <span className={`text-xs font-bold uppercase tracking-wide ${
                  isDark ? 'text-teal-400' : 'text-teal-700'
                }`}>
                  Bloc 2 · Progression
                </span>
                <h3 className={`text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Employés & Confirmés
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Pour franchir un cap décisif dans votre secteur et valoriser vos succès chiffrés.
                </p>
                <div className={`py-3 border-y space-y-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pack Essentiel CV</span>
                    <span className={`font-bold ${isDark ? 'text-teal-400' : 'text-teal-700'}`}>50 €</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pack Expert CV + LinkedIn</span>
                    <span className={`font-bold ${isDark ? 'text-teal-400' : 'text-teal-700'}`}>150 €</span>
                  </div>
                </div>
                <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span>Lien Canva modifiable à vie + Word ATS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span>Alignement profil & préparation WhatsApp</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('coaching')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Choisir cette formule</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Cadres Dirigeants & Managers */}
            <div className={`p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all ${
              isDark 
                ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
            }`}>
              <div className="space-y-4">
                <span className={`text-xs font-bold uppercase tracking-wide ${
                  isDark ? 'text-cyan-400' : 'text-cyan-700'
                }`}>
                  Bloc 3 · Haute Couture
                </span>
                <h3 className={`text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Cadres & Managers VIP
                </h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Enjeux de Personal Branding cruciaux pour dirigeants, comités de direction et hauts potentiels.
                </p>
                <div className={`py-3 border-y space-y-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pack Essentiel Exécutif</span>
                    <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>125 €</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pack Expert Statutaire</span>
                    <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>250 €</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>Pack VIP Absolu</span>
                    <span className={`font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>500 €</span>
                  </div>
                </div>
                <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                    <span>Copywriting statutaire de leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                    <span>Préparation aux entretiens & canal WhatsApp</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('coaching')}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  isDark
                    ? 'text-cyan-300 bg-cyan-950/60 border-cyan-800/80 hover:bg-cyan-900/60'
                    : 'text-cyan-800 bg-cyan-50 border-cyan-200 hover:bg-cyan-100'
                }`}
              >
                <span>Découvrir l'offre VIP</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('coaching')}
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-800 hover:text-cyan-900'
              }`}
            >
              <span>Comparer toutes les formules & modalités de paiement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. HOMEPAGE TESTIMONIALS SECTION (Exactly 3 testimonials + 'Voir plus' button to Testimonials page) */}
      <section className={`py-20 border-t transition-colors duration-200 ${
        isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-cyan-400' : 'text-teal-700'
            }`}>
              Retour d'expérience clients
            </div>
            <h2 className={`text-3xl sm:text-4xl font-display font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B1E3F]'
            }`}>
              Ils ont déclenché les opportunités qu'ils méritaient
            </h2>
            <p className={`text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Découvrez les retours authentiques de professionnels qui ont transformé leur carrière grâce à la refonte stratégique de Sergio Ciccone.
            </p>
          </div>

          {/* Grid of 3 testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {homeTestimonials.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between space-y-6 transition-all relative ${
                  isDark 
                    ? 'bg-slate-950/80 border-slate-800 hover:border-cyan-500/30' 
                    : 'bg-white border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      isDark 
                        ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50' 
                        : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                    }`}>
                      {item.resultMetric}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed italic ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    « {item.content} »
                  </p>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-slate-900' : 'border-slate-100'
                }`}>
                  <div>
                    <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</h4>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{item.role}</p>
                    <p className={`text-[11px] font-medium ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>{item.company}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${
                    isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    {item.packageChosen}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Button to view all testimonials */}
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('temoignages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-sm group ${
                isDark
                  ? 'text-slate-200 bg-slate-900 hover:bg-slate-800 border-slate-700/80 hover:border-cyan-500/50'
                  : 'text-slate-800 bg-white hover:bg-slate-50 border-slate-300 hover:border-cyan-600'
              }`}
            >
              <span>Voir tous les témoignages (+1 000 retours d'expérience)</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
            </button>
          </div>

        </div>
      </section>

      {/* 6. UNIVERSAL CONTACT & APPOINTMENT FORM AT BOTTOM OF PAGE */}
      <ContactAppointmentForm
        id="contact-section"
        sectionTitle="Prêt(e) à passer à l'action ?"
        sectionSubtitle="Ne laissez plus de mauvais outils freiner vos ambitions professionnelles. Contactez Sergio Ciccone dès aujourd'hui."
      />

    </div>
  );
};
