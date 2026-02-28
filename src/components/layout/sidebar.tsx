"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/lib/sidebar-context"
import Image from "next/image"
import {
  Home,
  LayoutGrid,
  Edit3,
  FileText,
  Package,
  BarChart3,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react"

const navItems = [
  { href: "/overview", label: "Inicio", icon: Home },
  { href: "/parcelas", label: "Parcelas", icon: LayoutGrid },
  { href: "/actividades", label: "Actividades", icon: Edit3 },
  { href: "/campanas", label: "Campañas", icon: FileText },
  { href: "/lotes", label: "Lotes", icon: Package },
  { href: "/almazara", label: "Almazara", icon: BarChart3 },
]

const bottomItems = [
  { href: "/perfil", label: "Mi Perfil", icon: User },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { collapsed, toggle } = useSidebar()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col border-r bg-white transition-all duration-300",
        collapsed ? "w-[68px]" : "w-[210px]"
      )}
    >
      {/* Logo */}
      <div className="relative">
        <div className={cn(
          "flex h-16 items-center border-b",
          collapsed ? "justify-center" : "px-4"
        )}>
          <Link href="/overview" className={cn("flex items-center gap-1.5", !collapsed && "overflow-hidden")}>
            <Image
              src="/logo.png"
              alt="TRACE IT"
              width={collapsed ? 44 : 32}
              height={collapsed ? 44 : 32}
              className={cn("object-contain flex-shrink-0", collapsed ? "w-10 h-10" : "w-10 h-10")}
            />
            {!collapsed && (
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-bold tracking-tight text-gray-900">TRACE</span>
                <span className="text-lg font-bold tracking-tight text-trace-700">IT</span>
              </div>
            )}
          </Link>
        </div>
        {/* Toggle button sits on the separator line */}
        <button
          onClick={toggle}
          className={cn(
            "absolute -bottom-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-gray-400 shadow-sm hover:text-gray-600 transition-colors",
            collapsed ? "left-1/2 -translate-x-1/2" : "right-4"
          )}
        >
          {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-5">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-trace-50 text-trace-700 shadow-sm border border-trace-100"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon size={20} className={cn("flex-shrink-0", isActive && "text-trace-600")} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t px-3 py-3 space-y-1">
        {bottomItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-trace-50 text-trace-700"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
        <button
          onClick={handleLogout}
          title={collapsed ? "Cerrar sesión" : undefined}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-black hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} className="flex-shrink-0" />
          {!collapsed && <span>Cerrar sesión</span>}
        </button>
      </div>
    </aside>
  )
}
