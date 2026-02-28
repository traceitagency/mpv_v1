"use client"

import { Bell, HelpCircle } from "lucide-react"

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-end border-b bg-white/80 backdrop-blur-sm px-6 gap-3">
      <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
        <HelpCircle size={20} />
      </button>
      <button className="relative rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors">
        <Bell size={20} />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
      </button>
      <div className="ml-2 flex items-center gap-2 rounded-full bg-gray-50 py-1.5 pl-1.5 pr-3">
        <div className="h-8 w-8 rounded-full bg-trace-600 flex items-center justify-center text-white text-sm font-semibold">
          AL
        </div>
        <span className="text-sm font-medium text-gray-700">Antonio López</span>
      </div>
    </header>
  )
}
