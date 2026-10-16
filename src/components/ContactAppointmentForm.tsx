import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  ChevronRight,
  ArrowRight,
  ChevronDown,
  User,
  Phone
} from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { useTheme } from '../context/ThemeContext';

interface ContactAppointmentFormProps {
  id?: string;
  defaultPackage?: string;
  defaultCategory?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export const ContactAppointmentForm: React.FC<ContactAppointmentFormProps> = ({
  id = 'contact-section',
  defaultPackage = 'Pack Expert (Recommandé)',
  defaultCategory = 'Cadre Dirigeant ou Manager',
  sectionTitle = "Prêt(e) à passer à l'action ?",
  sectionSubtitle = "Prenez rendez-vous pour un échange confidentiel ou démarrez directement votre refonte.",
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileCategory, setProfileCategory] = useState(defaultCategory);
  const [servicePackage, setServicePackage] = useState(defaultPackage);
  const [paymentPreference, setPaymentPreference] = useState('Carte Bancaire / En ligne');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [currentSituation, setCurrentSituation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate WhatsApp prefilled message
  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Bonjour Sergio,\n\nJe souhaite échanger avec vous pour booster ma carrière avec AI-Xpertise.\n` +
      `👤 Nom : ${fullName || '[Mon Nom]'}\n` +
      `💼 Profil : ${profileCategory}\n` +
      `🎯 Formule souhaitée : ${servicePackage}\n` +
      `💳 Règlement envisagé : ${paymentPreference}\n` +
      `📝 Mes objectifs : ${currentSituation || 'Évolution de carrière / Refonte CV & LinkedIn'}\n\n` +
      `Merci d'avance pour votre retour !`
    );
    return `https://wa.me/33600000000?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const inputBaseClasses = `w-full px-3.5 py-3 rounded-xl border text-sm transition-all outline-none ${
    isDark 
      ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400' 
      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 shadow-xs'
  }`;

  const selectOptionClasses = isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900';

  return (
    <section id={id} className={`relative py-14 sm:py-20 border-t transition-colors duration-200 overflow-hidden ${
      isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      {/* Decorative ambient subtle glow */}
      <div className={`absolute top-0 right-1/4 w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-cyan-600/10' : 'bg-cyan-500/5'
      }`} />
      <div className={`absolute bottom-0 left-1/4 w-80 h-80 sm:w-96 sm:h-96 rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-teal-600/10' : 'bg-teal-500/5'
      }`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide rounded-full border ${
            isDark 
              ? 'text-cyan-400 bg-cyan-950/60 border-cyan-800/60' 
              : 'text-cyan-800 bg-cyan-50 border-cyan-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diagnostic & Prise de Rendez-vous</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl font-display font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-[#0B1E3F]'
          }`}>
            {sectionTitle}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            {sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Pitch, Sergio Signature & Trust Signals */}
          <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
            
            {/* Word from Sergio */}
            <div className={`p-5 sm:p-6 rounded-2xl border shadow-lg space-y-4 ${
              isDark ? 'bg-slate-800/80 border-slate-700/80' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 p-0.5 shrink-0 shadow-md">
                  <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-extrabold text-sm ${
                    isDark ? 'bg-slate-900 text-cyan-400' : 'bg-white text-cyan-700'
                  }`}>
                    SF
                  </div>
                </div>
                <div>
                  <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Le mot de Sergio
                  </h4>
                  <p className={`text-xs font-semibold ${isDark ? 'text-cyan-400' : 'text-teal-700'}`}>
                    Fondateur AI-Xpertise · Top 3 Favikon France
                  </p>
                </div>
              </div>

              <p className={`text-xs sm:text-sm italic border-l-2 pl-3 py-0.5 leading-relaxed ${
                isDark ? 'text-slate-300 border-cyan-500' : 'text-slate-700 border-teal-600'
              }`}>
                « Dites-moi simplement l'option que vous préférez ! Je vous transmettrai les modalités (CB, PayPal, Wero, virement, MoneyGram ou Ria) et nous lancerons la machine directement sur WhatsApp. »
              </p>

              <div className={`flex items-center justify-between pt-3 border-t text-xs ${
                isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <span className={`flex items-center gap-1.5 font-bold ${
                  isDark ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  <Clock className="w-3.5 h-3.5" /> Réponse sous 2h ouvrées
                </span>
                <span className={`font-bold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                  Sergio 🙂
                </span>
              </div>
            </div>

            {/* Direct contact shortcuts */}
            <div className="space-y-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-sm font-medium transition-all group ${
                  isDark
                    ? 'bg-emerald-950/40 border-emerald-700/60 hover:bg-emerald-900/50 hover:border-emerald-500 text-emerald-300'
                    : 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-400 text-emerald-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-200 text-emerald-800'
                  }`}>
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-sm">Écrire sur WhatsApp</div>
                    <div className={`text-xs ${isDark ? 'text-emerald-400/80' : 'text-emerald-700'}`}>
                      Échanges directs avec Sergio
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`mailto:${BRAND_INFO.contactEmail}?subject=Demande%20d%27accompagnement%20AI-Xpertise`}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-sm font-medium transition-all group ${
                  isDark
                    ? 'bg-slate-800/70 border-slate-700 hover:border-cyan-500 text-slate-300'
                    : 'bg-white border-slate-300 hover:border-cyan-600 text-slate-700 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-800'
                  }`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {BRAND_INFO.contactEmail}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Pour envoyer votre CV actuel
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
              </a>
            </div>

            {/* Accepted payment methods reminder */}
            <div className="pt-2">
              <div className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                <CreditCard className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} />
                Modalités de règlement acceptées
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {['Carte Bancaire', 'PayPal', 'Wero', 'Virement SEPA', 'MoneyGram', 'Ria'].map((method) => (
                  <span
                    key={method}
                    className={`px-2.5 py-1 rounded-lg border font-medium text-xs ${
                      isDark 
                        ? 'bg-slate-800/90 border-slate-700 text-slate-300' 
                        : 'bg-white border-slate-300 text-slate-700 shadow-xs'
                    }`}
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Form Component */}
          <div className={`lg:col-span-7 p-5 sm:p-7 lg:p-8 rounded-3xl border shadow-xl transition-all order-1 lg:order-2 ${
            isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            {submitted ? (
              <div className="py-10 text-center space-y-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto border ${
                  isDark ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-300'
                }`}>
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className={`text-2xl font-display font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Demande transmise avec succès !
                  </h3>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    Merci <strong className="font-bold">{fullName}</strong>. Sergio a bien reçu votre demande pour le <strong className={isDark ? 'text-cyan-400' : 'text-cyan-700'}>{servicePackage}</strong>.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border max-w-md mx-auto text-left text-xs space-y-2 ${
                  isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Prochaines étapes :</div>
                  <div>1. Vous allez recevoir un message de confirmation sur {contactMethod === 'whatsapp' ? `WhatsApp (${phone || 'numéro fourni'})` : email}.</div>
                  <div>2. Sergio vous transmettra les modalités ({paymentPreference}) pour démarrer la refonte.</div>
                  <div>3. Votre premier jet vous sera livré sous 48h à 72h ouvrées.</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Ouvrir WhatsApp maintenant
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-xs transition-colors border cursor-pointer ${
                      isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                  >
                    Nouvelle demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className={`border-b pb-3.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h3 className={`text-lg sm:text-xl font-display font-bold ${isDark ? 'text-white' : 'text-[#0B1E3F]'}`}>
                    Formulaire de contact & réservation
                  </h3>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Tous les champs marqués d'une étoile (*) sont obligatoires.
                  </p>
                </div>

                {/* Nom & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Nom complet <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="ex: Alexandre Dubois"
                      className={inputBaseClasses}
                    />
                  </div>
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Adresse Email <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alexandre@domaine.com"
                      className={inputBaseClasses}
                    />
                  </div>
                </div>

                {/* Téléphone WhatsApp & Canal de contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Numéro WhatsApp / Téléphone <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+33 6 12 34 56 78"
                      className={inputBaseClasses}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Canal de contact privilégié
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setContactMethod('whatsapp')}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          contactMethod === 'whatsapp'
                            ? isDark 
                              ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 ring-1 ring-emerald-500/50' 
                              : 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-1 ring-emerald-500/50'
                            : isDark 
                              ? 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white' 
                              : 'bg-slate-50 border-slate-300 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setContactMethod('email')}
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                          contactMethod === 'email'
                            ? isDark 
                              ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300 ring-1 ring-cyan-500/50' 
                              : 'bg-cyan-50 border-cyan-500 text-cyan-900 ring-1 ring-cyan-500/50'
                            : isDark 
                              ? 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white' 
                              : 'bg-slate-50 border-slate-300 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5" /> Email
                      </button>
                    </div>
                  </div>
                </div>

                {/* Profile category & service selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Votre profil actuel
                    </label>
                    <div className="relative">
                      <select
                        value={profileCategory}
                        onChange={(e) => setProfileCategory(e.target.value)}
                        className={`${inputBaseClasses} appearance-none pr-9 cursor-pointer`}
                      >
                        <option value="Cadre Dirigeant ou Manager" className={selectOptionClasses}>Cadre Dirigeant ou Manager</option>
                        <option value="Employé ou Profil Confirmé" className={selectOptionClasses}>Employé ou Profil Confirmé</option>
                        <option value="Étudiant ou Jeune Diplômé" className={selectOptionClasses}>Étudiant ou Jeune Diplômé</option>
                        <option value="Candidat International" className={selectOptionClasses}>Candidat International</option>
                        <option value="Entreprise / Formation Équipe" className={selectOptionClasses}>Entreprise / Formation IA</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Formule souhaitée
                    </label>
                    <div className="relative">
                      <select
                        value={servicePackage}
                        onChange={(e) => setServicePackage(e.target.value)}
                        className={`${inputBaseClasses} appearance-none pr-9 cursor-pointer`}
                      >
                        <optgroup label="Bloc 3 : Cadres & Managers" className={selectOptionClasses}>
                          <option value="Pack VIP / Exécutif (500 €)" className={selectOptionClasses}>Pack VIP / Exécutif (500 €)</option>
                          <option value="Pack Expert Statutaire (250 €)" className={selectOptionClasses}>Pack Expert Statutaire (250 €)</option>
                          <option value="Pack Essentiel Exécutif (125 €)" className={selectOptionClasses}>Pack Essentiel Exécutif (125 €)</option>
                        </optgroup>
                        <optgroup label="Bloc 2 : Employés & Confirmés" className={selectOptionClasses}>
                          <option value="Pack Expert Confirmé (150 €)" className={selectOptionClasses}>Pack Expert Confirmé (150 €)</option>
                          <option value="Pack Essentiel Confirmé (50 €)" className={selectOptionClasses}>Pack Essentiel Confirmé (50 €)</option>
                        </optgroup>
                        <optgroup label="Bloc 1 : Étudiants & International" className={selectOptionClasses}>
                          <option value="Pack Expert Étudiant (75 €)" className={selectOptionClasses}>Pack Expert Étudiant (75 €)</option>
                          <option value="Pack Essentiel Étudiant (25 €)" className={selectOptionClasses}>Pack Essentiel Étudiant (25 €)</option>
                        </optgroup>
                        <optgroup label="Formations IA & Autres" className={selectOptionClasses}>
                          <option value="Formation IA & Candidature" className={selectOptionClasses}>Formation IA & Recherche d'Emploi</option>
                          <option value="Masterclass LinkedIn & IA" className={selectOptionClasses}>Masterclass LinkedIn & IA</option>
                          <option value="Formation IA pour Managers" className={selectOptionClasses}>Formation IA pour Managers</option>
                          <option value="Échange découverte préalable" className={selectOptionClasses}>Échange découverte gratuit</option>
                        </optgroup>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Moyen de règlement */}
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Moyen de règlement envisagé
                  </label>
                  <div className="relative">
                    <select
                      value={paymentPreference}
                      onChange={(e) => setPaymentPreference(e.target.value)}
                      className={`${inputBaseClasses} appearance-none pr-9 cursor-pointer`}
                    >
                      <option value="Carte Bancaire / En ligne" className={selectOptionClasses}>Carte Bancaire (CB / Visa / Mastercard)</option>
                      <option value="PayPal" className={selectOptionClasses}>PayPal</option>
                      <option value="Wero" className={selectOptionClasses}>Wero</option>
                      <option value="Virement Bancaire SEPA" className={selectOptionClasses}>Virement Bancaire (SEPA / IBAN)</option>
                      <option value="MoneyGram" className={selectOptionClasses}>MoneyGram</option>
                      <option value="Ria" className={selectOptionClasses}>Ria</option>
                      <option value="À discuter avec Sergio" className={selectOptionClasses}>À convenir ensemble</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Objectifs / Notes */}
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Votre situation actuelle ou lien LinkedIn (facultatif)
                  </label>
                  <textarea
                    rows={3}
                    value={currentSituation}
                    onChange={(e) => setCurrentSituation(e.target.value)}
                    placeholder="ex: Je vise un poste de Directeur des Opérations d'ici 3 mois, mon CV n'est plus à jour..."
                    className={`${inputBaseClasses} resize-none`}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-50 ${
                      isDark
                        ? 'text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-cyan-950/50'
                        : 'text-white bg-gradient-to-r from-[#0B1E3F] via-slate-900 to-[#123B70] hover:opacity-95 shadow-slate-300'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                        Traitement en cours...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Valider ma demande & Échanger avec Sergio</span>
                      </>
                    )}
                  </button>
                </div>

                <div className={`flex flex-wrap items-center justify-center gap-3 text-[11px] pt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span className="flex items-center gap-1 font-semibold">
                    <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-teal-600'}`} /> Confidentialité garantie
                  </span>
                  <span>·</span>
                  <span>Sans engagement</span>
                  <span>·</span>
                  <span>Réponse sous 2h</span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
