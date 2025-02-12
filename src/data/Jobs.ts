/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
    conclusion?: string;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Analista Tributario",
        startDate: "2023-12-10",
        company: "Mediken S.A",
        location: "",
        description: "",
        goals: [
            "Declaraciones y anexos que se presentan al Servicio de Rentas Internas.",
            "Mantener al día el cumplimiento de las obligaciones entes de gobierno.",
            "Supervisar que los asistentes contables hayan revisado y registrado correctamente los comprobantes de ventas recibidos.",
            "Registro, control y depreciación de Activos Fijos.",
        ],
        conclusion: "Logramos, en conjunto con el departamento de TI, reducir el tiempo y el margen de error que existía en la presentación de declaraciones de compras y ATS.",
        currentJob: true,
    },
    {
        title: "Asistente contable",
        startDate: "2023-03-01",
        endDate: "2023-11-10",
        company: "Mediken S.A",
        location: "",
        description: "",
        goals: [
            "Recepción y revisión de facturas y documentos ingresados por el área de proveedores.",
            "Registro de facturas de gastos administrativos, emisión de retenciones.",
            "Elaboración de reporte para programación de pago a proveedores.",
            "Conciliaciones bancarias y liquidaciones de Tc.",
        ],
        conclusion: "Se logró agilitar el proceso de revisión de facturas mediante la recepción de documentos digitales en reemplazo de los papeles impresos",
        currentJob: false,
    },
    {
        title: "Asistente de Pagaduría",
        startDate: "2021-06-01",
        endDate: "2023-03-10",
        company: "Mediken S.A",
        location: "",
        description: "",
        goals: [
            "Recepción de factura de proveedores, revisión de documentos de soportes y liquidación de consumos de afiliados.",
            "Emitir retenciones a facturas de proveedores médicos.",
            "Controlar el consumo máximo por cobertura de los afiliados.",
        ],
        currentJob: false,
    },
];
export default workExperience;