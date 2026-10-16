import React, { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Award, 
  ArrowRight, 
  Filter, 
  Quote, 
  TrendingUp, 
  UserCheck 
} from 'lucide-react';
import { TESTIMONIALS, BRAND_INFO } from '../data/content';
import { ContactAppointmentForm } from '../components/ContactAppointmentForm';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeFilter, setActiveFilter] = useState<'all' | 'cadres' | 'confirmes' | 'etudiants'>('all');

  const filteredTestimonials = activeFilter === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.category === activeFilter);

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
      
      {/* Header Banner */}
      <section className={`relative pt-14 pb-16 border-b transition-colors duration-200 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-slate-800' 
          : 'bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full border ${
            isDark ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60' : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Plus de 1 000 Carrières Propulsées</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#0B1E3F]'
          }`}>
            Les réussites de nos talents & dirigeants
          </h1>

          <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Consultez les témoignages vérifiés de professionnels qui ont transformé leur positionnement, passé les filtres ATS et été chassés par les plus grands recruteurs.
          </p>

          {/* Social Proof Strip */}
          <div className={`pt-2 flex flex-wrap items-center justify-center gap-6 text-xs ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <div className="flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>4.9 / 5</span>
              <span>note moyenne</span>
            </div>
            <span className="opacity-40">·</span>
            <div className="flex items-center gap-1.5 font-medium">
              <TrendingUp className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span>+25% d'augmentation salariale moyenne</span>
            </div>
            <span className="opacity-40">·</span>
            <div className="flex items-center gap-1.5 font-medium">
              <UserCheck className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
              <span>98% d'entretiens décrochés en moins de 30 jours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'Tous les témoignages (6)' },
            { id: 'cadres', label: 'Cadres Dirigeants & Managers VIP' },
            { id: 'confirmes', label: 'Employés & Profils Confirmés' },
            { id: 'etudiants', label: 'Étudiants & Transition Internationale' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-md shadow-cyan-950/20'
                    : isDark ? 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white' : 'bg-white border border-slate-200 text-slate-700 hover:text-slate-950 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all duration-200 relative group ${
                isDark 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40' 
                  : 'bg-white border-slate-200 hover:border-cyan-500/60 shadow-sm hover:shadow-md'
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
                    isDark ? 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50' : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                  }`}>
                    {item.resultMetric}
                  </span>
                </div>

                <div className={`text-xs font-bold tracking-wide ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
                  {item.timeframe}
                </div>

                <p className={`text-sm leading-relaxed italic ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  « {item.content} »
                </p>
              </div>

              <div className={`pt-4 border-t space-y-2 ${isDark ? 'border-slate-800/80' : 'border-slate-100'}`}>
                <div>
                  <h4 className={`text-sm font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                  }`}>
                    {item.name}
                  </h4>
                  <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.role}</p>
                  <p className={`text-[11px] font-medium ${isDark ? 'text-cyan-400/90' : 'text-teal-700'}`}>{item.company}</p>
                </div>
                <div className={`flex items-center justify-between text-[11px] pt-1 ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  <span className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.packageChosen}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real WhatsApp Chat Extract Section */}
      <section className={`py-16 border-t transition-colors ${
        isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold ${
              isDark ? 'bg-emerald-950/60 border-emerald-800 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}>
              <MessageSquare className="w-3.5 h-3.5" /> Échanges réels WhatsApp avec Sergio
            </div>
            <h2 className={`text-2xl sm:text-3xl font-display font-bold ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
              L'accompagnement en direct sur WhatsApp
            </h2>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Des échanges rapides, personnalisés et sans intermédiaire avec Sergio.
            </p>
          </div>

          {/* WhatsApp UI Simulation Box */}
          <div className={`p-6 rounded-3xl border shadow-2xl space-y-4 max-w-2xl mx-auto ${
            isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
          }`}>
            <div className={`flex items-center justify-between border-b pb-3 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center font-bold text-white text-sm">
                  SF
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Sergio · AI-Xpertise</h4>
                  <p className={`text-[11px] font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>En ligne · Réponse express</p>
                </div>
              </div>
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Direct WhatsApp</span>
            </div>

            {/* Simulated message bubbles */}
            <div className="space-y-3 text-xs">
              <div className={`p-3.5 rounded-2xl max-w-[85%] border ${
                isDark ? 'bg-slate-900 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-800 border-slate-200'
              }`}>
                « Bonjour Sergio ! Je viens de recevoir le Word et le lien Canva. C'est juste incroyable, la mise en avant de mes KPIs de direction n'a rien à voir avec mon ancien CV. J'ai postulé hier soir sur deux postes de DG. »
                <div className={`text-[10px] text-right mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Hier 18:24</div>
              </div>

              <div className={`p-3.5 rounded-2xl max-w-[85%] ml-auto border ${
                isDark 
                  ? 'bg-cyan-950/70 border-cyan-800/80 text-cyan-100' 
                  : 'bg-emerald-50 border-emerald-300 text-emerald-900'
              }`}>
                « Superbe retour Alexandre ! Tu as vu pour l'accroche LinkedIn ? Dès que tu publies la mise à jour, les recruteurs de ton secteur vont avoir la notification de profil. On surveille les premiers contacts cette semaine ! Sergio 🙂 »
                <div className={`text-[10px] text-right mt-1 ${isDark ? 'text-cyan-300/70' : 'text-emerald-700'}`}>Hier 18:31</div>
              </div>

              <div className={`p-3.5 rounded-2xl max-w-[85%] border ${
                isDark ? 'bg-slate-900 text-slate-300 border-slate-800' : 'bg-slate-100 text-slate-800 border-slate-200'
              }`}>
                « Deux chasseurs de têtes viennent de m'écrire pour un premier contact en visio mardi prochain ! Merci pour votre rapidité et votre expertise. »
                <div className={`text-[10px] text-right mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Aujourd'hui 11:15</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className={`px-6 py-3 rounded-xl font-bold text-xs inline-flex items-center gap-2 shadow-lg cursor-pointer ${
                isDark
                  ? 'bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950'
                  : 'bg-gradient-to-r from-[#0B1E3F] to-[#123B70] text-white hover:opacity-95 shadow-slate-300'
              }`}
            >
              <span>Rejoindre les professionnels accompagnés</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Universal Contact & Appointment Form at Bottom of Page */}
      <ContactAppointmentForm
        id="contact-section"
        sectionTitle="Prêt(e) à écrire votre propre success story ?"
        sectionSubtitle="Ne laissez plus de mauvais outils freiner vos ambitions professionnelles. Réservez votre accompagnement."
      />

    </div>
  );
};
