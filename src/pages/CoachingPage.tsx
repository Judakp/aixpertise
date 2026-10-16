import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  Zap, 
  FileText, 
  Linkedin, 
  Award,
  ChevronDown,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import { COACHING_BLOCKS, BRAND_INFO, COACHING_FAQ, FaqItem } from '../data/content';
import { ContactAppointmentForm } from '../components/ContactAppointmentForm';
import { useTheme } from '../context/ThemeContext';

export const CoachingPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [selectedBlockId, setSelectedBlockId] = useState<string>('cadres-managers');
  const [prefilledPackage, setPrefilledPackage] = useState<string>('Pack Expert Statutaire (250 €)');
  const [prefilledCategory, setPrefilledCategory] = useState<string>('Cadre Dirigeant ou Manager');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-delais');
  const [faqFilter, setFaqFilter] = useState<'all' | 'general' | 'livrables' | 'paiement'>('all');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const handleSelectPackage = (packageName: string, price: number, blockTitle: string) => {
    setPrefilledPackage(`${packageName} (${price} €)`);
    setPrefilledCategory(blockTitle);
    const formElement = document.getElementById('contact-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeBlock = COACHING_BLOCKS.find((b) => b.id === selectedBlockId) || COACHING_BLOCKS[2];

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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Offres & Formules d'Accompagnement Sur-Mesure</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-display font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#0B1E3F]'
          }`}>
            Des formules conçues pour propulser votre carrière
          </h1>

          <p className={`text-sm sm:text-base max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Que vous soyez jeune diplômé en quête de votre première opportunité ou cadre dirigeant briguant un siège au comité exécutif, chaque formule est calibrée avec rigueur.
          </p>

          {/* Guarantee pill */}
          <div className={`pt-2 flex flex-wrap justify-center gap-4 text-xs ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> Format Word 100% compatible ATS
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> Lien Canva modifiable à vie
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> 1 retouche incluse sur tous les packs
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> Échanges et suivi direct WhatsApp
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Profile Switcher Tabs */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`p-1.5 rounded-2xl flex flex-col sm:flex-row gap-1 shadow-lg border ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-300'
        }`}>
          {COACHING_BLOCKS.map((block) => {
            const isCurrent = block.id === selectedBlockId;
            return (
              <button
                key={block.id}
                onClick={() => setSelectedBlockId(block.id)}
                className={`flex-1 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                  isCurrent
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md font-bold'
                    : isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800/60' : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <span>{block.title}</span>
                <span className={`text-[10px] ${
                  isCurrent ? 'text-slate-950 font-bold' : isDark ? 'text-slate-500' : 'text-slate-500'
                }`}>
                  {block.id === 'cadres-managers' && 'Formules VIP (125 € - 500 €)'}
                  {block.id === 'employes-confirmes' && 'Profils Confirmés (50 € - 150 €)'}
                  {block.id === 'etudiants-internationaux' && 'Accessible (25 € - 75 €)'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Block Content Header */}
        <div className={`mt-10 p-6 rounded-2xl border space-y-3 ${
          isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-cyan-400' : 'text-teal-700'
              }`}>
                {activeBlock.subtitle}
              </span>
              <h2 className={`text-2xl font-display font-bold mt-0.5 ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
                {activeBlock.title}
              </h2>
            </div>
            <div className={`text-xs italic ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {activeBlock.note}
            </div>
          </div>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {activeBlock.description}
          </p>
          <div className={`text-xs p-2.5 rounded-xl border ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/40 border-cyan-900/50' 
              : 'text-cyan-900 bg-cyan-50 border-cyan-200'
          }`}>
            <strong>Public cible :</strong> {activeBlock.targetAudience}
          </div>
        </div>

        {/* Pricing Cards Grid for the Active Block */}
        <div className={`mt-8 grid grid-cols-1 ${activeBlock.packages.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2 max-w-4xl mx-auto'} gap-6`}>
          {activeBlock.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-7 rounded-3xl border flex flex-col justify-between space-y-6 relative transition-all duration-200 ${
                pkg.highlight
                  ? isDark 
                    ? 'bg-slate-900 border-cyan-500/80 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-500/40' 
                    : 'bg-white border-cyan-500 shadow-xl shadow-cyan-100 ring-2 ring-cyan-500/20'
                  : isDark 
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' 
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`text-xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {pkg.name}
                  </h3>
                  <p className={`text-xs mt-1 min-h-[32px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {pkg.description}
                  </p>
                </div>

                <div className={`pt-2 pb-1 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-display font-extrabold tabular-nums ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-xl font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                      {pkg.currency}
                    </span>
                    <span className={`text-xs ml-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>TTC · Clé en main</span>
                  </div>
                  <div className={`text-[11px] mt-1 flex items-center gap-1 font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    <Clock className="w-3 h-3" /> Délai moyen : {pkg.turnaround}
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-2">
                  <div className={`text-[11px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Inclus dans cette formule :
                  </div>
                  <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className={`pt-4 border-t space-y-2 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
                <button
                  onClick={() => handleSelectPackage(pkg.name, pkg.price, activeBlock.title)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-950/40'
                      : isDark ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                  }`}
                >
                  <span>Choisir {pkg.name} ({pkg.price} €)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className={`text-[10px] text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Lancement sur WhatsApp · Modalités transmises par Sergio
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* All 3 Blocks detailed text & direct quotes from Sergio */}
      <section className={`py-16 border-t transition-colors ${
        isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className={`text-2xl sm:text-3xl font-display font-bold ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
              Détails de nos 3 Blocs d'accompagnement
            </h2>
            <p className={`text-xs sm:text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Une transparence totale sur nos engagements, nos livrables et nos méthodes d'échange.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                  isDark ? 'bg-cyan-950 text-cyan-400' : 'bg-cyan-100 text-cyan-800'
                }`}>
                  Bloc 1
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Dès 25 €</span>
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Étudiants, Jeunes Diplômés & Transition Internationale
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                « Parfait ! Pour propulser votre entrée sur le marché du travail, voici les deux formules adaptées à votre profil (incluant 1 retouche et des échanges par écrit). Accessible aux étudiants, chômeurs et candidats internationaux notamment dans les marchés où le pouvoir d’achat est plus limité. »
              </p>
              <div className={`text-xs border-t pt-3 space-y-1 ${
                isDark ? 'border-slate-900 text-slate-400' : 'border-slate-100 text-slate-600'
              }`}>
                <div>• Pack Essentiel (25 €) : CV percutant (Word + Canva modifiable).</div>
                <div>• Pack Expert (75 €) : Pack Essentiel + profil LinkedIn optimisé.</div>
              </div>
            </div>

            {/* Box 2 */}
            <div className={`p-6 rounded-2xl border space-y-4 shadow-lg ${
              isDark ? 'bg-slate-950 border-teal-500/30 shadow-teal-950/20' : 'bg-white border-teal-300 shadow-teal-100'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                  isDark ? 'bg-teal-950 text-teal-400' : 'bg-teal-100 text-teal-800'
                }`}>
                  Bloc 2
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Dès 50 €</span>
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Employés & Profils Confirmés
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                « Excellente décision. Pour franchir un nouveau cap dans votre carrière, voici les deux formules d'accompagnement spécialement taillées pour votre niveau. Nous préparerons tout cela ensemble sur WhatsApp. »
              </p>
              <div className={`text-xs border-t pt-3 space-y-1 ${
                isDark ? 'border-slate-900 text-slate-400' : 'border-slate-100 text-slate-600'
              }`}>
                <div>• Pack Essentiel (50 €) : Refonte complète CV (Word + Canva à vie).</div>
                <div>• Pack Expert (150 €) : CV + alignement LinkedIn pour dominer votre secteur.</div>
              </div>
            </div>

            {/* Box 3 */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded text-xs font-bold ${
                  isDark ? 'bg-emerald-950 text-emerald-400' : 'bg-emerald-100 text-emerald-800'
                }`}>
                  Bloc 3
                </span>
                <span className={`text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Dès 125 €</span>
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Cadres Dirigeants & Managers VIP
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                « Très bon choix. Pour un profil de votre envergure, les enjeux de Personal Branding sont cruciaux. Formules VIP sur-mesure pour vous positionner en leader incontournable. »
              </p>
              <div className={`text-xs border-t pt-3 space-y-1 ${
                isDark ? 'border-slate-900 text-slate-400' : 'border-slate-100 text-slate-600'
              }`}>
                <div>• Pack Essentiel (125 €) : CV leadership Word 100% ATS + Canva.</div>
                <div>• Pack Expert (250 €) : CV + LinkedIn statutaire & algorithmique.</div>
                <div>• Pack VIP (500 €) : Entièrement sur-mesure + préparation intensive aux entretiens.</div>
              </div>
            </div>

          </div>

          {/* Payment Methods Banner */}
          <div className={`p-8 rounded-3xl border space-y-6 ${
            isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div>
                <h3 className={`text-xl font-display font-bold flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-[#0B1E3F]'
                }`}>
                  <CreditCard className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                  Modalités de Règlement Flexibles & Internationales
                </h3>
                <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Tous les paiements sont sécurisés et adaptés aux candidats en France, en Europe et à l'International.
                </p>
              </div>
              <div className={`text-xs font-semibold flex items-center gap-1.5 ${
                isDark ? 'text-emerald-400' : 'text-emerald-700'
              }`}>
                <ShieldCheck className="w-4 h-4" /> Facture & Reçu fournis
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { name: "Carte Bancaire", desc: "Visa, Mastercard en ligne sécurisé" },
                { name: "PayPal", desc: "Paiement direct sécurisé mondial" },
                { name: "Wero", desc: "Paiement instantané européen" },
                { name: "Virement SEPA", desc: "Virement bancaire direct" },
                { name: "MoneyGram", desc: "Transfert d'argent international" },
                { name: "Ria", desc: "Réseau d'envoi international" },
              ].map((m, idx) => (
                <div key={idx} className={`p-3.5 rounded-xl border text-center space-y-1 ${
                  isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-xs font-bold ${isDark ? 'text-cyan-300' : 'text-cyan-800'}`}>{m.name}</div>
                  <div className={`text-[10px] leading-tight ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{m.desc}</div>
                </div>
              ))}
            </div>

            <p className={`text-xs italic text-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              « Dites-moi simplement l'option que vous préférez ! Je vous transmettrai les coordonnées nécessaires et nous lancerons la machine. Sergio 🙂 »
            </p>
          </div>

          {/* 4-Step Methodology */}
          <div className="space-y-6">
            <h3 className={`text-xl font-display font-bold text-center ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
              Comment se déroule votre accompagnement étape par étape ?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className={`text-xs font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>01. Diagnostic</span>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Audit de vos outils actuels</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Envoi de votre CV existant et de votre lien LinkedIn pour analyser vos points forts et les freins algorithmiques.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className={`text-xs font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>02. Copywriting</span>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Rédaction statutaire</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Sergio restructure vos accomplissements, quantifie vos résultats et rédige un storytelling percutant.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className={`text-xs font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>03. Calibrage</span>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Compatibilité ATS & SEO</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Mise en page épurée (Word + Canva modifiable à vie) et intégration des mots-clés prisés par les recruteurs.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border space-y-2 ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <span className={`text-xs font-mono font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>04. Lancement</span>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Retouche & Déclenchement</h4>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Validation finale ensemble, cycle de retouche inclus et conseils tactiques pour capter les entretiens.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTERACTIVE FAQ ACCORDION SECTION */}
      <section className={`py-20 border-t transition-colors ${
        isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50/70 border-slate-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full border ${
              isDark ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60' : 'text-cyan-800 bg-cyan-50 border-cyan-200'
            }`}>
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Foire Aux Questions · Réponses Transparentes</span>
            </div>

            <h2 className={`text-2xl sm:text-4xl font-display font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-[#0B1E3F]'
            }`}>
              Tout ce que vous devez savoir avant de démarrer
            </h2>

            <p className={`text-xs sm:text-sm max-w-xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Retrouvez les réponses aux questions les plus fréquentes sur nos délais, la compatibilité ATS, nos livrables modifiables et nos modalités de paiement.
            </p>
          </div>

          {/* FAQ Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Toutes les questions' },
              { id: 'general', label: 'Délais & Démarche' },
              { id: 'livrables', label: 'Livrables, ATS & Retouches' },
              { id: 'paiement', label: 'Règlements & Sécurité' },
            ].map((tab) => {
              const isActive = faqFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFaqFilter(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : isDark ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white' : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {COACHING_FAQ
              .filter(item => faqFilter === 'all' || item.category === faqFilter)
              .map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? isDark ? 'bg-slate-900/90 border-cyan-500/50 shadow-lg shadow-cyan-950/20' : 'bg-white border-cyan-500/80 shadow-md shadow-cyan-100'
                        : isDark ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80' : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(item.id)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                        isOpen ? (isDark ? 'text-cyan-300' : 'text-cyan-800') : (isDark ? 'text-slate-200' : 'text-slate-900')
                      }`}>
                        {item.question}
                      </span>
                      <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-200 ${
                        isOpen 
                          ? isDark ? 'bg-cyan-500/20 text-cyan-400 rotate-180' : 'bg-cyan-100 text-cyan-800 rotate-180'
                          : isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className={`px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                        isDark ? 'text-slate-300 border-slate-800/60' : 'text-slate-700 border-slate-100'
                      }`}>
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>

          {/* WhatsApp Direct Assistance Card */}
          <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
            isDark 
              ? 'bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900 border-emerald-800/40' 
              : 'bg-emerald-50/70 border-emerald-200 shadow-sm'
          }`}>
            <div className="space-y-1">
              <h4 className={`text-sm font-bold flex items-center justify-center sm:justify-start gap-2 ${
                isDark ? 'text-white' : 'text-emerald-950'
              }`}>
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                Vous avez une autre question spécifique à votre situation ?
              </h4>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-emerald-800'}`}>
                Sergio vous répond personnellement en toute franchise pour orienter votre choix.
              </p>
            </div>
            <a
              href="https://wa.me/33600000000?text=Bonjour%20Sergio%2C%20j%27ai%20une%20question%20avant%20de%20choisir%20ma%20formule%20sur%20AI-Xpertise."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 whitespace-nowrap transition-colors shadow-md shadow-emerald-950/20"
            >
              <span>Échanger avec Sergio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* Contact & Appointment Form at Bottom */}
      <ContactAppointmentForm
        id="contact-section"
        defaultPackage={prefilledPackage}
        defaultCategory={prefilledCategory}
        sectionTitle="Passez commande ou planifiez votre échange"
        sectionSubtitle="Sélectionnez votre formule et convenez directement des modalités avec Sergio."
      />

    </div>
  );
};
