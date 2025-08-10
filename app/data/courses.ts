import { categories } from "./categorie";

export const courses: Course[] = [
    {
        id: 1,
        img: "/img/pexels-vojtech-okenka-127162-392018.jpg",
        title: "Informatique Générale",
        description: "Découvrez les fondamentaux de l'informatique : matériel, logiciels, systèmes d'exploitation, et plus encore.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[6]
    },
    {
        id: 2,
        img: "/img/engineer-4904884_1280.jpg",
        title: "Développement Web Full Stack",
        description: "Maîtrisez la création de sites et d'applications web modernes, du front-end au back-end, avec les technologies actuelles.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[0]
    },
    {
        id: 3,
        img: "/img/engineer-2558705_1280.jpg",
        title: "Réseaux Informatiques",
        description: "Comprenez les bases du réseau : protocoles, topologies, équipements, sécurité et interconnexion des appareils.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[4]
    },
    {
        id: 4,
        img: "/img/ai-generated-8180209_1280.jpg",
        title: "Développement de Jeux 2D & 3D",
        description: "Créez vos propres jeux vidéo avec Godot, Blender et d'autres outils puissants, de l’idée à la réalisation.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[0]
    },
    {
        id: 5,
        img: "/img/adminprojet.jpg",
        title: "Administration Système Linux",
        description: "Apprenez à utiliser Linux : commandes de base, gestion du système, et configuration d’un environnement de travail efficace.",
        createdAt: "07/08/2025",
        duree: "1",
        categorie: categories[2]
    },
    {
        id: 6,
        img: "/img/2023060901340234993.webp",
        title: "IA, Machine Learning & Deep Learning",
        description: "Initiez-vous à l’intelligence artificielle avec Python : réseaux de neurones, apprentissage automatique et mini chatbots.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[5]
    },
    {
        id: 7,
        img: "/img/mobile-1513945_1280.jpg",
        title: "Développement Mobile Cross-Platforme",
        description: "Créez des applications mobiles Android et iOS avec des frameworks multiplateformes performants.",
        createdAt: "07/08/2025",
        duree: "3",
        categorie: categories[0]
    },
    {
        id: 8,
        img: "/img/server-2891812_1280.jpg",
        title: " Bases de Données",
        description: "Apprenez à gérer des bases de données relationnelles avec SQL, modélisation et requêtes efficaces.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[1]
    },
    {
        id: 9,
        img: "/img/Command_line.png",
        title: "Scripting & Automatisation",
        description: "Automatisez vos tâches avec des scripts Bash sous Linux et PowerShell sous Windows.",
        createdAt: "07/08/2025",
        duree: "1",
        categorie: categories[2]
    },
    {
        id: 10,
        img: "/img/breniac01.webp",
        title: "Programmation, Logique & Algorithmie",
        description: "Apprenez les bases de la programmation et développez votre logique algorithmique.",
        createdAt: "07/08/2025",
        duree: "2",
        categorie: categories[0]
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
    },
]
