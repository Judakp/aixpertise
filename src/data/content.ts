export interface PackageItem {
  id: string;
  name: string;
  price: number;
  currency: string;
  badge?: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  highlight?: boolean;
}

export interface TargetBlock {
  id: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  description: string;
  note?: string;
  packages: PackageItem[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  duration: string;
  format: string;
  badge: string;
  target: string;
  summary: string;
  objectives: string[];
  syllabus: { title: string; desc: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: 'cadres' | 'confirmes' | 'etudiants';
  resultMetric: string;
  timeframe: string;
  content: string;
  packageChosen: string;
  avatarSeed: string;
  date: string;
}

export const BRAND_INFO = {
  name: 'AI-Xpertise',
  tagline: "L'intelligence au service de votre carrière",
  heroPunchline: "Accélérateur de carrière pour Cadres dirigeants et Talents",
  heroSubheadline: "Stratégie LinkedIn & Refonte de CV d'Élite",
  founderName: "Sergio",
  founderTitle: "Fondateur de AI-Xpertise & Stratège Carrière & IA",
  favikonRank: "Top 3 des créateurs LinkedIn en France — Job Search Coaching — classement Favikon",
  contactEmail: "contact@ai-xpertise.fr",
  whatsappNumber: "+33600000000",
  whatsappFormatted: "+33 (0)6 00 00 00 00",
  linkedinUrl: "https://www.linkedin.com",
  stats: {
    accompanied: "1 000+",
    interviewRate: "98%",
    ranking: "Top 3",
    rankingContext: "Favikon France",
    turnaround: "48h-72h",
  },
  paymentMethods: [
    { name: "Carte Bancaire", icon: "CreditCard" },
    { name: "PayPal", icon: "Wallet" },
    { name: "Wero", icon: "Zap" },
    { name: "Virement SEPA", icon: "Landmark" },
    { name: "MoneyGram", icon: "Globe" },
    { name: "Ria", icon: "Send" },
  ]
};

export const MISSION_TEXT = {
  lead: "Je vous accompagne dans l'optimisation stratégique de vos outils de candidature pour transformer votre parcours en un véritable aimant à recruteurs.",
  body: "Fini les descriptions génériques ou les textes pré-mâchés par les algorithmes standards : nous construisons ensemble un Personal Branding authentique, percutant et sur-mesure.",
  pillars: [
    {
      title: "CV Haut de Gamme",
      subtitle: "Format FR & EN",
      description: "Une refonte stratégique pour mettre en lumière vos véritables accomplissements, 100% calibré pour les filtres ATS et le regard des décideurs.",
      icon: "FileText"
    },
    {
      title: "Profil LinkedIn Statutaire",
      subtitle: "Algorithme & Humain",
      description: "Une optimisation complète pour l'algorithme et pour l'œil humain, afin de démultiplier votre visibilité et attirer les opportunités convoitées.",
      icon: "Linkedin"
    },
    {
      title: "Personal Branding d'Élite",
      subtitle: "Ne plus chercher, être chassé",
      description: "Un positionnement clair et puissant pour inverser le rapport de force : les recruteurs et chasseurs de têtes viennent directement à vous.",
      icon: "Target"
    }
  ],
  results: [
    "Plus de 1 000 professionnels et managers déjà accompagnés avec succès.",
    "Des profils qui captent l'attention immédiate et déclenchent de vrais entretiens qualifiés.",
    "Ne laissez plus de mauvais outils freiner vos ambitions professionnelles. Il est temps de déclencher les opportunités que vous méritez."
  ]
};

export const COACHING_BLOCKS: TargetBlock[] = [
  {
    id: "etudiants-internationaux",
    title: "Étudiants & Candidats Internationaux",
    subtitle: "Tremplin vers le Premier Emploi & Transition Internationale",
    targetAudience: "Étudiants, jeunes diplômés, personnes en recherche d'emploi et candidats internationaux (notamment dans les marchés où le pouvoir d’achat est plus limité).",
    description: "Pour propulser votre entrée sur le marché du travail avec des outils percutants et accessibles.",
    note: "Formules incluant 1 retouche offerte et échanges suivis par écrit.",
    packages: [
      {
        id: "pack-essentiel-etudiant",
        name: "Pack Essentiel",
        price: 25,
        currency: "€",
        description: "Optimisation percutante de votre CV pour capter immédiatement l'attention des recruteurs.",
        deliverables: [
          "Refonte intégrale de votre CV",
          "Livraison double format : Word modifiable + lien Canva modifiable",
          "Mise en avant percutante des stages & projets",
          "1 cycle de retouche inclus",
          "Échanges et conseils par écrit"
        ],
        turnaround: "48h à 72h",
      },
      {
        id: "pack-expert-etudiant",
        name: "Pack Expert",
        price: 75,
        currency: "€",
        badge: "Recommandé pour débuter",
        highlight: true,
        description: "Le Pack Essentiel + l'optimisation stratégique de votre profil LinkedIn pour être repéré par les recruteurs.",
        deliverables: [
          "Tout ce qui est inclus dans le Pack Essentiel (CV Word + Canva)",
          "Audit et refonte complète du profil LinkedIn",
          "Titre percutant & calibrage des mots-clés de recherche",
          "Copywriting de la section 'Infos' accrocheuse",
          "Bannière professionnelle offerte",
          "1 cycle de retouche inclus",
          "Échanges personnalisés par écrit"
        ],
        turnaround: "72h",
      }
    ]
  },
  {
    id: "employes-confirmes",
    title: "Employés & Profils Confirmés",
    subtitle: "Franchir un Nouveau Cap & Dominer Votre Secteur",
    targetAudience: "Employés, techniciens, spécialistes, consultants et profils confirmés avec 2 à 10 ans d'expérience.",
    description: "Pour franchir un palier décisif dans votre carrière, valoriser vos expertises et négocier à la hausse.",
    note: "Formules incluant refonte complète, double format pérenne et accompagnement fluide sur WhatsApp.",
    packages: [
      {
        id: "pack-essentiel-confirme",
        name: "Pack Essentiel",
        price: 50,
        currency: "€",
        description: "Refonte complète de votre CV pour maximiser votre impact et valoriser vos succès chiffrés.",
        deliverables: [
          "Restructuration stratégique de votre CV",
          "Format Word épuré + lien Canva modifiable à vie",
          "Compatibilité ATS (Application Tracking Systems) garantie",
          "Reformulation orientée ROI & accomplissements majeurs",
          "1 cycle de retouche inclus",
          "Échanges directs"
        ],
        turnaround: "48h à 72h",
      },
      {
        id: "pack-expert-confirme",
        name: "Pack Expert",
        price: 150,
        currency: "€",
        badge: "Le Plus Plébiscité",
        highlight: true,
        description: "Le Pack Essentiel + l'optimisation intégrale et l'alignement de votre profil LinkedIn pour dominer votre secteur.",
        deliverables: [
          "Tout le Pack Essentiel (CV Word + Canva modifiable à vie)",
          "Alignement total CV & Profil LinkedIn",
          "Copywriting magnétique de la bio et des expériences",
          "Optimisation algorithmique SEO LinkedIn pour être chassé",
          "Conseils de prise de contact réseau ciblée",
          "Accompagnement et préparation personnalisée sur WhatsApp"
        ],
        turnaround: "3 à 5 jours",
      }
    ]
  },
  {
    id: "cadres-managers",
    title: "Cadres Dirigeants & Managers",
    subtitle: "Accompagnement VIP Sur-Mesure & Leadership Statutaire",
    targetAudience: "Directeurs généraux, VP, directeurs de département, managers exécutifs et hauts potentiels.",
    description: "Pour un profil de votre envergure, les enjeux de Personal Branding sont cruciaux. Ne cherchez plus les postes : devenez la référence incontournable de votre industrie.",
    note: "Accompagnement VIP d'exception, direct avec Sergio sur WhatsApp.",
    packages: [
      {
        id: "pack-essentiel-exec",
        name: "Pack Essentiel Exécutif",
        price: 125,
        currency: "€",
        description: "Refonte stratégique de votre CV axée sur votre leadership et votre vision stratégique.",
        deliverables: [
          "CV haute couture axé sur l'impact de gouvernance et P&L",
          "Format Word épuré 100% compatible ATS + Modèle Canva modifiable",
          "Mise en valeur des KPIs stratégiques et du management d'équipes",
          "Version bilingue optionnelle (FR / EN)",
          "Retouches prioritaires incluses",
          "Échanges confidentiels"
        ],
        turnaround: "72h",
      },
      {
        id: "pack-expert-exec",
        name: "Pack Expert Statutaire",
        price: 250,
        currency: "€",
        badge: "Standard Exécutif",
        description: "Le Pack Essentiel + l'optimisation complète de votre profil LinkedIn (copywriting statutaire et calibrage algorithmique).",
        deliverables: [
          "Pack Essentiel Exécutif complet (Word ATS + Canva)",
          "Optimisation complète de votre profil LinkedIn statutaire",
          "Copywriting haute valeur perçue & positionnement d'autorité",
          "Calibrage algorithmique de pointe pour les chasseurs de têtes",
          "Bannière branding executive sur-mesure",
          "Audit de visibilité et recommandations éditoriales",
          "Lancement et suivi sur WhatsApp"
        ],
        turnaround: "4 à 6 jours",
      },
      {
        id: "pack-vip-exec",
        name: "Pack VIP / Exécutif",
        price: 500,
        currency: "€",
        badge: "Accompagnement Absolu",
        highlight: true,
        description: "L'accompagnement absolu : Pack Expert + préparation intensive aux entretiens de haut niveau et définition stratégique de votre plan de carrière.",
        deliverables: [
          "Pack Expert Statutaire complet (CV VIP + LinkedIn d'Autorité)",
          "Préparation intensive aux entretiens d'embauche et comités exécutifs",
          "Simulation d'entretiens et décryptage des questions pièges",
          "Définition stratégique de votre plan de carrière et grille salariale",
          "Stratégie d'approche directe des chasseurs de têtes et conseils d'administration",
          "Canal prioritaire WhatsApp direct avec Sergio pendant tout le processus"
        ],
        turnaround: "Programme complet sur-mesure",
      }
    ]
  }
];

export const AI_TRAINING_MODULES: TrainingProgram[] = [
  {
    id: "formation-ia-candidature",
    title: "IA & Recherche d'Opportunités : La Révolution des Candidatures",
    duration: "1 Journée intensive ou 2 x 3h",
    format: "Visio interactive en direct ou Présentiel",
    badge: "Individuel & Groupe",
    target: "Professionnels, cadres et talents souhaitant multiplier par 5 leur efficacité de recherche.",
    summary: "Apprenez à dompter les outils d'IA (ChatGPT, Claude, Gemini) pour créer des lettres de motivation percutantes, analyser les offres d'emploi, décrypter les critères ATS et préparer vos entretiens sans jamais sonner comme un robot générique.",
    objectives: [
      "Maîtriser les prompts d'ingénierie contextuelle adaptés à la recherche d'emploi",
      "Générer des argumentaires sur-mesure en 2 minutes en conservant votre voix authentique",
      "Simuler des entretiens d'embauche en face-à-face vocal avec l'IA",
      "Éviter les pièges des détecteurs et le piège du texte pré-mâché"
    ],
    syllabus: [
      { title: "Module 1 : Le paysage des IA et les secrets du prompt engineering", desc: "Comprendre comment les modèles raisonnent et configurer vos personas de carrière." },
      { title: "Module 2 : Audit et adaptation chirurgicale d'une candidature", desc: "Faire analyser une offre cible et extraire les signaux faibles recherchés par les recruteurs." },
      { title: "Module 3 : Entraînement vocal et simulation d'objections", desc: "Mettre l'IA dans la peau du recruteur exigeant pour tester vos réponses sous pression." }
    ]
  },
  {
    id: "formation-ia-linkedin",
    title: "Masterclass LinkedIn & IA : Personal Branding d'Autorité",
    duration: "Programme 4 semaines (4 sessions de 2h)",
    format: "Cohorte restreinte (12 participants max)",
    badge: "Masterclass Élite",
    target: "Cadres dirigeants, consultants, indépendants et managers voulant devenir incontournables sur LinkedIn.",
    summary: "Exploitez la puissance combinée de la stratégie d'influence de Sergio (Top 3 Favikon) et de l'intelligence artificielle pour générer du contenu percutant, bâtir une communauté qualifiée et déclencher des opportunités entrantes chaque semaine.",
    objectives: [
      "Installer une routine de création de contenu assistée par l'IA en moins de 45 minutes par semaine",
      "Dompter l'algorithme LinkedIn : formatting, rétention, timing et signaux d'engagement",
      "Créer un système de capture d'opportunités en messagerie privée",
      "Construire une réputation d'expert reconnue par vos pairs et les chasseurs de têtes"
    ],
    syllabus: [
      { title: "Session 1 : Architecture du Personal Branding et positionnement d'autorité", desc: "Trouver votre angle unique et définir votre matrice éditoriale." },
      { title: "Session 2 : Le système IA de rédaction de Sergio", desc: "Nos prompts propriétaires pour rédiger des hooks captivants et des analyses profondes." },
      { title: "Session 3 : Algorithme LinkedIn et tactiques de distribution", desc: "Comment maximiser la portée organique et engager les décideurs." },
      { title: "Session 4 : Conversion et monétisation des opportunités", desc: "Transformer les likes et commentaires en offres d'embauche ou missions de conseil." }
    ]
  },
  {
    id: "formation-ia-managers",
    title: "IA Générative pour Managers & Dirigeants : Automatisation & Décision",
    duration: "2 Jours",
    format: "Sur-mesure intra-entreprise ou session executive",
    badge: "Entreprises & Comex",
    target: "Directeurs, membres du Comex, managers d'équipe et chefs de projet.",
    summary: "Passez de la curiosité théorique à la maîtrise opérationnelle. Intégrez l'IA dans vos flux de travail quotidiens : synthèse de rapports complexes, génération de scénarios stratégiques, automatisation des comptes-rendus et encadrement éthique de vos équipes.",
    objectives: [
      "Gagner jusqu'à 8 heures par semaine sur les tâches de synthèse et de documentation",
      "Construire des assistants IA personnalisés pour vos process métiers spécifiques",
      "Évaluer la sécurité des données, la confidentialité et les risques juridiques",
      "Accompagner la montée en compétences et lever les réticences de vos équipes"
    ],
    syllabus: [
      { title: "Jour 1 : Fondations opérationnelles et cas d'usage executive", desc: "Cartographie des cas d'usage à fort ROI et ateliers pratiques sur vos documents réels." },
      { title: "Jour 2 : Automatisation avancée et gouvernance de l'IA en entreprise", desc: "Création de GPTs personnalisés, prompt chain et feuille de route de transformation." }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Alexandre De Saint-Pol",
    role: "Directeur des Opérations & Supply Chain",
    company: "Groupe Industriel International",
    category: "cadres",
    resultMetric: "Recruté en 3 semaines",
    timeframe: "Poste à 145 k€ négocié",
    content: "Après 12 ans au même poste, mon profil était invisible sur LinkedIn et mon CV ressemblait à un catalogue de tâches. Sergio a fait un travail d'orfèvre sur mon positionnement de dirigeant. Le CV format ATS et la bio statutaire ont tout changé : j'ai été approché par deux chasseurs de têtes dès la deuxième semaine. Résultat : une offre signée à +28% de rémunération.",
    packageChosen: "Pack VIP / Exécutif",
    avatarSeed: "alexandre",
    date: "Il y a 3 semaines"
  },
  {
    id: "test-2",
    name: "Nathalie Morel-Dubois",
    role: "Directrice des Ressources Humaines (DRH)",
    company: "Secteur Retail & Luxe",
    category: "cadres",
    resultMetric: "4 entretiens ciblés obtenus",
    timeframe: "En moins d'un mois",
    content: "En tant que DRH, je vois passer des centaines de CV par mois : je sais exactement ce qui fonctionne et ce qui rebute. Le travail de Sergio sur mon propre profil m'a bluffée. Aucune formule toute faite, mais une vraie extraction de ma valeur ajoutée stratégique. Ses conseils sur l'algorithme LinkedIn sont redoutables de précision.",
    packageChosen: "Pack Expert Statutaire",
    avatarSeed: "nathalie",
    date: "Il y a 1 mois"
  },
  {
    id: "test-3",
    name: "Marc-Aurèle K.",
    role: "Lead Data Engineer & Architecte Cloud",
    company: "Scale-up FinTech",
    category: "confirmes",
    resultMetric: "Contacté par 5 recruteurs",
    timeframe: "Dès les 10 premiers jours",
    content: "Mon CV était trop technique et ne mettait pas en valeur l'impact business de mes architectures. Le Pack Expert d'AI-Xpertise a complètement repositionné mon discours. Sergio est réactif, à l'écoute et disponible sur WhatsApp pour ajuster le moindre détail. C'est le meilleur investissement de ma carrière cette année.",
    packageChosen: "Pack Expert Confirmé",
    avatarSeed: "marc",
    date: "Il y a 2 semaines"
  },
  {
    id: "test-4",
    name: "Sarah Benali",
    role: "Consultante Senior en Stratégie Digitale",
    company: "Cabinet de Conseil Parisien",
    category: "confirmes",
    resultMetric: "+35% de visibilité de profil",
    timeframe: "2 offres fermes décrochées",
    content: "La transition entre mon ancien cabinet et mon nouveau poste s'est faite avec une sérénité totale grâce au travail de Sergio. Il sait exactement quels mots-clés accrochent le regard des associés et comment structurer des accomplissements pour donner envie d'en savoir plus. Un professionnalisme sans faille.",
    packageChosen: "Pack Expert Confirmé",
    avatarSeed: "sarah",
    date: "Il y a 1 mois"
  },
  {
    id: "test-5",
    name: "Tidiane Ouedraogo",
    role: "Junior Financial Analyst",
    company: "Diplômé Master Audit & Finance (En transition)",
    category: "etudiants",
    resultMetric: "Premier CDI en France signé",
    timeframe: "Après 6 mois de blocage",
    content: "Arrivé d'Afrique pour mes études en France, j'envoyais des dizaines de CV sans jamais avoir de réponse positive. Avec le Pack Expert à 75€, Sergio a rendu mon CV percutant et a transformé mon LinkedIn. J'ai enfin passé de vrais entretiens et j'ai décroché mon premier CDI à La Défense ! Merci infiniment pour votre humanité et votre accessibilité.",
    packageChosen: "Pack Expert Étudiant",
    avatarSeed: "tidiane",
    date: "Il y a 3 semaines"
  },
  {
    id: "test-6",
    name: "Guillaume Faure",
    role: "Head of Sales B2B & Business Development",
    company: "SaaS Enterprise",
    category: "cadres",
    resultMetric: "Chassé directement en direct",
    timeframe: "Pas un seul CV envoyé",
    content: "L'inversion de la démarche fonctionne réellement : je ne voulais plus postuler sur des plateformes froides. Après l'optimisation de Sergio et la mise en place de la stratégie de Personal Branding, les opportunités sont venues d'elles-mêmes sur ma messagerie. Recommandé les yeux fermés à tous les managers exigeants.",
    packageChosen: "Pack VIP / Exécutif",
    avatarSeed: "guillaume",
    date: "Il y a 1 mois"
  }
];

export const FOUNDER_STORY = {
  name: "Sergio",
  role: "Fondateur de AI-Xpertise",
  headline: "Top 3 créateurs LinkedIn en France (Job Search Coaching — Favikon)",
  quote: "Mon obsession : faire en sorte que votre talent ne reste plus jamais ignoré à cause d'un CV mal formaté ou d'un profil LinkedIn invisible.",
  bioParagraphs: [
    "Classé dans le Top 3 des créateurs LinkedIn en France dans la catégorie Job Search Coaching par le baromètre d'autorité Favikon, Sergio est le stratège de référence des professionnels ambitieux.",
    "Après avoir analysé des milliers de candidatures et accompagné plus de 1 000 profils — des jeunes diplômés internationaux jusqu'aux directeurs exécutifs du CAC 40 —, il a développé une méthodologie propriétaire alliant psychologie du recruteur, copywriting d'influence et calibrage algorithmique de pointe.",
    "Chez AI-Xpertise, aucun texte n'est confié aveuglément à des générateurs superficiels. Chaque mot est pesé, chaque accomplissement est sculpté pour vous conférer une autorité statutaire indiscutable et vous positionner au sommet de votre marché."
  ],
  credentials: [
    { label: "Classement Favikon", value: "Top 3 France", detail: "Catégorie Job Search Coaching" },
    { label: "Professionnels formés", value: "1 000+", detail: "France, Suisse, Belgique & International" },
    { label: "Taux de satisfaction", value: "99.2%", detail: "Évaluations vérifiées" },
    { label: "Accompagnement", value: "Direct & Humain", detail: "Suivi réactif sur WhatsApp & écrit" },
  ]
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'livrables' | 'paiement';
}

export const COACHING_FAQ: FaqItem[] = [
  {
    id: "faq-delais",
    category: "general",
    question: "Quels sont les délais de livraison pour la refonte de mon CV et de mon profil LinkedIn ?",
    answer: "Le premier jet complet vous est livré sous 48h à 72h ouvrées après réception de vos éléments actuels (ancien CV, lien LinkedIn ou notes d'expérience). Pour les formules VIP / Exécutif à 500 € comprenant la préparation intensive aux entretiens, le planning des sessions en visio est fixé sur-mesure selon vos disponibilités."
  },
  {
    id: "faq-ats",
    category: "livrables",
    question: "Comment garantissez-vous la compatibilité ATS (Applicant Tracking Systems) de mon CV ?",
    answer: "Votre CV est structuré selon les normes internationales de filtrage ATS : typographie standardisée, hiérarchie claire des titres, balisage précis des dates et compétences clés, sans tableaux ni blocs invisibles qui bloquent les algorithmes de recrutement. Vous recevez à la fois le fichier Word épuré pour postuler en ligne et un lien Canva haute définition modifiable à vie pour vos envois réseau et entretiens directs."
  },
  {
    id: "faq-retouches",
    category: "livrables",
    question: "Puis-je demander des ajustements après la réception de mon premier jet ?",
    answer: "Oui, sans aucune hésitation ! Toutes nos formules (dès le Pack Essentiel à 25 €) incluent systématiquement 1 cycle complet de retouche. Vous relisez à tête reposée, formulez vos remarques par écrit ou directement sur WhatsApp, et Sergio peaufine chaque phrase jusqu'à votre entière satisfaction."
  },
  {
    id: "faq-modalites",
    category: "paiement",
    question: "Quels sont les moyens de paiement acceptés et comment se passe le règlement ?",
    answer: "Nous acceptons la Carte Bancaire en ligne sécurisée, PayPal, Wero, les virements bancaires (SEPA), ainsi que MoneyGram et Ria pour nos candidats résidant à l'international ou dans des zones à accès bancaire restreint. Dès que vous confirmez votre formule sur WhatsApp ou par formulaire, Sergio vous transmet les coordonnées de règlement pour lancer immédiatement votre dossier."
  },
  {
    id: "faq-whatsapp",
    category: "general",
    question: "Pourquoi l'accompagnement se déroule-t-il principalement sur WhatsApp ?",
    answer: "Parce que votre temps est précieux ! Exit les formulaires froids et les délais de réponse par email de 5 jours. Sur WhatsApp, vous échangez directement avec Sergio : vous pouvez envoyer des notes vocales, poser des questions rapides avant un entretien, et suivre l'avancée de votre refonte en temps réel avec un contact humain et bienveillant."
  },
  {
    id: "faq-prix-adaptes",
    category: "general",
    question: "Pourquoi vos tarifs sont-ils segmentés par niveau d'expérience (25 €, 50 €, 125 €+) ?",
    answer: "Chez AI-Xpertise, nous croyons fermement à l'égalité d'accès aux opportunités. Un étudiant, un demandeur d'emploi ou un candidat en Afrique n'a pas les mêmes capacités financières ni les mêmes complexités de gouvernance qu'un membre de comité de direction. Nos 3 blocs assurent une tarification solidaire et adaptée, tout en garantissant un niveau d'exigence maximal quel que soit le pack choisi."
  },
  {
    id: "faq-confidentialite",
    category: "general",
    question: "Mon entreprise actuelle peut-elle voir que je remanie mon profil LinkedIn ?",
    answer: "Absolument pas. Avant d'appliquer les optimisations sur votre profil LinkedIn, nous vous donnons la manipulation exacte en un clic pour désactiver les notifications de mise à jour au réseau. Votre démarche demeure 100% confidentielle et invisible pour votre employeur actuel."
  },
  {
    id: "faq-diff-ia",
    category: "general",
    question: "En quoi la refonte d'AI-Xpertise surpasse-t-elle un simple texte généré par ChatGPT ?",
    answer: "Les recruteurs repèrent les tournures artificielles et les superlatifs vides générés par les IA standards en moins de 5 secondes. Avec AI-Xpertise, vous bénéficiez de l'expertise de Sergio (Top 3 des créateurs LinkedIn en France par Favikon) : nous combinons la puissance d'analyse de l'IA avec une véritable plume statutaire humaine, axée sur vos métriques d'impact réelles et votre psychologie de persuasion."
  }
];

