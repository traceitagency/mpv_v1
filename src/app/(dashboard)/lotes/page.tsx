"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { lotes, campanas } from "@/lib/mock-data"
import { formatDate, formatNumber } from "@/lib/utils"
import {
  CheckCircle2, Package, QrCode, Download
} from "lucide-react"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts"

export default function LotesPage() {
  const [selectedLote, setSelectedLote] = useState(lotes[0])

  const eventosChart = [
    { tipo: "Tratamientos", cantidad: selectedLote.eventosVinculados.tratamientos },
    { tipo: "Riegos", cantidad: selectedLote.eventosVinculados.riegos },
    { tipo: "Podas", cantidad: selectedLote.eventosVinculados.podas },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
            Generación de Lote Oleícola
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Crea lotes trazables con certificado digital verificable
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm">
            {campanas.map((c) => (
              <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
          <select className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm">
            <option>Todas las Parcelas</option>
          </select>
        </div>
      </div>

      {/* Lote selector */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {lotes.map((l) => (
          <button
            key={l.id}
            onClick={() => setSelectedLote(l)}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all whitespace-nowrap ${selectedLote.id === l.id
              ? "border-trace-300 bg-trace-50 text-trace-700 shadow-sm"
              : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
              }`}
          >
            <Package size={14} />
            Lote {l.id}
          </button>
        ))}
        <button className="flex items-center gap-2 rounded-lg border border-dashed border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-all whitespace-nowrap">
          + Nuevo Lote
        </button>
      </div>

      {/* Lote selected - title */}
      <div className="rounded-xl border bg-white p-5">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Lote {selectedLote.id}
        </h2>
        <p className="text-sm text-gray-500 mb-6">Campaña {selectedLote.campana}</p>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Form data */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Datos del Lote y Trazabilidad
            </h3>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-1.5 block">Parcela</label>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900">
                {selectedLote.parcelaNombre}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-1.5 block">Fecha de Cosecha</label>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900">
                {formatDate(selectedLote.fechaCosecha)}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-1.5 block">Método de Recolección</label>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900">
                {selectedLote.metodoRecoleccion}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500 mb-1.5 block">Volumen Estimado (kg)</label>
              <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900">
                {formatNumber(selectedLote.volumenEstimado)}
              </div>
            </div>

            {/* Trazabilidad badge */}
            {selectedLote.trazabilidadCompleta && (
              <div className="flex items-center gap-3 rounded-xl bg-trace-50 border border-trace-200 p-4">
                <CheckCircle2 size={28} className="text-trace-600 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-trace-800">Trazabilidad Completa</p>
                  <p className="text-xs text-trace-600 mt-0.5">Todos los eventos verificados y vinculados</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Summary + Certificate */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Resumen Histórico y Certificación
            </h3>

            {/* Eventos vinculados */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Resumen Histórico Vinculado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-2">Eventos Vinculados</h4>
                    <ResponsiveContainer width="100%" height={130}>
                      <BarChart data={eventosChart} margin={{ top: 16, right: 8, left: 8, bottom: 0 }}>
                        <XAxis dataKey="tipo" tick={{ fontSize: 9 }} stroke="#999" />
                        <Tooltip contentStyle={{ borderRadius: 8, fontSize: 11 }} />
                        <Bar dataKey="cantidad" radius={[3, 3, 0, 0]}>
                          <LabelList dataKey="cantidad" position="top" style={{ fontSize: 10, fill: "#374151", fontWeight: 600 }} />
                          {eventosChart.map((_, i) => (
                            <Cell key={i} fill={["#1c611f", "#2d8f2d", "#55b455"][i]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-2">Insumos Clave (Resumen)</h4>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left pb-1.5 font-medium text-gray-500">Producto</th>
                          <th className="text-right pb-1.5 font-medium text-gray-500">Cantidad</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedLote.insumosClaveResumen.map((i) => (
                          <tr key={i.producto} className="border-b last:border-0">
                            <td className="py-2 text-gray-700">{i.producto}</td>
                            <td className="py-2 text-right font-medium text-gray-900">{i.cantidadTotal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificate preview */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Certificado Digital y Exportación</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-gray-50 p-4">
                  <p className="text-xs font-medium text-gray-700 mb-3 text-center">
                    Previsualización del Certificado Digital ({selectedLote.id})
                  </p>
                  <div className="flex flex-col xs:flex-row items-start gap-4 sm:flex-row">
                    {/* QR placeholder */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center">
                      <QrCode size={40} className="text-gray-600" />
                    </div>
                    <div className="text-xs space-y-0.5 text-gray-600">
                      <p><span className="font-semibold">Certificado Digital</span> ({selectedLote.id})</p>
                      <p><span className="font-medium">Propietario:</span> {selectedLote.parcelaNombre}</p>
                      <p><span className="font-medium">Parcela:</span> Parcela</p>
                      <p><span className="font-medium">Cosecha:</span> {formatDate(selectedLote.fechaCosecha)}</p>
                      <p><span className="font-medium">Campaña:</span> {selectedLote.campana}</p>
                      <p><span className="font-medium">Volumen:</span> {formatNumber(selectedLote.volumenEstimado)} kg</p>
                      <p className="text-[10px] text-gray-400 mt-1">Key ID: {selectedLote.certificadoId}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Export button */}
            <Button className="w-full h-12 text-sm font-semibold uppercase tracking-wide">
              <Download size={16} className="mr-2" />
              Exportar Lote a Almazara
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
