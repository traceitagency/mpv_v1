import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Trace IT - Trazabilidad y Gestión Digital Agrícola",
  description: "Plataforma de trazabilidad, integración y análisis predictivo para el sector oleícola y agrícola",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
