// ==========================================
// TRACE IT - Mock Data
// ==========================================

// Parcelas
export const parcelas = [
  {
    id: "P-001",
    nombre: "Parcela 4.1 - Finca El Olivar",
    ubicacion: "Lantejuela, Sevilla",
    sigpac: "ES01SE000100041",
    superficie: 5.0,
    variedad: "Olivo (Picual)",
    anoPlantacion: 2015,
    lat: 37.3561,
    lng: -5.2147,
    scoreCalidad: 92,
    estado: "activa",
  },
  {
    id: "P-002",
    nombre: "Parcela 4.2 - Los Almendros",
    ubicacion: "Écija, Sevilla",
    sigpac: "ES01SE000200012",
    superficie: 8.2,
    variedad: "Olivo (Hojiblanca)",
    anoPlantacion: 2010,
    lat: 37.5414,
    lng: -5.0827,
    scoreCalidad: 87,
    estado: "activa",
  },
  {
    id: "P-003",
    nombre: "Parcela 4.3 - Cerro Alto",
    ubicacion: "Martos, Jaén",
    sigpac: "ES01JA000300023",
    superficie: 3.5,
    variedad: "Olivo (Arbequina)",
    anoPlantacion: 2018,
    lat: 37.7210,
    lng: -3.9696,
    scoreCalidad: 95,
    estado: "activa",
  },
  {
    id: "P-004",
    nombre: "Parcela 4.4 - Valle del Guadalquivir",
    ubicacion: "Baena, Córdoba",
    sigpac: "ES01CO000400034",
    superficie: 12.0,
    variedad: "Olivo (Picudo)",
    anoPlantacion: 2008,
    lat: 37.6167,
    lng: -4.3167,
    scoreCalidad: 89,
    estado: "activa",
  },
]

// Campañas
export const campanas = [
  { id: "C-2024", nombre: "Campaña 2024", estado: "completada", year: 2024 },
  { id: "C-2025", nombre: "Campaña 2025", estado: "completada", year: 2025 },
  { id: "C-2026", nombre: "Campaña 2026", estado: "en_curso", year: 2026 },
]

// Eventos agrícolas por parcela
export const eventosAgricolas = [
  { id: "E-001", parcelaId: "P-001", tipo: "Siembra", fecha: "2015-03-15", icono: "seedling" },
  { id: "E-002", parcelaId: "P-001", tipo: "Poda", fecha: "2023-01-20", icono: "scissors" },
  { id: "E-003", parcelaId: "P-001", tipo: "Tratamiento Fitosanitario", fecha: "2024-01-15", icono: "shield" },
  { id: "E-004", parcelaId: "P-001", tipo: "Riego", fecha: "2024-03-10", icono: "droplet" },
  { id: "E-005", parcelaId: "P-001", tipo: "Cosecha", fecha: "2024-11-20", icono: "truck" },
  { id: "E-006", parcelaId: "P-001", tipo: "Tratamiento Fitosanitario", fecha: "2025-02-10", icono: "shield" },
  { id: "E-007", parcelaId: "P-001", tipo: "Riego", fecha: "2025-04-05", icono: "droplet" },
  { id: "E-008", parcelaId: "P-001", tipo: "Poda", fecha: "2026-01-10", icono: "scissors" },
  { id: "E-009", parcelaId: "P-001", tipo: "Tratamiento Fitosanitario", fecha: "2026-02-25", icono: "shield" },
]

// Actividades registradas
export const actividades = [
  {
    id: "A-001",
    tipo: "Tratamiento Fitosanitario",
    fecha: "2026-02-25",
    parcelaId: "P-001",
    parcelaNombre: "Parcela 4.1 - Finca El Olivar",
    producto: "Dimetoato 40 EC",
    dosis: 1.5,
    unidad: "L/ha",
    plazoSeguridad: 7,
    notas: "Tratamiento preventivo contra mosca del olivo",
  },
  {
    id: "A-002",
    tipo: "Riego",
    fecha: "2026-02-20",
    parcelaId: "P-002",
    parcelaNombre: "Parcela 4.2 - Los Almendros",
    producto: "Goteo",
    dosis: 50,
    unidad: "m³/ha",
    notas: "Riego de mantenimiento",
  },
  {
    id: "A-003",
    tipo: "Fertilización",
    fecha: "2026-02-15",
    parcelaId: "P-001",
    parcelaNombre: "Parcela 4.1 - Finca El Olivar",
    producto: "Abono Foliar NPK",
    dosis: 3.0,
    unidad: "kg/ha",
    notas: "Fertilización foliar post-poda",
  },
  {
    id: "A-004",
    tipo: "Tratamiento Fitosanitario",
    fecha: "2026-02-10",
    parcelaId: "P-003",
    parcelaNombre: "Parcela 4.3 - Cerro Alto",
    producto: "Cobre Oxicloruro",
    dosis: 2.0,
    unidad: "kg/ha",
    plazoSeguridad: 14,
    notas: "Tratamiento fungicida preventivo",
  },
  {
    id: "A-005",
    tipo: "Poda",
    fecha: "2026-01-20",
    parcelaId: "P-004",
    parcelaNombre: "Parcela 4.4 - Valle del Guadalquivir",
    notas: "Poda de formación y aclareo",
  },
  {
    id: "A-006",
    tipo: "Tratamiento Fitosanitario",
    fecha: "2026-01-15",
    parcelaId: "P-002",
    parcelaNombre: "Parcela 4.2 - Los Almendros",
    producto: "Dimetoato 40 EC",
    dosis: 1.5,
    unidad: "L/ha",
    plazoSeguridad: 7,
  },
]

