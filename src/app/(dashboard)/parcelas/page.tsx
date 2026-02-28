"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { EventTimeline } from "@/components/ui/event-timeline"
import { parcelas, eventosAgricolas, saludParcela, produccionInteranual, resumenCampanas } from "@/lib/mock-data"
import { formatNumber } from "@/lib/utils"
import {
  MapPin, Award
} from "lucide-react"
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
  AreaChart, Area,
} from "recharts"

export default function ParcelasPage() {
  const [selectedParcela, setSelectedParcela] = useState(parcelas[0])

  const parcelaEvents = eventosAgricolas.filter(
    (e) => e.parcelaId === selectedParcela.id
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
            Panel de Identidad Digital de Parcela
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Historial agronómico acumulativo y evolución productiva
          </p>
        </div>
      </div>

      {/* Parcela selector */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {parcelas.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelectedParcela(p)}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${selectedParcela.id === p.id
              ? "border-trace-300 bg-trace-50 text-trace-700 shadow-sm"
              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              }`}
          >
            <MapPin size={14} />
            {p.nombre}
          </button>
        ))}
      </div>

      {/* Parcela Identity */}
      <div className="rounded-xl border bg-white p-5">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Identidad Digital de Parcela - {selectedParcela.nombre}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Info + Map */}
          <div className="space-y-4">
            {/* Score */}
            <Card className="border-trace-100 bg-trace-50/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Score de Calidad de Información</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={18} className="text-amber-500" />
                    <span className="text-sm font-semibold text-trace-700">{selectedParcela.scoreCalidad}% Completado</span>
                  </div>
                </div>
                <Progress value={selectedParcela.scoreCalidad} className="mt-3 h-2.5" indicatorClassName="bg-trace-600" />
              </CardContent>
            </Card>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border p-3">
                <p className="text-xs text-gray-400 mb-1">Ubicación</p>
                <p className="text-sm font-medium text-gray-900">{selectedParcela.ubicacion}</p>
                <p className="text-xs text-gray-500">(SIGPAC {selectedParcela.sigpac})</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-xs text-gray-400 mb-1">Superficie</p>
                <p className="text-sm font-medium text-gray-900">{selectedParcela.superficie.toLocaleString('es-ES')} ha</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-xs text-gray-400 mb-1">Variedad</p>
                <p className="text-sm font-medium text-gray-900">{selectedParcela.variedad}</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-xs text-gray-400 mb-1">Año de Plantación</p>
                <p className="text-sm font-medium text-gray-900">{selectedParcela.anoPlantacion}</p>
              </div>
            </div>

            {/* Map - SVG parcela view */}
            <div className="rounded-lg border overflow-hidden h-[440px] relative bg-[#d4e7c5]">
              {/* SVG parcela map */}
              <svg viewBox="0 0 500 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background terrain */}
                <defs>
                  <pattern id="olivePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="3" fill="#6b8f4e" opacity="0.25" />
                  </pattern>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
                  </filter>
                </defs>
                <rect width="500" height="300" fill="#d4e7c5" />
                <rect width="500" height="300" fill="url(#olivePattern)" />

                {/* Roads */}
                <path d="M0,180 Q100,185 200,175 Q300,165 400,170 Q450,172 500,168" stroke="#c2b280" strokeWidth="4" fill="none" opacity="0.5" />
                <path d="M250,0 Q245,80 255,150 Q260,200 250,300" stroke="#c2b280" strokeWidth="3" fill="none" opacity="0.4" />

                {/* Parcela outline - main field */}
                <path
                  d="M80,60 L320,45 L380,80 L400,200 L350,250 L120,260 L60,200 Z"
                  fill="#4a7c2e"
                  stroke="#2d5a1e"
                  strokeWidth="2.5"
                  opacity="0.6"
                  filter="url(#shadow)"
                />

                {/* Olive tree rows */}
                {[80, 100, 120, 140, 160, 180, 200, 220].map((y) => (
                  <g key={y}>
                    {Array.from({ length: 12 }, (_, i) => 100 + i * 24).map((x) => (
                      <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#3d6b25" opacity="0.7" />
                    ))}
                  </g>
                ))}

                {/* Parcela label */}
                <rect x="160" y="120" width="140" height="50" rx="8" fill="white" opacity="0.9" filter="url(#shadow)" />
                <text x="230" y="140" fontSize="11" fill="#1c611f" fontWeight="700" textAnchor="middle">
                  {selectedParcela.id}
                </text>
                <text x="230" y="157" fontSize="9" fill="#666" textAnchor="middle">
                  {selectedParcela.superficie.toLocaleString('es-ES')} ha · {selectedParcela.variedad.replace('Olivo (', '').replace(')', '')}
                </text>

                {/* North indicator */}
                <g transform="translate(440, 40)">
                  <circle cx="0" cy="0" r="16" fill="white" opacity="0.9" />
                  <text x="0" y="5" fontSize="12" fill="#333" fontWeight="700" textAnchor="middle">N</text>
                  <line x1="0" y1="-12" x2="0" y2="-18" stroke="#333" strokeWidth="2" />
                  <polygon points="0,-22 -3,-16 3,-16" fill="#333" />
                </g>

                {/* Scale bar */}
                <g transform="translate(30, 275)">
                  <line x1="0" y1="0" x2="60" y2="0" stroke="#555" strokeWidth="1.5" />
                  <line x1="0" y1="-3" x2="0" y2="3" stroke="#555" strokeWidth="1.5" />
                  <line x1="60" y1="-3" x2="60" y2="3" stroke="#555" strokeWidth="1.5" />
                  <text x="30" y="12" fontSize="8" fill="#555" textAnchor="middle">100 m</text>
                </g>

                {/* Adjacent parcelas (lighter) */}
                <path d="M400,80 L470,90 L490,190 L400,200 Z" fill="#7aa65e" opacity="0.25" stroke="#5c8c42" strokeWidth="1" strokeDasharray="4,3" />
                <path d="M60,200 L10,180 L5,260 L120,260 Z" fill="#7aa65e" opacity="0.25" stroke="#5c8c42" strokeWidth="1" strokeDasharray="4,3" />
              </svg>

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <div className="flex items-center gap-2 text-white">
                  <MapPin size={16} className="flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">{selectedParcela.nombre}</p>
                    <p className="text-xs text-white/80">
                      {selectedParcela.lat.toFixed(4)}°N, {Math.abs(selectedParcela.lng).toFixed(4)}°W · {selectedParcela.superficie.toLocaleString('es-ES')} ha
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3 rounded-lg bg-white/90 backdrop-blur-sm px-2.5 py-1.5 text-xs font-medium text-trace-700 shadow-sm">
                Vista catastral
              </div>
            </div>
          </div>

          {/* Right: Timeline + Charts */}
          <div className="space-y-4">
            {/* Event Timeline */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Línea Temporal de Eventos Agrícolas</CardTitle>
              </CardHeader>
              <CardContent>
                <EventTimeline events={parcelaEvents} />
              </CardContent>
            </Card>

            {/* Health indicators */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Indicadores de Salud (Últimos 12 Meses)</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-trace-500" />
                  <span className="text-xs text-gray-500">Índice Vegetativo Medio (NDVI)</span>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={160}>
                  <AreaChart data={saludParcela}>
                    <defs>
                      <linearGradient id="ndviGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1c611f" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#1c611f" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="mes" tick={{ fontSize: 10 }} stroke="#999" />
                    <YAxis tick={{ fontSize: 10 }} stroke="#999" />
                    <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Area type="monotone" dataKey="ndvi" stroke="#1c611f" strokeWidth={2} fill="url(#ndviGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Producción interanual */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Evolución Productiva (Comparativa Interanual)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={produccionInteranual}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} stroke="#999" />
                    <YAxis tick={{ fontSize: 10 }} stroke="#999" />
                    <Tooltip
                      contentStyle={{ borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 12 }}
                      formatter={(v: number) => [`${formatNumber(v)} kg`, "Producción"]}
                    />
                    <Bar dataKey="produccion" fill="#1c611f" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Resumen de campañas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Resumen de Campañas Asociadas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium text-gray-500">Campaña</th>
                  <th className="pb-3 font-medium text-gray-500">Producción</th>
                  <th className="pb-3 font-medium text-gray-500">Rendimiento Graso</th>
                  <th className="pb-3 font-medium text-gray-500">Beneficio Estimado</th>
                </tr>
              </thead>
              <tbody>
                {resumenCampanas.map((c) => (
                  <tr key={c.campana} className="border-b last:border-0">
                    <td className="py-3 font-medium text-gray-900">{c.campana}</td>
                    <td className="py-3 text-gray-700">{c.produccion}</td>
                    <td className="py-3 text-gray-700">{c.rendimientoGraso}</td>
                    <td className="py-3 text-gray-700">{c.beneficioEstimado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm" className="text-trace-600 border-trace-200 hover:bg-trace-50">
              Ver Historial Completo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
