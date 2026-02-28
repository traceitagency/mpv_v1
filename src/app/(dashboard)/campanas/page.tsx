"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { GaugeChart } from "@/components/charts/gauge-chart"
import { ndviData, insumosAplicados, campanas, parcelas } from "@/lib/mock-data"
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
} from "recharts"

const lluviaChartData = [
  { periodo: "2026", actual: 250, media: 300 },
  { periodo: "Media", actual: 180, media: 250 },
]

export default function CampanasPage() {
  const [selectedCampana, setSelectedCampana] = useState("C-2026")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
            Vista de Campaña Oleícola
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Evolución climática, producción y rendimiento por campaña
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="hidden sm:block text-sm text-gray-500">Filtro:</span>
            <div className="relative">
              <select
                value={selectedCampana}
                onChange={(e) => setSelectedCampana(e.target.value)}
                className="appearance-none rounded-lg border border-gray-200 bg-white pl-3 pr-7 py-1.5 text-xs text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-trace-500/20 cursor-pointer"
              >
                {campanas.map((c) => (
                  <option key={c.id} value={c.id}>{c.nombre}</option>
                ))}
              </select>
              <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="relative max-w-[150px]">
            <select className="w-full appearance-none rounded-lg border border-gray-200 bg-white pl-3 pr-7 py-1.5 text-xs text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-trace-500/20 cursor-pointer">
              <option value="">Todas las Parcelas</option>
              {parcelas.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))}
            </select>
            <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch">
        {/* Left: Evolución y Clima */}
        <div className="h-full">
          <div className="rounded-xl border bg-white p-1 h-full">
            <div className="px-4 pt-4 pb-2">
              <h2 className="text-base font-semibold text-gray-900">Evolución y Clima (Campaña 2026)</h2>
            </div>

            {/* NDVI */}
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-1 pt-2 mb-2">
                <CardTitle className="text-sm font-medium text-gray-700">
                  Evolución NDVI (Últimos 10 Meses)
                </CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-2.5 w-6 rounded bg-trace-500" />
                  <span className="text-xs text-gray-500">Evolución NDVI (Últimos 10 Meses)</span>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={ndviData} margin={{ top: 5, right: 15, left: 0, bottom: 5 }}>
                    <defs>
                      <linearGradient id="ndviGradCamp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1c611f" stopOpacity={0.12} />
                        <stop offset="95%" stopColor="#1c611f" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="mes" tick={{ fontSize: 11 }} stroke="#999" />
                    <YAxis tick={{ fontSize: 11 }} stroke="#999" width={45} label={{ value: 'NDVI', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
                    <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Area type="monotone" dataKey="valor" stroke="#1c611f" strokeWidth={2} fill="url(#ndviGradCamp)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Lluvia */}
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-1 pt-0 mb-2">
                <CardTitle className="text-sm font-medium text-gray-700">
                  Acumulado de Lluvia (mm) vs Media Histórica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={lluviaChartData} barGap={4} margin={{ top: 5, right: 15, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="periodo" tick={{ fontSize: 11 }} stroke="#999" />
                    <YAxis tick={{ fontSize: 11 }} stroke="#999" width={35} />
                    <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Legend iconSize={10} wrapperStyle={{ fontSize: 11 }} />
                    <Bar dataKey="actual" name="2026" fill="#1c611f" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="media" name="Media" fill="#d1d5db" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right: Resumen Producción */}
        <div className="h-full">
          <div className="rounded-xl border bg-white p-1 h-full">
            <div className="px-4 pt-4 pb-2">
              <h2 className="text-base font-semibold text-gray-900">Resumen de Producción y Rendimiento</h2>
            </div>

            {/* Insumos */}
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-1 pt-2">
                <CardTitle className="text-sm font-medium text-gray-700">Resumen de Insumos Aplicados</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-2 font-medium text-gray-500">Producto</th>
                      <th className="text-right pb-2 font-medium text-gray-500">Cantidad Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {insumosAplicados.map((i) => (
                      <tr key={i.producto} className="border-b last:border-0">
                        <td className="py-2.5 text-gray-700">{i.producto}</td>
                        <td className="py-2.5 text-right font-medium text-gray-900">{i.cantidadTotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Gauge */}
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-1 pt-2 mb-1 mt-2">
                <CardTitle className="text-sm font-medium text-gray-700">
                  Indicador de Rendimiento Estimado (Provisional)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center py-4">
                  <GaugeChart
                    value={4200}
                    max={6000}
                    label="4.200"
                    sublabel="kg/ha"
                    size="lg"
                    color="#1c611f"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Índice de confianza (88%)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
