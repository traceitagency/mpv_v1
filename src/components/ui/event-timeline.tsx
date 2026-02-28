"use client"

import { Sprout, Scissors, Shield, Droplets, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, any> = {
  seedling: Sprout,
  scissors: Scissors,
  shield: Shield,
  droplet: Droplets,
  truck: Truck,
}

interface TimelineEvent {
  id: string
  tipo: string
  fecha: string
  icono: string
}

export function EventTimeline({ events, className }: { events: TimelineEvent[]; className?: string }) {
  // Take latest 5 events sorted by date desc
  const sortedEvents = [...events]
    .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    .slice(0, 6)
    .reverse()

  return (
    <div className={cn("flex items-center gap-0 overflow-x-auto pb-2", className)}>
      {sortedEvents.map((event, i) => {
        const Icon = iconMap[event.icono] || Shield
        const date = new Date(event.fecha)
        const dateStr = `${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
        const isLast = i === sortedEvents.length - 1

        return (
          <div key={event.id} className="flex items-center flex-shrink-0">
            <div className="flex flex-col items-center gap-1.5 min-w-[90px]">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full transition-all",
                  isLast
                    ? "bg-trace-600 text-white ring-4 ring-trace-100"
                    : "bg-trace-50 text-trace-700 border border-trace-200"
                )}
              >
                <Icon size={20} />
              </div>
              <span className="text-[11px] font-medium text-gray-700 text-center leading-tight">
                {event.tipo}
              </span>
              <span className="text-[10px] text-gray-400">({dateStr})</span>
            </div>
            {i < sortedEvents.length - 1 && (
              <div className="h-0.5 w-8 bg-trace-200 flex-shrink-0 mb-8" />
            )}
          </div>
        )
      })}
    </div>
  )
}
