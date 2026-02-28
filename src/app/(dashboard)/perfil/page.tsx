"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { userProfile, parcelas } from "@/lib/mock-data"
import { formatDate } from "@/lib/utils"
import {
  User, Mail, Phone, Building2, MapPin, Calendar, Shield,
  LayoutGrid, Award, Edit3, Camera, Bell, Lock, Globe, FileText
} from "lucide-react"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState<"general" | "seguridad" | "notificaciones">("general")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
          Mi Perfil
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Gestiona tu información personal y preferencias de cuenta
        </p>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl border bg-white overflow-hidden">
        {/* Cover */}
        <div className="h-20 bg-gradient-to-br from-trace-800 via-trace-600 to-trace-400 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10" />
          <div className="absolute right-20 bottom-0 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute left-1/3 -bottom-6 w-20 h-20 rounded-full bg-white/5" />
        </div>

        {/* Avatar row — overlaps cover bottom */}
        <div className="px-6">
          <div className="flex items-end justify-between -mt-12">
            <div className="relative flex-shrink-0">
              <div className="h-24 w-24 rounded-2xl bg-trace-600 border-4 border-white shadow-lg flex items-center justify-center text-white text-3xl font-bold">
                {userProfile.avatar}
              </div>
              <button className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-white border shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors">
                <Camera size={14} />
              </button>
            </div>
            <div className="pb-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Edit3 size={14} /> Editar Perfil
              </Button>
            </div>
          </div>
        </div>

        {/* Name + info — always in white area */}
        <div className="px-6 pt-3 pb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {userProfile.nombre} {userProfile.apellidos}
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">{userProfile.empresa}</p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <Badge variant="default">{userProfile.rol}</Badge>
            <Badge variant="success">Plan {userProfile.plan}</Badge>
          </div>

          {/* Quick stats */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-gray-50 border px-3 py-2 text-center">
              <p className="text-lg font-bold text-trace-700">{userProfile.parcelas}</p>
              <p className="text-xs text-gray-500">Parcelas</p>
            </div>
            <div className="rounded-lg bg-gray-50 border px-3 py-2 text-center">
              <p className="text-lg font-bold text-trace-700">{userProfile.superficieTotal.toLocaleString('es-ES')}</p>
              <p className="text-xs text-gray-500">Hectáreas</p>
            </div>
            <div className="rounded-lg bg-gray-50 border px-3 py-2 text-center">
              <p className="text-lg font-bold text-trace-700">98%</p>
              <p className="text-xs text-gray-500">Calidad</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b">
        {[
          { key: "general" as const, label: "Información General", icon: User },
          { key: "seguridad" as const, label: "Seguridad", icon: Lock },
          { key: "notificaciones" as const, label: "Notificaciones", icon: Bell },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.key
              ? "border-trace-600 text-trace-700"
              : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "general" && (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Datos Personales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: User, label: "Nombre completo", value: `${userProfile.nombre} ${userProfile.apellidos}` },
                { icon: Mail, label: "Correo electrónico", value: userProfile.email },
                { icon: Phone, label: "Teléfono", value: userProfile.telefono },
                { icon: Building2, label: "Empresa / Explotación", value: userProfile.empresa },
                { icon: FileText, label: "CIF", value: userProfile.cif },
                { icon: MapPin, label: "Dirección", value: userProfile.direccion },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-400 flex-shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Account Info */}
          <Card>
            <CardHeader>
              <CardTitle>Información de Cuenta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: Shield, label: "Rol", value: userProfile.rol },
                { icon: Award, label: "Plan activo", value: `Plan ${userProfile.plan}` },
                { icon: Calendar, label: "Miembro desde", value: formatDate(userProfile.miembroDesde) },
                { icon: LayoutGrid, label: "Parcelas registradas", value: `${userProfile.parcelas} parcelas` },
                { icon: Globe, label: "Superficie total", value: `${userProfile.superficieTotal.toLocaleString('es-ES')} ha` },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-400 flex-shrink-0">
                    <item.icon size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="text-sm font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Plan upgrade CTA */}
              <div className="rounded-lg bg-trace-50 border border-trace-200 p-4 mt-4">
                <p className="text-sm font-semibold text-trace-800">Plan Profesional</p>
                <p className="text-xs text-trace-600 mt-0.5">Hasta 15 parcelas · Trazabilidad completa · Conexión almazara</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold text-trace-700">29 €<span className="text-xs font-normal text-trace-500">/mes</span></span>
                  <Button size="sm" variant="outline" className="text-trace-600 border-trace-300 hover:bg-trace-100">
                    Cambiar Plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Parcelas asociadas */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Parcelas Asociadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {parcelas.map((p) => (
                  <div key={p.id} className="rounded-lg border p-3 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-8 w-8 rounded-lg bg-trace-50 flex items-center justify-center">
                        <MapPin size={14} className="text-trace-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-900">{p.id}</p>
                        <p className="text-[10px] text-gray-400">{p.ubicacion}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-700 truncate">{p.nombre}</p>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{p.variedad}</span>
                      <span>{p.superficie.toLocaleString('es-ES')} ha</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-trace-500 rounded-full"
                          style={{ width: `${p.scoreCalidad}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-trace-600">{p.scoreCalidad}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "seguridad" && (
        <Card>
          <CardHeader>
            <CardTitle>Seguridad de la Cuenta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Contraseña</p>
                  <p className="text-xs text-gray-500">Última actualización: {formatDate("2026-01-15")}</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Cambiar Contraseña</Button>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Verificación en dos pasos (2FA)</p>
                  <p className="text-xs text-gray-500">Protección adicional para tu cuenta</p>
                </div>
              </div>
              <Badge variant="default">Desactivado</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Sesiones activas</p>
                  <p className="text-xs text-gray-500">1 sesión activa · Chrome · Sevilla, España</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Ver Sesiones</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {activeTab === "notificaciones" && (
        <Card>
          <CardHeader>
            <CardTitle>Preferencias de Notificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Alertas de plazo de seguridad", desc: "Recibe un aviso cuando un plazo de seguridad está próximo a vencer", checked: true },
              { title: "Resumen semanal de actividad", desc: "Informe semanal con el resumen de actividades registradas", checked: true },
              { title: "Novedades de la plataforma", desc: "Nuevas funcionalidades y actualizaciones de TRACE IT", checked: false },
              { title: "Alertas meteorológicas", desc: "Avisos de condiciones climáticas adversas para tus parcelas", checked: true },
              { title: "Notificaciones de la almazara", desc: "Cuando la almazara confirma la recepción de un lote", checked: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-trace-600"></div>
                </label>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
