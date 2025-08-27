import { categories } from "./categorie";

export const courses: Course[] = [
    {
        id: 1,
        img: "/img/pexels-vojtech-okenka-127162-392018.jpg",
        title: "Informatique Générale",
        description: "Découvrez les fondamentaux de l'informatique : matériel, logiciels, systèmes d'exploitation, et plus encore.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[6],
        sommaire: [
            "Introduction à l'informatique",
            "Les composants d'un ordinateur",
            "Les logiciels et systèmes d'exploitation",
            "Les bases de la sécurité informatique",
            "Internet et les réseaux"
        ],
        ceQueVousApprendrez: [
            "Maîtriser les concepts de base de l'informatique.",
            "Comprendre le fonctionnement d'un ordinateur.",
            "Utiliser les systèmes d'exploitation courants.",
            "Adopter les bonnes pratiques de sécurité en ligne."
        ],
        prerequis: ["Aucun"],
        publicCible: "Débutants complets, étudiants et curieux du numérique."
    },
    {
        id: 2,
        img: "/img/engineer-4904884_1280.jpg",
        title: "Développement Web Full Stack",
        description: "Maîtrisez la création de sites et d'applications web modernes, du front-end au back-end, avec les technologies actuelles.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[0],
        sommaire: [
            "HTML, CSS et JavaScript : les bases",
            "Développement Front-End avec un framework (ex: React)",
            "Développement Back-End avec Node.js",
            "Gestion des bases de données",
            "Déploiement et mise en production"
        ],
        ceQueVousApprendrez: [
            "Construire des interfaces utilisateur dynamiques.",
            "Créer des API robustes pour les applications web.",
            "Gérer et manipuler des bases de données.",
            "Déployer des applications sur un serveur."
        ],
        prerequis: ["Notions de base en programmation"],
        publicCible: "Développeurs débutants et étudiants souhaitant devenir Full Stack."
    },
    {
        id: 3,
        img: "/img/engineer-2558705_1280.jpg",
        title: "Réseaux Informatiques",
        description: "Comprenez les bases du réseau : protocoles, topologies, équipements, sécurité et interconnexion des appareils.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[4],
        sommaire: [
            "Les fondations des réseaux",
            "Protocoles et modèles (TCP/IP, OSI)",
            "Les équipements réseau",
            "Adressage IP et sous-réseaux",
            "Sécurité et dépannage réseau"
        ],
        ceQueVousApprendrez: [
            "Maîtriser les concepts clés des réseaux informatiques.",
            "Configurer des routeurs et des commutateurs.",
            "Résoudre les problèmes de connectivité.",
            "Comprendre les bases de la sécurité réseau."
        ],
        prerequis: ["Notions d'informatique générale"],
        publicCible: "Étudiants en IT, techniciens de support et administrateurs débutants."
    },
    {
        id: 4,
        img: "/img/ai-generated-8180209_1280.jpg",
        title: "Développement de Jeux 2D & 3D",
        description: "Créez vos propres jeux vidéo avec Godot, Blender et d'autres outils puissants, de l’idée à la réalisation.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[0],
        sommaire: [
            "Introduction aux moteurs de jeux (Godot)",
            "Création de jeux 2D : graphisme et logique",
            "Modélisation et animation 3D avec Blender",
            "Programmation de la physique et des interactions",
            "Publication de votre jeu"
        ],
        ceQueVousApprendrez: [
            "Concevoir et développer des jeux vidéo de A à Z.",
            "Utiliser des logiciels de modélisation 3D (Blender).",
            "Programmer les mécaniques de jeu (mouvements, collisions).",
            "Publier vos jeux sur les plateformes cibles."
        ],
        prerequis: ["Notions de base en programmation"],
        publicCible: "Passionnés de jeux vidéo et développeurs créatifs."
    },
    {
        id: 5,
        img: "/img/adminprojet.jpg",
        title: "Administration Système Linux",
        description: "Apprenez à utiliser Linux : commandes de base, gestion du système, et configuration d’un environnement de travail efficace.",
        createdAt: "07/08/2025",
        duree: "1",
        categorie: categories[2],
        sommaire: [
            "Présentation de Linux et des distributions",
            "Maîtrise de la ligne de commande (Bash)",
            "Gestion des utilisateurs et des permissions",
            "Installation et mise à jour des logiciels",
            "Automatisation des tâches avec des scripts"
        ],
        ceQueVousApprendrez: [
            "Naviguer et gérer un système Linux par la commande.",
            "Administrer des utilisateurs et des droits d'accès.",
            "Installer des logiciels et maintenir le système.",
            "Automatiser des tâches répétitives."
        ],
        prerequis: ["Connaissances informatiques de base"],
        publicCible: "Étudiants en informatique et futurs administrateurs système."
    },
    {
        id: 6,
        img: "/img/2023060901340234993.webp",
        title: "IA, Machine Learning & Deep Learning",
        description: "Initiez-vous à l’intelligence artificielle avec Python : réseaux de neurones, apprentissage automatique et mini chatbots.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[5],
        sommaire: [
            "Introduction à l'IA et au Machine Learning",
            "Apprentissage supervisé et non supervisé",
            "Les bases du Deep Learning et des réseaux de neurones",
            "Création de modèles avec Python (TensorFlow, scikit-learn)",
            "Développement d'un mini chatbot"
        ],
        ceQueVousApprendrez: [
            "Comprendre les concepts de l'intelligence artificielle.",
            "Créer vos premiers modèles de Machine Learning.",
            "Manipuler des réseaux de neurones simples.",
            "Développer des applications d'IA pratiques avec Python."
        ],
        prerequis: ["Bonnes bases en Python et en mathématiques"],
        publicCible: "Développeurs, data scientists débutants et étudiants."
    },
    {
        id: 7,
        img: "/img/mobile-1513945_1280.jpg",
        title: "Développement Mobile Cross-Platform",
        description: "Créez des applications mobiles Android et iOS avec des frameworks multiplateformes performants.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[0],
        sommaire: [
            "Introduction au développement cross-platform",
            "Les bases d'un framework (ex: Flutter)",
            "Conception d'interfaces utilisateur (UI)",
            "Gestion des données et des API",
            "Déploiement sur iOS et Android"
        ],
        ceQueVousApprendrez: [
            "Développer une seule application pour plusieurs systèmes d'exploitation.",
            "Utiliser des frameworks modernes (comme Flutter ou React Native).",
            "Gérer les interactions avec les APIs et les bases de données.",
            "Publier vos applications sur les stores."
        ],
        prerequis: ["Notions de programmation et de logique"],
        publicCible: "Développeurs souhaitant créer des applications multiplateformes."
    },
    {
        id: 8,
        img: "/img/server-2891812_1280.jpg",
        title: "Bases de Données",
        description: "Apprenez à gérer des bases de données relationnelles avec SQL, modélisation et requêtes efficaces.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[1],
        sommaire: [
            "Concepts fondamentaux des bases de données",
            "Le langage SQL (SELECT, INSERT, UPDATE, DELETE)",
            "Modélisation de données (Merise, UML)",
            "Normalisation et intégrité des données",
            "Introduction aux bases de données NoSQL"
        ],
        ceQueVousApprendrez: [
            "Concevoir une base de données relationnelle.",
            "Écrire des requêtes SQL complexes.",
            "Assurer la cohérence et l'intégrité de vos données.",
            "Comprendre la différence entre SQL et NoSQL."
        ],
        prerequis: ["Connaissances de base en informatique"],
        publicCible: "Développeurs, administrateurs et analystes de données."
    },
    {
        id: 9,
        img: "/img/Command_line.png",
        title: "Scripting & Automatisation",
        description: "Automatisez vos tâches avec des scripts Bash sous Linux et PowerShell sous Windows.",
        createdAt: "07/08/2025",
        duree: "1",
        categorie: categories[2],
        sommaire: [
            "Introduction au scripting",
            "Les bases de la programmation Bash",
            "Les bases de PowerShell",
            "Automatisation de tâches système",
            "Déploiement et exécution de scripts"
        ],
        ceQueVousApprendrez: [
            "Écrire des scripts pour automatiser des tâches.",
            "Utiliser la ligne de commande avec efficacité.",
            "Gérer les fichiers, les dossiers et les processus.",
            "Créer des scripts de déploiement simples."
        ],
        prerequis: ["Bonne maîtrise des systèmes d'exploitation Windows et/ou Linux."],
        publicCible: "Administrateurs système, développeurs DevOps et techniciens."
    },
    {
        id: 10,
        img: "/img/breniac01.webp",
        title: "Programmation, Logique & Algorithmie",
        description: "Apprenez les bases de la programmation et développez votre logique algorithmique.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[0],
        sommaire: [
            "Les concepts fondamentaux de la programmation",
            "Logique et structures de contrôle",
            "Création d'algorithmes simples",
            "Introduction à un langage de programmation",
            "Résolution de problèmes complexes"
        ],
        ceQueVousApprendrez: [
            "Comprendre la logique derrière le code.",
            "Développer des algorithmes pour résoudre des problèmes.",
            "Maîtriser les structures de contrôle (boucles, conditions).",
            "Écrire du code propre et bien structuré."
        ],
        prerequis: ["Aucun"],
        publicCible: "Débutants complets et ceux qui veulent apprendre à programmer."
    },
    {
        id: 11,
        img: "/img/pexels-mati-5952738.jpg",
        title: "Cybersécurité",
        description: "Apprenez à sécuriser les systèmes informatiques : cryptographie, analyse des vulnérabilités, bonnes pratiques.",
        createdAt: "07/08/2025",
        duree: "6",
        categorie: categories[6],
        nonDisponible: true,
        sommaire: [
            "Introduction à la sécurité informatique",
            "Les menaces et les vulnérabilités",
            "Cryptographie et chiffrement",
            "Sécurisation des réseaux et des systèmes",
            "Analyse des risques et des incidents"
        ],
        ceQueVousApprendrez: [
            "Identifier les menaces de cybersécurité.",
            "Mettre en place des mesures de protection efficaces.",
            "Comprendre les principes du chiffrement.",
            "Adopter une posture de sécurité proactive."
        ],
        prerequis: ["Connaissances avancées en réseaux et systèmes"],
        publicCible: "Professionnels de l'IT, développeurs et administrateurs."
    },
    {
        id: 12,
        img: "/img/businesswoman-using-tablet-analysis.jpg",
        title: "Data Science",
        description: "Initiez-vous à l’analyse de données, la visualisation, les statistiques et le traitement des données avec Python.",
        createdAt: "07/08/2025",
        duree: "6",
        categorie: categories[6],
        nonDisponible: true,
        sommaire: [
            "Introduction à la Data Science",
            "Collecte et nettoyage de données",
            "Analyse statistique et visualisation",
            "Utilisation des librairies Python (Pandas, NumPy)",
            "Introduction au Machine Learning"
        ],
        ceQueVousApprendrez: [
            "Analyser de grands volumes de données.",
            "Créer des visualisations de données parlantes.",
            "Utiliser des outils d'analyse statistique.",
            "Manipuler des données avec Python."
        ],
        prerequis: ["Bonnes bases en Python et en mathématiques"],
        publicCible: "Analystes, étudiants et professionnels curieux de la donnée."
    },
]