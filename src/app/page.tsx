"use client"

import { useState } from "react"
import { Logo } from "@/components/layout/logo"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth/auth-modal"
import {
  Sprout, BarChart3, ArrowRight, CheckCircle2,
  MapPin, Leaf, Factory, QrCode, TrendingUp, Users,
  Twitter, Facebook, Instagram, Youtube, Star, Zap, Crown,
  BookOpen, ArrowUpRight, Check, Menu, X,
} from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function LandingPage() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const openLogin = () => { setAuthMode("login"); setAuthOpen(true); setMobileMenuOpen(false) }
  const openRegister = () => { setAuthMode("register"); setAuthOpen(true); setMobileMenuOpen(false) }

  return (
    <div className="min-h-screen bg-white">
      {/* Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode={authMode}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Funcionalidades
            </a>
            <a href="#planes" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Planes
            </a>
            <a href="#casos" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Casos de Éxito
            </a>
            <a href="#blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={openLogin}>
              Iniciar Sesión
            </Button>
            <Button size="sm" onClick={openRegister}>
              Regístrate Gratis
            </Button>
          </div>
          {/* Hamburger button - mobile only */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-1">
            <a
              href="#funcionalidades"
              className="py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a
              href="#planes"
              className="py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Planes
            </a>
            <a
              href="#casos"
              className="py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Casos de Éxito
            </a>
            <a
              href="#blog"
              className="py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="mt-3 pt-3 border-t flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-center" onClick={openLogin}>
                Iniciar Sesión
              </Button>
              <Button className="w-full justify-center" onClick={openRegister}>
                Regístrate Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero - olive grove background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1682285116813-8f503995b001?w=1920&q=80')`,
              backgroundColor: '#4a6741',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:py-0 lg:mt-10 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <motion.div {...fadeUp}>
                <span className="inline-flex items-center rounded-full bg-trace-50 px-3 py-1 text-xs font-medium text-trace-700 border border-trace-200 mb-8">
                  <Leaf size={12} className="mr-1.5" /> Plataforma líder en trazabilidad agrícola
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-display)' }}
                {...fadeUp}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                Trazabilidad y Gestión Digital para el Sector Agrícola
              </motion.h1>

              <motion.p
                className="mt-6 text-lg text-gray-600 leading-relaxed"
                {...fadeUp}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Optimiza tu cultivo, certifica tu calidad y conecta con la cadena de valor.
                Del campo a la almazara, en una sola plataforma.
              </motion.p>

              {/* Feature pills */}
              <motion.div
                className="mt-5 flex flex-wrap gap-2"
                {...fadeUp}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                {['Cuaderno de campo digital', 'Certificados QR', 'Conexión almazara', 'Predicciones IA', 'Gestión de campañas', 'Alertas agronómicas'].map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm">
                    <Check size={10} className="text-trace-500 flex-shrink-0" /> {f}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-3"
                {...fadeUp}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Button size="lg" className="gap-2 text-base" onClick={openRegister}>
                  Empieza Ahora (Gratis 30 días)
                  <ArrowRight size={18} />
                </Button>
                <a href="#funcionalidades">
                  <Button variant="outline" size="lg" className="text-base">
                    Ver funcionalidades
                  </Button>
                </a>
              </motion.div>

              {/* Social proof */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5"
                {...fadeUp}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {/*
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">+50 agricultores activos</p>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={11} fill="#fbbf24" className="text-amber-400" />)}
                      <span className="text-xs text-gray-500 ml-1">4.8/5</span>
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-gray-200" />
                */}
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-trace-600" /> Sin tarjeta de crédito
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-trace-600" /> Setup en 5 min
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right: floating dashboard card — desktop only */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="rounded-2xl bg-white/85 backdrop-blur-sm border border-white/60 shadow-2xl p-5 max-w-sm ml-auto">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-trace-500" />
                  <span className="text-xs font-semibold text-gray-700">Panel · Finca El Olivar</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Parcelas activas', value: '8', trend: '+2 esta campaña' },
                    { label: 'Rendimiento graso', value: '22,4%', trend: '+1,2% vs anterior' },
                    { label: 'Lotes trazados', value: '34', trend: '+5 este mes' },
                    { label: 'Score calidad', value: '91/100', trend: '+3 puntos' },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl bg-gray-50 border p-3">
                      <p className="text-[10px] text-gray-400 mb-1">{item.label}</p>
                      <p className="text-xl font-bold text-gray-900">{item.value}</p>
                      <span className="inline-flex items-center gap-0.5 text-[10px] text-trace-600 font-medium mt-0.5">
                        <TrendingUp size={9} /> {item.trend}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-trace-50 border border-trace-100 p-3 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-trace-600 flex items-center justify-center flex-shrink-0">
                    <QrCode size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-trace-800">Lote AO-2025-034 · Certificado</p>
                    <p className="text-[10px] text-trace-600 mt-0.5">QR generado · Verificable por el consumidor</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========== FUNCIONALIDADES ========== */}
      <section id="funcionalidades" className="py-20 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Funcionalidades Principales
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Una plataforma integral que transforma la gestión del olivar desde la parcela hasta el consumidor final
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sprout,
                title: "Gestión de Finca Inteligente",
                desc: "Cuadernos de campo digitales, identidad digital de parcela con historial acumulativo y predicciones de producción.",
                features: ["Registro de actividades", "Historial de parcelas", "Alertas agronómicas"],
              },
              {
                icon: QrCode,
                title: "Trazabilidad Completa",
                desc: "Certificados digitales, conexión con almazaras, QR verificable para el consumidor final.",
                features: ["Certificados digitales", "Conexión con almazara", "QR para botella"],
              },
              {
                icon: BarChart3,
                title: "Inteligencia Operativa",
                desc: "Paneles de análisis, comparativas de rendimiento graso, predicción de volumen de campaña.",
                features: ["Dashboard de almazara", "Rankings de calidad", "Predicciones IA"],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border bg-white p-8 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-trace-50 border border-trace-100">
                  <item.icon size={26} className="text-trace-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-1.5">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check size={12} className="text-trace-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
              Del campo al consumidor
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Cada paso del ciclo productivo queda registrado, verificado y conectado
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Identidad Digital", desc: "Cada parcela tiene su identidad digital con historial acumulativo" },
              { icon: Leaf, title: "Registro de Actividades", desc: "Tratamientos, riegos y labores registrados de forma sencilla" },
              { icon: Factory, title: "Conexión con Almazara", desc: "Lotes trazables con certificado digital verificable" },
              { icon: Users, title: "Transparencia al Consumidor", desc: "QR en botella con información de origen verificada" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-trace-600 text-white relative">
                  <item.icon size={28} />
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-trace-700 border-2 border-trace-200">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-trace-700">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Agricultores" },
              { value: "2.500+", label: "Parcelas registradas" },
              { value: "15.000+", label: "Lotes trazados" },
              { value: "98%", label: "Satisfacción" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-trace-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PLANES ========== */}
      <section id="planes" className="py-20 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
              Planes y Precios
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu explotación. Todos incluyen 30 días de prueba gratuita.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                name: "Básico",
                price: "0 €",
                period: "/mes",
                desc: "Para pequeños agricultores",
                features: ["Hasta 2 parcelas", "Registro de actividades", "1 campaña activa", "Soporte por email"],
                cta: "Empezar Gratis",
                highlighted: false,
              },
              {
                icon: Star,
                name: "Profesional",
                price: "29 €",
                period: "/mes",
                desc: "Para fincas medianas",
                features: ["Hasta 15 parcelas", "Trazabilidad completa", "Certificados QR", "Conexión almazara", "Soporte prioritario"],
                cta: "Probar 30 días Gratis",
                highlighted: true,
              },
              {
                icon: Crown,
                name: "Empresa",
                price: "89 €",
                period: "/mes",
                desc: "Para cooperativas y almazaras",
                features: ["Parcelas ilimitadas", "Dashboard de almazara", "Ranking de agricultores", "API e integraciones", "Soporte dedicado"],
                cta: "Contactar Ventas",
                highlighted: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl border p-6 relative ${plan.highlighted
                  ? "border-trace-300 bg-trace-50/30 shadow-lg shadow-trace-100/50 ring-1 ring-trace-200"
                  : "bg-white"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-trace-600 px-3 py-1 text-xs font-semibold text-white">
                    Más popular
                  </span>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <plan.icon size={20} className={plan.highlighted ? "text-trace-600" : "text-gray-400"} />
                  <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500 mb-5">{plan.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 size={14} className="text-trace-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={openRegister}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CASOS DE ÉXITO ========== */}
      <section id="casos" className="py-20 bg-gray-50/50 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
              Casos de Éxito
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Agricultores y cooperativas que ya confían en TRACE IT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Con TRACE IT hemos aumentado nuestro rendimiento graso en un 2% y simplificado toda la burocracia. Ahora puedo demostrar la calidad de mi aceite con datos reales.",
                author: "Antonio López",
                role: "Agricultor · Finca El Olivar, Sevilla",
                metric: "+2% rendimiento graso",
              },
              {
                quote: "La conexión directa con la almazara nos ha ahorrado más de 40 horas al mes en gestión documental. El QR en botella ha sido un éxito con nuestros clientes.",
                author: "María Fernández",
                role: "Directora · Cooperativa La Unión, Jaén",
                metric: "40 h/mes ahorradas",
              },
              {
                quote: "El dashboard de almazara nos permite tomar decisiones basadas en datos reales. El ranking de agricultores ha motivado a toda la cadena de proveedores.",
                author: "Carlos Ruiz",
                role: "Gerente · Almazara del Sur, Córdoba",
                metric: "+15% eficiencia operativa",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border bg-white p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="text-amber-400" fill="#fbbf24" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                  <span className="inline-flex items-center mt-2 rounded-full bg-trace-50 px-2.5 py-1 text-xs font-medium text-trace-700 border border-trace-200">
                    <TrendingUp size={10} className="mr-1" /> {testimonial.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BLOG ========== */}
      <section id="blog" className="py-20 scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
              Blog y Recursos
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Noticias, guías y mejores prácticas del sector oleícola
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tag: "Trazabilidad",
                title: "Cómo la trazabilidad digital está transformando el sector del aceite de oliva",
                excerpt: "La digitalización de la cadena de valor oleícola permite a agricultores y almazaras demostrar la calidad de sus productos con datos verificables...",
                date: "15 Feb 2026",
                readTime: "5 min",
              },
              {
                tag: "Normativa",
                title: "Nueva normativa europea de cuaderno de campo digital: lo que necesitas saber",
                excerpt: "A partir de 2027 será obligatorio el cuaderno de campo digital. Te explicamos los requisitos y cómo prepararte con tiempo...",
                date: "8 Feb 2026",
                readTime: "7 min",
              },
              {
                tag: "Guía práctica",
                title: "Optimización del rendimiento graso: 5 claves para mejorar tu producción",
                excerpt: "Factores como el momento de cosecha, la variedad y los tratamientos aplicados determinan el rendimiento graso de tu aceituina...",
                date: "1 Feb 2026",
                readTime: "4 min",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                className="rounded-2xl border bg-white overflow-hidden card-hover group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Image placeholder */}
                <div className="h-40 bg-gradient-to-br from-trace-100 via-trace-50 to-green-50 flex items-center justify-center">
                  <BookOpen size={32} className="text-trace-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="rounded-full bg-trace-50 px-2 py-0.5 text-xs font-medium text-trace-700">{post.tag}</span>
                    <span className="text-xs text-gray-400">{post.date} · {post.readTime}</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-trace-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-trace-600">
                    Leer más <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Empieza a digitalizar tu explotación hoy
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Únete a cientos de agricultores que ya confían en TRACE IT para certificar su calidad y optimizar su producción.
          </p>
          <Button size="lg" className="gap-2 text-base" onClick={openRegister}>
            Comenzar prueba gratuita
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <Logo size="sm" />
              <a href="#funcionalidades" className="text-sm text-gray-500 hover:text-gray-900">Funcionalidades</a>
              <a href="#planes" className="text-sm text-gray-500 hover:text-gray-900">Planes</a>
              <a href="#casos" className="text-sm text-gray-500 hover:text-gray-900">Casos de Éxito</a>
              <a href="#blog" className="text-sm text-gray-500 hover:text-gray-900">Blog</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-600"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600"><Facebook size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600"><Instagram size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-600"><Youtube size={18} /></a>
            </div>
            <p className="text-sm text-gray-400">© 2026 TRACE IT. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
