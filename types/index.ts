export interface IndustrialItem {
  id: number;
  name: string;
  category: "Bandas PVC / PU" | "Bandas de Caucho" | "Bandas Modulares" | "Rodillos y Accesorios" | "Servicios en Planta";
  industry: string;
  status: "Disponible en Stock" | "Fabricación a Medida" | "Servicio 24/7";
  thickness: string;
  tempRange: string;
  spliceType: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  clientSector: string;
  location: string;
  solution: string;
  resultMetric: string;
}
