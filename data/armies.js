export let armies = [
    {
        id: 1,
        image: "/assets/img/cadiens.jpg",
        gallery: ["/assets/img/gallery/cadiens/karskin.jpg", "/assets/img/gallery/cadiens/minis.jpg", "/assets/img/gallery/cadiens/sm2.avif"],
        points: 500,
        name: "Cadiens",
        faction: "Imperium",
        edition: "2018",
        univers: "Warhammer 40K",
        link: "https://www.warhammer.com/fr-FR/40K-Imperium-AstraMilitarum-FP",
        description: "Armée de la Garde Impériale, les Cadiens sont des soldats d'élite de l'Imperium, connus pour leur discipline et leur bravoure face aux forces du Chaos.",
        armyDetails: "5x Cadiens, 1x Commandant de la Garde, 1x Leman Russ",
        dateRegistered: "05/06/2025",
        keywords: ["Garde Impériale", "Cadiens", "Astra Militarum"]
    }, 
    {
        id: 2,
        image: "/assets/img/necrons.webp",
        gallery: ["/assets/img/gallery/necrons/royal_warden.jpg", "/assets/img/gallery/necrons/immortals.webp", "/assets/img/gallery/necrons/overlord.jpg"],
        points: 1.500,
        name: "Dynastie Szarekh",
        faction: "Nécrons",
        edition: "2024",
        univers: "Warhammer 40K",
        link: "https://www.warhammer.com/fr-FR/shop/warhammer-40000/armes-xenos/ncrons",
        description: "Les Nécrons sont des machines immortelles, anciennes et implacables, éveillées pour reconquérir la galaxie qu'ils dominaient jadis.",
        armyDetails: "3x Immortels, 1x Overlord, 1x Royal Warden",
        dateRegistered: "04/06/2025",
        keywords: ["Nécrons", "Dynastie Szarekh", "Xenos"]
    },
    {
        id: 3,
        image: "/assets/img/ossiarch.jpg",
        gallery: ["/assets/img/gallery/ossiarch/immortis_guard.jpg", "/assets/img/gallery/ossiarch/liege_kavalos.jpg", "/assets/img/gallery/ossiarch/mortek_crawler.jpg"],
        points: 2.500,
        name: "Armée squelette",
        faction: "Ossiarch Bonereapers",
        edition: "2017",
        univers: "Age of Sigmar",
        link: "https://www.warhammer.com/fr-FR/AoS-Death-OssiarchBonereapers-FP",
        description: "Les Ossiarch Bonereapers sont une armée de squelettes immortels, créés par le dieu Nagash pour servir ses desseins dans l'Âge de Sigmar.",
        armyDetails: "5x Immortis Guard, 1x Liege-Kavalos, 1x Mortek Crawler",
        dateRegistered: "03/06/2025",
        keywords: ["Ossiarch Bonereapers", "Armée squelette", "Nagash"]
    },
    {
        id: 4,
        image: "/assets/img/custodes.jpg",
        gallery: ["/assets/img/gallery/custodes/wardens.jpg", "/assets/img/gallery/custodes/valoris.webp", "/assets/img/gallery/custodes/akmon.jpg"],
        points: 2.000,
        name: "Custodes",
        faction: "Imperium",
        edition: "2024",
        univers: "Warhammer 40k",
        link: "https://www.warhammer.com/fr-FR/40K-Imperium-AdeptusCustodes-FP",
        description: "Les Custodes sont les gardiens d'élite de l'Empereur de l'Humanité, formés pour être les guerriers les plus puissants et les plus loyaux de l'Imperium.",
        armyDetails: "3x Wardens, 1x Valoris, 1x Akmon",
        dateRegistered: "02/06/2025",
        keywords: ["Custodes", "Adeptus Custodes"]
    },
    {
        id: 5,
        image: "/assets/img/orks.jpg",
        gallery: ["/assets/img/gallery/orks/dakka_boyz.webp", "/assets/img/gallery/orks/gretchin.jpg", "/assets/img/gallery/orks/warboss.jpeg"],
        points: 1.000,
        name: "Dakka Boyz",
        faction: "Orks",
        edition: "2019",
        univers: "Warhammer 40k",
        link: "https://www.warhammer.com/fr-FR/40K-Xenos-Orks-FP",
        description: "Les Orks sont des brutes belliqueuses, adorant la guerre, vivant pour le combat et capables de tordre la réalité par leur croyance.",
        armyDetails: "10x Dakka Boyz, 5x Gretchin, 1x Warboss",
        dateRegistered: "01/06/2025",
        keywords: ["Dakka Boyz", "Xenos"]
    },
    {
        id: 6,
        image: "/assets/img/ultramarine.jpg",
        gallery: ["/assets/img/gallery/ultramarine/john_blanche.jpg", "/assets/img/gallery/ultramarine/titus.jpg", "/assets/img/gallery/ultramarine/victrix.webp"],
        points: 3.000,
        name: "Space Marines Ultramarines",
        faction: "Imperium",
        edition: "2024",
        univers: "Warhammer 40k",
        link: "https://www.warhammer.com/fr-FR/warhammer-40000/space-marines/ultramarines",
        description: "Les Ultramarines sont l'un des chapitres les plus célèbres des Space Marines, connus pour leur discipline, leur tactique et leur loyauté envers l'Imperium.",
        armyDetails: "5x Primaris Intercessors, 1x Captain in Phobos Armor, 1x Victrix Guard",
        dateRegistered: "31/05/2025",
        keywords: ["Space Marines", "Ultramarines"]
    },
    {
        id: 7,
        image: "/assets/img/bretonnie.jpg",
        gallery: ["/assets/img/gallery/bretonnie/knights.webp", "/assets/img/gallery/bretonnie/peasant.jpg", "/assets/img/gallery/bretonnie/pegasus_knight.webp"],
        points: 3.000,
        name: "Armée bretonienne",
        faction: "Bretonnie",
        edition: "2017",
        univers: "Age of Sigmar",
        link: "https://www.warhammer.com/fr-FR/AoS-Order-CitiesofSigmar-FP",
        description: "La Bretonnie est une armée de chevaliers et de paysans, inspirée par les légendes arthuriennes, qui défend les royaumes de l'Ordre dans l'Âge de Sigmar.",
        armyDetails: "10x Chevaliers de la Quête, 5x Paysans, 1x Chevalier Pégase",
        dateRegistered: "30/05/2025",
        keywords: ["Bretonnie", "Armée bretonienne", "Ordre"]
    },
    {
        id: 8,
        image: "/assets/img/skaven.jpg",
        gallery: ["/assets/img/gallery/skaven/clan_moulder.jpg", "/assets/img/gallery/skaven/clan_skryre.webp", "/assets/img/gallery/skaven/clan_eshin.jpeg"],
        points: 1.500,
        name: "Clan Moulder",
        faction: "Skaven",
        edition: "2015",
        univers: "Age of Sigmar",
        link: "https://www.warhammer.com/fr-FR/AoS-Chaos-Skaven-FP",
        description: "Les Skavens sont des hommes-rats sournois, innombrables et perfides, vivant dans l’ombre et guidés par leur soif de corruption et de conquête.",
        armyDetails: "10x Guerriers du Clan Moulder, 5x Ratlings, 1x Verminlord",
        dateRegistered: "29/05/2025",
        keywords: ["Skaven", "Clan Moulder", "Chaos"]
    }
]