"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { GaugeChart } from "@/components/charts/gauge-chart"
import { ndviData, insumosAplicados, campanas } from "@/lib/mock-data"
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
            <select
              value={selectedCampana}
              onChange={(e) => setSelectedCampana(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm focus:outline-none focus:ring-2 focus:ring-trace-500/20"
            >
              {campanas.map((c) => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
          </div>
          <select className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm focus:outline-none focus:ring-2 focus:ring-trace-500/20">
            <option>Todas las Parcelas</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Evolución y Clima */}
        <div className="space-y-6">
          <div className="rounded-xl border bg-white p-1">
            <div className="px-4 pt-4 pb-2">
              <h2 className="text-base font-semibold text-gray-900">Evolución y Clima (Campaña 2026)</h2>
            </div>

            {/* NDVI */}
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-1 pt-2">
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
                  <AreaChart data={ndviData}>
                    <defs>
                      <linearGradient id="ndviGradCamp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1c611f" stopOpacity={0.12} />
                        <stop offset="95%" stopColor="#1c611f" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="mes" tick={{ fontSize: 11 }} stroke="#999" />
                    <YAxis tick={{ fontSize: 11 }} stroke="#999" label={{ value: 'NDVI', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
                    <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 12 }} />
                    <Area type="monotone" dataKey="valor" stroke="#1c611f" strokeWidth={2} fill="url(#ndviGradCamp)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Lluvia */}
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-1 pt-0">
                <CardTitle className="text-sm font-medium text-gray-700">
                  Acumulado de Lluvia (mm) vs Media Histórica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={lluviaChartData} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="periodo" tick={{ fontSize: 11 }} stroke="#999" />
                    <YAxis tick={{ fontSize: 11 }} stroke="#999" />
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
        <div className="space-y-6">
          <div className="rounded-xl border bg-white p-1">
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
              <CardHeader className="pb-1 pt-2">
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
