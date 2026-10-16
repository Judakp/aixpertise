import React, { useState } from 'react';
import { 
  Sparkles, 
  BrainCircuit, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Cpu, 
  BookOpen, 
  Award,
  Layers,
  MessageSquare
} from 'lucide-react';
import { AI_TRAINING_MODULES, BRAND_INFO } from '../data/content';
import { ContactAppointmentForm } from '../components/ContactAppointmentForm';
import { useTheme } from '../context/ThemeContext';

export const FormationsPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [selectedModule, setSelectedModule] = useState(AI_TRAINING_MODULES[0]);

  const handleBookTraining = (moduleTitle: string) => {
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
      <section className={`relative pt-14 pb-16 border-b overflow-hidden transition-colors duration-200 ${
        isDark 
          ? 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-slate-800' 
          : 'bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white border-slate-200'
      }`}>
        <div className={`absolute top-0 right-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          isDark ? 'bg-cyan-600/10' : 'bg-cyan-500/5'
        }`} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full border ${
            isDark ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60' : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Formations Pratiques en Intelligence Artificielle</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#0B1E3F]'
          }`}>
            Domptez l'IA pour décupler votre impact professionnel
          </h1>

          <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Fini les gadgets superficiels et les prompts génériques qui vous font passer pour un robot. Apprenez à intégrer l'IA dans votre carrière, votre personal branding et vos décisions managériales.
          </p>

          <div className={`pt-2 flex flex-wrap justify-center gap-4 text-xs ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> Formats individuels & équipes
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> Cas réels & prompts propriétaires
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> Animé par Sergio (Top 3 Favikon)
            </span>
          </div>
        </div>
      </section>

      {/* Hero Visual Spotlight */}
      <section className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl overflow-hidden border shadow-2xl relative ${
          isDark ? 'border-slate-800' : 'border-slate-200 shadow-slate-200'
        }`}>
          <div className="aspect-[21/9] w-full relative bg-slate-900">
            <img
              src="/src/assets/images/ai_training_workshop_1792114566123.jpg"
              alt="Atelier Formation Intelligence Artificielle AI-Xpertise"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold">
                  Méthode Opérationnelle & Éthique
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Des ateliers immersifs pour passer à l'action immédiate
                </h3>
              </div>
              <button
                onClick={() => handleBookTraining('Masterclass')}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs shrink-0 transition-colors cursor-pointer shadow-md"
              >
                Demander le programme détaillé
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Catalog */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-2">
          <h2 className={`text-2xl sm:text-3xl font-display font-bold ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
            Nos Programmes de Formation Phares
          </h2>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Découvrez nos formations conçues pour les professionnels individuels et les entreprises souhaitant transformer leur productivité.
          </p>
        </div>

        {/* 3 Modules Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {AI_TRAINING_MODULES.map((program) => (
            <div
              key={program.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between space-y-6 transition-all duration-200 group ${
                isDark 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/50' 
                  : 'bg-white border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    isDark ? 'bg-cyan-950 text-cyan-400 border-cyan-800' : 'bg-cyan-50 text-cyan-800 border-cyan-200'
                  }`}>
                    {program.badge}
                  </span>
                  <div className={`flex items-center gap-1 text-[11px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`} />
                    <span>{program.duration}</span>
                  </div>
                </div>

                <h3 className={`text-xl font-display font-bold transition-colors ${
                  isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                }`}>
                  {program.title}
                </h3>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {program.summary}
                </p>

                <div className={`pt-2 border-t space-y-2 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                  <div className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>
                    Compétences clés acquises :
                  </div>
                  <ul className={`space-y-1.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {program.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                        <span className="leading-snug">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`pt-4 border-t space-y-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <button
                  onClick={() => handleBookTraining(program.title)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer ${
                    isDark
                      ? 'text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300'
                      : 'text-white bg-gradient-to-r from-[#0B1E3F] to-[#123B70] hover:opacity-95'
                  }`}
                >
                  <span>Réserver ma session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className={`text-[10px] text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Format : {program.format}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Syllabus Focus of Selected Module */}
        <div className={`p-8 rounded-3xl border space-y-6 ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-cyan-400' : 'text-teal-700'}`}>
                Aperçu du Syllabus Pédagogique
              </span>
              <h3 className={`text-xl font-display font-bold mt-1 ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
                La méthode AI-Xpertise : De la théorie aux cas réels
              </h3>
            </div>
            <div className="flex gap-2">
              {AI_TRAINING_MODULES.map((mod, idx) => (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(mod)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    selectedModule.id === mod.id
                      ? 'bg-cyan-500 text-slate-950'
                      : isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Module {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {selectedModule.title} — Déroulé des sessions :
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedModule.syllabus.map((item, idx) => (
                <div key={idx} className={`p-4 rounded-xl border space-y-2 ${
                  isDark ? 'bg-slate-950 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-xs font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>Étape {idx + 1}</div>
                  <h4 className={`text-sm font-semibold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? 'bg-cyan-950/40 border-cyan-800/40 text-slate-300' : 'bg-cyan-50 border-cyan-200 text-slate-700'
          }`}>
            <div className="text-xs">
              <strong className={isDark ? 'text-white' : 'text-slate-900'}>Besoin d'une formation intra-entreprise sur-mesure ?</strong> Nous adaptons les cas d'usage directement à vos outils métiers et contraintes de sécurité.
            </div>
            <button
              onClick={() => handleBookTraining('Intra-entreprise')}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold whitespace-nowrap cursor-pointer shadow-sm"
            >
              Demander un devis entreprise
            </button>
          </div>
        </div>

      </section>

      {/* Universal Contact & Appointment Form at Bottom of Page */}
      <ContactAppointmentForm
        id="contact-section"
        defaultPackage="Formation IA & Candidature"
        defaultCategory="Entreprise / Formation Équipe"
        sectionTitle="Inscrivez-vous à une session ou demandez un devis"
        sectionSubtitle="Échangez avec Sergio pour définir le format et les dates adaptés à vos besoins."
      />

    </div>
  );
};
