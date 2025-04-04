export interface Projects {
    title: string;
    description: string;
    images: string[];
    imageWidth?: string;
    imageSx?: React.CSSProperties;
}

export const projects: Projects[] = [
    {
        title: 'Sugar Rush',
        description: "Sugar Rush was one of my first game development projects, and it's one I’d love to revisit someday—ideally as a browser-based game with refined core mechanics. Built in Unity using C#, the game puts players in the shoes of a baker racing against the clock to complete incoming orders. Players use a set of basic cards (like cake, cookie, etc.) and power-ups (such as frosting or flavoring) to fulfill these orders. Completing an order earns in-game money, while missing key ingredients results in a reduced reward. The challenge ramps up as orders become more frequent and randomized. The main objective? Earn as much money as possible before time runs out!",
        images: [
            "/sugar_rush/start.png",
            "/sugar_rush/HowToScreen.png",
            "/sugar_rush/gameplay.png",
        ],
        imageSx: { height: '400px' },
        imageWidth: '700px',
    },
    {
        title: 'Seaside Farm',
        description: "As a longtime Stardew Valley fan, I challenged myself to create my own take on the genre—and that’s how SeaSideFarm was born. Developed in GameMaker using GML (a scripting language similar to JavaScript), SeaSideFarm is a pixel-style farming game where players can grow and sell crops, build relationships, and explore a cozy coastal town. The townspeople are all inspired by my close friends and their personalities, adding a personal touch to the experience. I implemented core systems like day/night cycles, inventory management, and dynamic NPC relationship mechanics to bring the world to life.",
        images: [
            '/seaside_farm/start.png',
            '/seaside_farm/home.png',
            '/seaside_farm/crops.png',
            '/seaside_farm/convo.png',
            '/seaside_farm/store.png',
            '/seaside_farm/chicken.png',
            '/seaside_farm/night.png',
        ],
        imageSx: { height: '300px' },
        imageWidth: '500px',
    },
]
