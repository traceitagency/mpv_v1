"use client"

import { useState, useRef, useEffect } from "react"
import { Bell, HelpCircle, AlertTriangle, CheckCircle, Info, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const notifications = [
  {
    id: 1,
    type: "warning" as const,
    title: "Plazo de seguridad próximo a vencer",
    desc: "Dimetoato 40 EC · Parcela 4.1 - Finca El Olivar",
    time: "Hace 2 horas",
    read: false,
  },
  {
    id: 2,
    type: "success" as const,
    title: "Lote certificado con QR",
    desc: "T-2026-001 · Trazabilidad completa generada",
    time: "Ayer, 15:30",
    read: false,
  },
  {
    id: 3,
    type: "info" as const,
    title: "Campaña 2026 activa",
    desc: "18.500 kg acumulados · Rendimiento 23,2%",
    time: "Hace 2 días",
    read: true,
  },
  {
    id: 4,
    type: "warning" as const,
    title: "Riego no registrado",
    desc: "Parcela 4.4 - Valle del Guadalquivir · 8 días sin riego",
    time: "Hace 3 días",
    read: true,
  },
]

const typeConfig = {
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    border: "border-l-amber-400",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-trace-50",
    iconColor: "text-trace-600",
    border: "border-l-trace-500",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50",
    iconColor: "text-blue-500",
    border: "border-l-blue-400",
  },
}

export function TopBar() {
  const [notifOpen, setNotifOpen] = useState(false)
  const [notifs, setNotifs] = useState(notifications)
  const panelRef = useRef<HTMLDivElement>(null)

  const unreadCount = notifs.filter((n) => !n.read).length

  useEffect(() => {
    if (!notifOpen) return
    function handleOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setNotifOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutside)
    return () => document.removeEventListener("mousedown", handleOutside)
  }, [notifOpen])

  function markAllRead() {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  function markRead(id: number) {
    setNotifs((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-end border-b bg-white/80 backdrop-blur-sm px-6 gap-3">
      <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
        <HelpCircle size={20} />
      </button>

      {/* Bell button + dropdown */}
      <div className="relative" ref={panelRef}>
        <button
          onClick={() => setNotifOpen((o) => !o)}
          className={cn(
            "relative rounded-full p-2 transition-colors",
            notifOpen
              ? "bg-gray-100 text-gray-600"
              : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          )}
        >
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
          )}
        </button>

        <AnimatePresence>
          {notifOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-gray-100 bg-white shadow-2xl z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">Notificaciones</span>
                  {unreadCount > 0 && (
                    <span className="rounded-full bg-red-50 px-1.5 py-0.5 text-xs font-semibold text-red-600">
                      {unreadCount}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllRead}
                      className="rounded px-2 py-1 text-xs font-medium text-trace-600 hover:bg-trace-50 transition-colors"
                    >
                      Marcar leídas
                    </button>
                  )}
                  <button
                    onClick={() => setNotifOpen(false)}
                    className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Notification list */}
              <div className="max-h-[340px] divide-y divide-gray-50 overflow-y-auto">
                {notifs.map((n) => {
                  const cfg = typeConfig[n.type]
                  const Icon = cfg.icon
                  return (
                    <div
                      key={n.id}
                      onClick={() => markRead(n.id)}
                      className={cn(
                        "flex cursor-pointer gap-3 border-l-2 px-4 py-3.5 transition-colors",
                        cfg.border,
                        n.read ? "bg-white hover:bg-gray-50" : "bg-gray-50/70 hover:bg-gray-50"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
                          cfg.bg
                        )}
                      >
                        <Icon size={14} className={cfg.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={cn(
                            "text-sm leading-snug",
                            n.read ? "font-normal text-gray-500" : "font-medium text-gray-900"
                          )}
                        >
                          {n.title}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-gray-400">{n.desc}</p>
                        <p className="mt-1 text-[11px] text-gray-300">{n.time}</p>
                      </div>
                      {!n.read && (
                        <div className="mt-2 flex-shrink-0">
                          <span className="block h-1.5 w-1.5 rounded-full bg-blue-500" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 px-4 py-2.5 text-center">
                <button className="text-xs font-medium text-trace-600 hover:text-trace-700 transition-colors">
                  Ver historial completo →
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* User pill */}
      <div className="ml-2 flex items-center gap-2 rounded-full bg-gray-50 py-1.5 pl-1.5 pr-3">
        <div className="h-8 w-8 rounded-full bg-trace-600 flex items-center justify-center text-white text-sm font-semibold">
          AL
        </div>
        <span className="text-sm font-medium text-gray-700">Antonio López</span>
      </div>
    </header>
  )
}