// NDVI data
export const ndviData = [
  { mes: "Ene", valor: 0.22 },
  { mes: "Feb", valor: 0.25 },
  { mes: "Mar", valor: 0.35 },
  { mes: "Abr", valor: 0.49 },
  { mes: "May", valor: 0.59 },
  { mes: "Jun", valor: 0.64 },
  { mes: "Jul", valor: 0.7 },
  { mes: "Ago", valor: 0.75 },
  { mes: "Sep", valor: 0.78 },
  { mes: "Oct", valor: 0.82 },
  { mes: "Nov", valor: 0.88 },
  { mes: "Dic", valor: 1.3 },
]

// Producción interanual
export const produccionInteranual = [
  { year: "2023", produccion: 4200, label: "4.200 kg" },
  { year: "2024", produccion: 4500, label: "4.500 kg" },
  { year: "2025", produccion: 4800, label: "Proy: 4.800 kg" },
]

// Indicadores de salud parcela
export const saludParcela = [
  { mes: "Ene", ndvi: 0.22 },
  { mes: "Feb", ndvi: 0.25 },
  { mes: "Mar", ndvi: 0.35 },
  { mes: "Abr", ndvi: 0.48 },
  { mes: "May", ndvi: 0.59 },
  { mes: "Jun", ndvi: 0.64 },
  { mes: "Jul", ndvi: 0.72 },
  { mes: "Ago", ndvi: 0.78 },
  { mes: "Sep", ndvi: 0.88 },
  { mes: "Oct", ndvi: 0.95 },
  { mes: "Nov", ndvi: 1.1 },
  { mes: "Dic", ndvi: 1.3 },
]

// Resumen de campañas - formatted in Spanish
export const resumenCampanas = [
  {
    campana: "2024",
    produccion: "4.500 kg",
    rendimientoGraso: "22%",
    beneficioEstimado: "5.400 €",
  },
  {
    campana: "2023",
    produccion: "4.200 kg",
    rendimientoGraso: "21%",
    beneficioEstimado: "4.830 €",
  },
]

// Campaña - Lluvia vs Media
export const lluviaData = [
  { periodo: "Oct-Dic", actual: 250, media: 300 },
  { periodo: "Ene-Mar", actual: 180, media: 250 },
]

// Insumos aplicados
export const insumosAplicados = [
  { producto: "Dimetoato 40 EC", cantidadTotal: "7,5 L" },
  { producto: "Abono Foliar", cantidadTotal: "500 kg" },
  { producto: "Cobre Oxicloruro", cantidadTotal: "12 kg" },
]

// Actividades por tipo (resumen campaña)
export const actividadesPorTipo = [
  { tipo: "Tratamiento Fitosanitario", cantidad: 4 },
  { tipo: "Riego", cantidad: 2 },
  { tipo: "Poda", cantidad: 1 },
  { tipo: "Cosecha", cantidad: 0 },
]

// Lotes
export const lotes = [
  {
    id: "T-2026-001",
    parcelaId: "P-001",
    parcelaNombre: "Parcela 4.1 - Finca El Olivar",
    fechaCosecha: "2026-02-25",
    metodoRecoleccion: "Mecánica",
    volumenEstimado: 4200,
    trazabilidadCompleta: true,
    campana: "2026",
    certificadoId: "53000f06a66a3a5e7b8eb89...",
    eventosVinculados: {
      tratamientos: 4,
      riegos: 2,
      podas: 1,
    },
    insumosClaveResumen: [
      { producto: "Dimetoato 40 EC", cantidadTotal: "7,5 L" },
      { producto: "Abono Foliar", cantidadTotal: "500 kg" },
    ],
  },
  {
    id: "T-2026-002",
    parcelaId: "P-002",
    parcelaNombre: "Parcela 4.2 - Los Almendros",
    fechaCosecha: "2026-02-28",
    metodoRecoleccion: "Manual",
    volumenEstimado: 9000,
    trazabilidadCompleta: true,
    campana: "2026",
    certificadoId: "67a00b12c88d4f6a9c1ef12...",
    eventosVinculados: {
      tratamientos: 3,
      riegos: 4,
      podas: 2,
    },
    insumosClaveResumen: [
      { producto: "Dimetoato 40 EC", cantidadTotal: "12 L" },
      { producto: "Cobre Oxicloruro", cantidadTotal: "8 kg" },
    ],
  },
]

