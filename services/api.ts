import { IndustrialItem, CaseStudy } from "@/types";

export const INDUSTRIAL_CATALOG: IndustrialItem[] = [
  {
    id: 1,
    name: "Banda Sanitaria en PVC Blanca / Verde (2 y 3 Lonas)",
    category: "Bandas PVC / PU",
    industry: "Alimentos y Farmacéutica",
    status: "Disponible en Stock",
    thickness: "2.0 mm a 4.5 mm",
    tempRange: "-10 °C a +80 °C",
    spliceType: "Vulcanizado en caliente (Z) o Grapa inoxidable",
    description: "Banda transportadora con recubrimiento en PVC atóxico y antiestático, resistente a grasas animales, aceites vegetales y agentes de limpieza industrial.",
    features: ["Certificación grado alimenticio FDA", "Trama rígida transversal para estabilidad", "Instalación de perfiles guía y empujadores"],
    icon: "🛡️"
  },
  {
    id: 2,
    name: "Banda de Poliuretano (PU) de Alta Inocuidad",
    category: "Bandas PVC / PU",
    industry: "Alimentos y Farmacéutica",
    status: "Fabricación a Medida",
    thickness: "1.2 mm a 2.5 mm",
    tempRange: "-20 °C a +90 °C",
    spliceType: "Termofusión sin fin en sitio",
    description: "Diseñada para contacto directo con alimentos sin empaque (panadería, cárnicos, lácteos y confitería). Alta flexibilidad para trabajar en rodillos de diámetro reducido.",
    features: ["Máxima resistencia a cortes y abrasión", "Superficie lisa o grabada antiadherente", "Fácil higienización y desinfección"],
    icon: "✨"
  },
  {
    id: 3,
    name: "Banda de Caucho con Lona EP-400 / EP-500 Trabajo Pesado",
    category: "Bandas de Caucho",
    industry: "Canteras y Minería",
    status: "Disponible en Stock",
    thickness: "8.0 mm a 14.0 mm (3 y 4 lonas)",
    tempRange: "-25 °C a +110 °C",
    spliceType: "Vulcanizado en caliente / Frío o Grapa Alligator",
    description: "Banda de caucho negro de alta resistencia al impacto, abrasión severa e intemperie. Ideal para trituradoras, cementeras, ladrilleras y manejo de graneles pesados.",
    features: ["Carcasa textil de poliéster-nylon (EP)", "Bordes moldeados contra humedad", "Disponible en versión lisa o nervada (Chevron)"],
    icon: "⚙️"
  },
  {
    id: 4,
    name: "Banda Modular Plástica en Polipropileno / Acetal",
    category: "Bandas Modulares",
    industry: "Embotelladoras y Logística",
    status: "Fabricación a Medida",
    thickness: "Paso 1/2 pulg, 1 pulg y 2 pulg",
    tempRange: "-40 °C a +105 °C",
    spliceType: "Pasador plástico articulado con piñones de tracción",
    description: "Sistema de eslabones plásticos ensamblados para líneas de lavado, túneles de enfriamiento, pasteurizado y transporte curvo o recto sin deslizamiento.",
    features: ["Reparación rápida cambiando solo módulos dañados", "Superficie abierta (drenaje) o cerrada", "Tracción positiva mediante sprockets"],
    icon: "🔗"
  },
  {
    id: 5,
    name: "Rodillos de Carga, Impacto y Tambores Motrices",
    category: "Rodillos y Accesorios",
    industry: "Logística y Centros de Distribución",
    status: "Fabricación a Medida",
    thickness: "Diámetros desde 2 pulg hasta 6 pulg",
    tempRange: "Ambiente industrial pesado",
    spliceType: "Montaje en eje con rodamientos sellados",
    description: "Fabricación de rodillos metálicos en acero al carbono, galvanizados e inoxidables, además de tambores motrices con recubrimiento cerámico o en caucho ranurado.",
    features: ["Rodamientos protegidos contra polvo y agua", "Anillos amortiguadores para zonas de impacto", "Balanceo dinámico garantizado"],
    icon: "🔩"
  },
  {
    id: 6,
    name: "Grapas Mecánicas y Empalmes Metálicos de Emergencia",
    category: "Rodillos y Accesorios",
    industry: "Todas las Industrias",
    status: "Disponible en Stock",
    thickness: "Para bandas de 1.5 mm a 15 mm",
    tempRange: "Hasta +150 °C",
    spliceType: "Instalación mecánica rápida con pasador de acero",
    description: "Suministro e instalación de grapas metálicas en acero galvanizado e inoxidable (tipo Clipper, Alligator y bisagra) para reparaciones inmediatas en planta.",
    features: ["Reduce el tiempo de parada de línea al mínimo", "Pasadores recubiertos en nylon o acero", "Ideal para tener como repuesto en bodega"],
    icon: "🛠️"
  },
  {
    id: 7,
    name: "Servicio de Vulcanizado en Caliente y en Frío en Planta 24/7",
    category: "Servicios en Planta",
    industry: "Todas las Industrias",
    status: "Servicio 24/7",
    thickness: "Prensas para anchos desde 300 mm hasta 2000 mm",
    tempRange: "Prensado térmico controlado",
    spliceType: "Empalme continuo de alta resistencia mecánica",
    description: "Cuadrilla técnica móvil desplazada directamente a tu fábrica para realizar empalmes vulcanizados en caliente con prensa térmica o vulcanizado químico en frío.",
    features: ["Atención de emergencias por rotura de banda 24/7", "Garantía de alineación y tensión en línea", "Cobertura en Sabana de Bogotá y nivel nacional"],
    icon: "🔥"
  },
  {
    id: 8,
    name: "Mantenimiento Preventivo, Alineación y Engomado de Poleas",
    category: "Servicios en Planta",
    industry: "Logística y Manufactura",
    status: "Servicio 24/7",
    thickness: "Recubrimiento en caucho liso o diamantado (6 mm - 12 mm)",
    tempRange: "Operación continua",
    spliceType: "Vulcanizado de recubrimiento sobre tambor",
    description: "Diagnóstico integral de transportadores: corrección de desalineación de bandas, cambio de rodamientos, ajuste de raspadores, tensado y recubrimiento de tambores.",
    features: ["Previene paradas inesperadas de producción", "Aumenta la tracción del tambor motriz", "Informe técnico fotográfico para auditorías"],
    icon: "🔧"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Empalme de Emergencia en Línea de Panificación Industrial",
    clientSector: "Planta de Alimentos (Mosquera, Cundinamarca)",
    location: "Sabana de Bogotá",
    solution: "Sustitución y termofusión en sitio de banda de Poliuretano (PU) de 1200 mm de ancho en turno nocturno.",
    resultMetric: "Línea reactivada en 3.5 horas con certificación sanitaria"
  },
  {
    id: 2,
    title: "Modernización de Transportador de Cajas en Centro Logístico",
    clientSector: "Operador Logístico Nacional (Funza, Cundinamarca)",
    location: "Parque Industrial San Carlos",
    solution: "Instalación de banda PVC con perfil rugoso (Grip) para subida inclinada a 28° y cambio de 45 rodillos de carga.",
    resultMetric: "+35% en velocidad de despacho y cero deslizamiento"
  },
  {
    id: 3,
    title: "Vulcanizado de Banda EP-400 y Recubrimiento de Tambor Motriz",
    clientSector: "Planta de Agregados y Trituración (Tocancipá)",
    location: "Norte de la Sabana",
    solution: "Empalme vulcanizado de 4 lonas y recubrimiento en caucho diamantado de 10 mm para evitar patinaje.",
    resultMetric: "Reducción del 60% en paradas correctivas mensuales"
  }
];

export function getCatalogItems(search = "", category = "", industry = ""): IndustrialItem[] {
  return INDUSTRIAL_CATALOG.filter((item) => {
    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !category || item.category === category;
    const matchesIndustry = !industry || item.industry.toLowerCase().includes(industry.toLowerCase());
    return matchesSearch && matchesCategory && matchesIndustry;
  });
}

export function getCatalogItemById(id: number): IndustrialItem | undefined {
  return INDUSTRIAL_CATALOG.find((item) => item.id === id);
}
