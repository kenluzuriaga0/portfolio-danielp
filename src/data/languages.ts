interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "Ingles",
        level: "Intermedio",
        description: "I speak fluently and write fluently",
        show: true
    },
    {
        name: "French",
        level: "B1",
        description: "I speak fluently and write fluently",
        show: false
    },
    {
        name: "Italian",
        level: "B2",
        description: "I speak fluently and write fluently",
        show: false
    }
];

export default languages;