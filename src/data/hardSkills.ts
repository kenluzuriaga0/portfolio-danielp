interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Excel",
    description: "Fórmulas de texto, búsquedas, filtros y automatización con Macros.",
    icon: "excel"
  },
  {
    name: "Analisis Financiero",
    description: "Interpretar datos financieros, evaluar indicadores y apoyar la toma de decisiones con un enfoque basado en datos.",
    icon: "finances"
  },

];

export default hardSkills;