interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Maestría En Finanzas, Mención Dirección Financiera",
        startDate: "2024-05-15",
        endDate: "2025-05-15",
        school: "Universidad Católica De Santiago De Guayaquil",
        location: "Guayaquil, Ecuador",
        description: "",
        currentUni: true,
    },
    {
        title: "Licenciado en Contabilidad y Auditoría",
        startDate: "2018-11-15",
        endDate: "2023-03-01",
        school: "Universidad Laica Vicente Rocafuerte de Guayaquil",
        location: "Guayaquil, Ecuador",
        description: "",
        currentUni: false,
    },
    {
        title: "Bachiller en Ciencias",
        startDate: "2012-02-15",
        endDate: "2018-09-15",
        school: "Colegio Cristóbal Colón",
        location: "Guayaquil, Ecuador",
        description: "",
        currentUni: false,
    },
    // {
    //     title: "GESTIÓN DE RIESGOS FINANCIEROS Y EMPRESARIALES",
    //     startDate: "2024-06-15",
    //     endDate: "",
    //     school: "EUDE EUROPEAN BUSINESS SCHOOL",
    //     location: "Madrid, España",
    //     description: "",
    //     currentUni: false,
    // },
    // {
    //     title: "Planificación Contable y Tributaria de las Instituciones sin fines de lucro",
    //     startDate: "2024-07-18",
    //     endDate: "",
    //     school: "Tributarios Ecuador – Marlon Yugcha",
    //     location: "Guayaquil, Ecuador",
    //     description: "",
    //     currentUni: false,
    // },
];

export default education;