// Dashboard Almazara
export const rankingAgricultores = [
  {
    posicion: 1,
    nombre: "Finca El Olivar",
    score: 9.2,
    volumen: "42 t",
    rendimientoGraso: "22,5%",
    tendencia: "up",
    variacion: "+1,2%",
  },
  {
    posicion: 2,
    nombre: "Hermanos López",
    score: 8.9,
    volumen: "38 t",
    rendimientoGraso: "21,8%",
    tendencia: "stable",
    variacion: "+0,1%",
  },
  {
    posicion: 3,
    nombre: "AgroSevilla",
    score: 8.7,
    volumen: "55 t",
    rendimientoGraso: "21,0%",
    tendencia: "down",
    variacion: "-0,8%",
  },
  {
    posicion: 4,
    nombre: "Olivos del Sur",
    score: 8.5,
    volumen: "28 t",
    rendimientoGraso: "20,5%",
    tendencia: "up",
    variacion: "+0,5%",
  },
  {
    posicion: 5,
    nombre: "Cooperativa La Unión",
    score: 8.3,
    volumen: "65 t",
    rendimientoGraso: "20,2%",
    tendencia: "stable",
    variacion: "+0,0%",
  },
]

export const recepcionPorMes = [
  { mes: "Oct", estimado: 250, recibido: 220 },
  { mes: "Nov", estimado: 300, recibido: 280 },
  { mes: "Dic", estimado: 280, recibido: 150 },
]

export const rendimientoGrasoCampanas = [
  { mes: "Oct", c2024: 20.5, c2025: 21.0, c2026: 23.0 },
  { mes: "Nov", c2024: 21.8, c2025: 22.5, c2026: 23.5 },
  { mes: "Dic", c2024: 21.5, c2025: 22.0, c2026: 24.0 },
  { mes: "Ene", c2024: 20.0, c2025: 20.5, c2026: 18.0 },
]

export const lotesRecientes = [
  {
    id: "T-2026-045",
    agricultor: "Finca El Olivar",
    variedad: "Picual",
    peso: "12.500 kg",
    fecha: "2026-02-25",
  },
  {
    id: "T-2026-044",
    agricultor: "AgroSevilla",
    variedad: "Hojiblanca",
    peso: "9.000 kg",
    fecha: "2026-02-24",
  },
  {
    id: "T-2026-043",
    agricultor: "Hermanos López",
    variedad: "Picual",
    peso: "15.200 kg",
    fecha: "2026-02-23",
  },
]

// Proveedores geográficos
export const proveedoresGeo = [
  { nombre: "Finca El Olivar", lat: 37.35, lng: -5.21, volumen: ">50t" },
  { nombre: "Los Almendros", lat: 37.54, lng: -5.08, volumen: "10-50t" },
  { nombre: "Cerro Alto", lat: 37.72, lng: -3.97, volumen: "<10t" },
  { nombre: "Valle del Guadalquivir", lat: 37.62, lng: -4.32, volumen: ">50t" },
  { nombre: "Olivos del Sur", lat: 37.23, lng: -4.68, volumen: "10-50t" },
  { nombre: "Cooperativa La Unión", lat: 37.88, lng: -4.15, volumen: ">50t" },
  { nombre: "Finca Los Pinos", lat: 37.45, lng: -3.72, volumen: "<10t" },
  { nombre: "AgroJaén", lat: 37.77, lng: -3.78, volumen: "10-50t" },
]

// Tipos de actividad
export const tiposActividad = [
  "Tratamiento Fitosanitario",
  "Fertilización",
  "Riego",
  "Poda",
  "Cosecha",
  "Análisis de Suelo",
  "Control de Plagas",
]

// Productos frecuentes
export const productosFrecuentes = [
  "Dimetoato 40 EC",
  "Cobre Oxicloruro",
  "Abono Foliar NPK",
  "Sulfato de Cobre",
  "Azufre Mojable",
  "Aceite de Neem",
  "Bacillus thuringiensis",
]

// Métodos de recolección
export const metodosRecoleccion = [
  "Mecánica",
  "Manual",
  "Vibrador de tronco",
  "Vareo",
  "Mixta",
]

// Overview stats
export const overviewStats = {
  totalParcelas: 4,
  superficieTotal: 28.7,
  campanasRegistradas: 3,
  lotesGenerados: 12,
  actividadesRegistradas: 47,
  scorePromedioCalidad: 91,
  produccionTotal2025: 18500,
  rendimientoGrasoMedio: "21,8%",
}

// User profile data (for user panel)
export const userProfile = {
  nombre: "Antonio",
  apellidos: "López García",
  email: "antonio.lopez@fincaelolivar.es",
  telefono: "+34 654 321 098",
  empresa: "Finca El Olivar S.L.",
  cif: "B-41234567",
  rol: "Agricultor",
  plan: "Profesional",
  miembroDesde: "2024-03-15",
  parcelas: 4,
  superficieTotal: 28.7,
  direccion: "Ctra. Lantejuela km 3,5 · 41620 Marchena, Sevilla",
  avatar: "AL",
}
