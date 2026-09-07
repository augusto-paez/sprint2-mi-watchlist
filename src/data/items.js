const items = [
    {
        id: 1,
        nombre: "The Witcher 3: Wild Hunt",
        genero: "RPG",
        plataforma: "PC / Console",
        puntaje: 9.8,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        nombre: "Elden Ring",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 9.6,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        nombre: "Hollow Knight: Silksong",
        genero: "Metroidvania",
        plataforma: "PC / Switch / Console",
        puntaje: 9.7,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        nombre: "Cyberpunk 2077",
        genero: "RPG",
        plataforma: "PC / Console",
        puntaje: 8.7,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        nombre: "Stardew Valley",
        genero: "Simulación",
        plataforma: "PC / Switch / Mobile",
        puntaje: 9.4,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        nombre: "Batman: Arkham Knight",
        genero: "Acción / Aventura",
        plataforma: "PC / Console",
        puntaje: 9.2,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 7,
        nombre: "Red Dead Redemption 2",
        genero: "Acción / Aventura",
        plataforma: "PC / Console",
        puntaje: 9.7,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 8,
        nombre: "Warhammer 40,000: Space Marine 2",
        genero: "Acción / TPS",
        plataforma: "PC / Console",
        puntaje: 9.3,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 9,
        nombre: "Minecraft",
        genero: "Sandbox",
        plataforma: "Multiplataforma",
        puntaje: 9.5,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 10,
        nombre: "God of War Ragnarök",
        genero: "Acción / Aventura",
        plataforma: "PlayStation / PC",
        puntaje: 9.6,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 11,
        nombre: "Terraria",
        genero: "Sandbox / Aventura",
        plataforma: "PC / Mobile / Console",
        puntaje: 9.2,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 12,
        nombre: "Crimson Desert",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 9.3,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 13,
        nombre: "Monster Hunter World",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 9.0,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 14,
        nombre: "Portal 2",
        genero: "Puzzle / Plataformas",
        plataforma: "PC / Console",
        puntaje: 9.8,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 15,
        nombre: "Outer Wilds",
        genero: "Exploración / Misterio",
        plataforma: "PC / Switch / Console",
        puntaje: 9.6,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 16,
        nombre: "Diablo IV",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 8.8,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 17,
        nombre: "Baldur's Gate 3",
        genero: "RPG Táctico",
        plataforma: "PC / Console",
        puntaje: 9.9,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 18,
        nombre: "DOOM: The Dark Ages",
        genero: "FPS",
        plataforma: "PC / Console",
        puntaje: 9.4,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 19,
        nombre: "Disco Elysium",
        genero: "RPG Narrativo",
        plataforma: "PC / Console",
        puntaje: 9.7,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 20,
        nombre: "Grand Theft Auto V",
        genero: "Acción / Mundo Abierto",
        plataforma: "PC / Console",
        puntaje: 9.7,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 21,
        nombre: "Resident Evil 9",
        genero: "Survival Horror",
        plataforma: "PC / Console",
        puntaje: 9.4,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 22,
        nombre: "Forza Horizon 5",
        genero: "Carreras",
        plataforma: "PC / Xbox",
        puntaje: 9.2,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 23,
        nombre: "Cuphead",
        genero: "Run and Gun",
        plataforma: "PC / Switch / Console",
        puntaje: 9.3,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 24,
        nombre: "Sekiro: Shadows Die Twice",
        genero: "Acción / Soulslike",
        plataforma: "PC / Console",
        puntaje: 9.5,
        multijugador: false,
        imagen: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 25,
        nombre: "Helldivers 2",
        genero: "Shooter Cooperativo",
        plataforma: "PC / PlayStation",
        puntaje: 9.0,
        multijugador: true,
        imagen: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=60"
    }
];

export default items;