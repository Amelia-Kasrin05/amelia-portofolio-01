"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
  Award,
  Calendar,
  Folder,
  Star,
  FileText,
  Download,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react"

// Enhanced Button Component with more animations
const Button = ({ children, className = "", variant = "default", size = "default", onClick, ...props }: any) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-110 hover:shadow-2xl active:scale-95 hover:rotate-1 group relative overflow-hidden"

  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-300 shadow-lg",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 bg-transparent hover:border-indigo-700 hover:text-indigo-700 hover:shadow-blue-200",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 hover:shadow-gray-300",
  }

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-8 text-base",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></span>
      <span className="relative z-10 flex items-center gap-2 group-hover:animate-pulse">{children}</span>
    </button>
  )
}

// Enhanced Animated Card Components
const Card = ({ children, className = "", ...props }: any) => (
  <div
    className={`rounded-xl border bg-white shadow-lg transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 group relative overflow-hidden backdrop-blur-sm ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">{children}</div>
  </div>
)

const CardHeader = ({ children, className = "", ...props }: any) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }: any) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight transition-all duration-500 group-hover:text-blue-700 ${className}`}
    {...props}
  >
    {children}
  </h3>
)

const CardDescription = ({ children, className = "", ...props }: any) => (
  <p
    className={`text-sm text-gray-600 transition-all duration-500 group-hover:text-indigo-600 ${className}`}
    {...props}
  >
    {children}
  </p>
)

const CardContent = ({ children, className = "", ...props }: any) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

// Enhanced Animated Badge Component
const Badge = ({ children, className = "", variant = "default", ...props }: any) => {
  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-blue-100 hover:to-indigo-100 hover:text-blue-800",
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-500 hover:scale-125 hover:shadow-lg cursor-default hover:rotate-3 animate-float-badge ${variants[variant]} ${className}`}
      {...props}
    >
      <Sparkles className="w-3 h-3 mr-1 animate-spin-slow" />
      {children}
    </div>
  )
}

// Enhanced Intersection Observer Hook
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return [setRef, isInView] as const
}

// Enhanced Mouse Trail Effect Hook
const useMouseTrail = () => {
  useEffect(() => {
    const trail = document.getElementById("mouse-trail")
    if (!trail) return

    const handleMouseMove = (e: MouseEvent) => {
      const dots = trail.children
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i] as HTMLElement
        setTimeout(() => {
          dot.style.left = e.clientX + "px"
          dot.style.top = e.clientY + "px"
        }, i * 30)
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])
}

// Enhanced Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0, ...props }: any) => {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

// CV Download Function
const downloadCV = () => {
  const link = document.createElement("a")
  link.href = "/cv/Amelia_Kasrin_CV.pdf"
  link.download = "Amelia_Kasrin_CV.pdf"
  link.target = "_blank"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Enhanced Background Effects Component
const BackgroundEffects = () => {
  return (
    <>
      {/* Enhanced Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 animate-gradient-shift-enhanced"></div>

        {/* Enhanced Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl animate-float-enhanced"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-gradient-to-r from-indigo-200/25 to-purple-200/25 rounded-full blur-xl animate-float-reverse-enhanced"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl animate-float-slow-enhanced"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl animate-float-delayed-enhanced"></div>

        {/* Enhanced Geometric Patterns */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/40 rotate-45 animate-spin-enhanced"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-indigo-400/40 rotate-45 animate-spin-reverse-enhanced"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500/40 rotate-45 animate-spin-enhanced"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-indigo-500/40 rotate-45 animate-spin-reverse-enhanced"></div>

        {/* Enhanced Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q150,50 300,100 T600,100"
            stroke="url(#lineGradientBlue)"
            strokeWidth="3"
            fill="none"
            className="animate-draw-line-enhanced"
          />
          <path
            d="M100,0 Q200,150 300,50 T500,100"
            stroke="url(#lineGradientBlue)"
            strokeWidth="2"
            fill="none"
            className="animate-draw-line-reverse-enhanced"
          />
          <path
            d="M50,200 Q250,100 450,200 T750,200"
            stroke="url(#lineGradientBlue)"
            strokeWidth="2.5"
            fill="none"
            className="animate-draw-line-wave"
          />
        </svg>

        {/* Enhanced Particle System */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-particle-enhanced"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 8}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-16 gap-6 h-full">
            {[...Array(256)].map((_, i) => (
              <div
                key={i}
                className="border border-blue-300 animate-grid-fade-enhanced"
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-icon"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              {i % 4 === 0 && <Code className="w-6 h-6 text-blue-300/20" />}
              {i % 4 === 1 && <Zap className="w-5 h-5 text-indigo-300/20" />}
              {i % 4 === 2 && <Sparkles className="w-4 h-4 text-blue-400/20" />}
              {i % 4 === 3 && <Heart className="w-5 h-5 text-indigo-400/20" />}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Interactive Mouse Trail */}
      <div id="mouse-trail" className="fixed pointer-events-none z-50">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-full animate-trail-enhanced"
            style={{ animationDelay: `${i * 0.08}s` }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  // Add mouse trail hook
  useMouseTrail()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "skills", "certificates", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = {
    programming: ["PHP", "JavaScript", "Python", "SQL"],
    frameworks: ["Laravel", "Node.js", "Express.js", "Bootstrap"],
    database: ["MySQL", "PostgreSQL"],
    tools: ["Visual Studio Code", "GitHub", "XAMPP", "Figma", "Notion"],
    softSkills: ["Komunikasi", "Teamwork", "Problem Solving", "Inisiatif", "Adaptif", "Time Management"],
  }

  const certificates = [
    {
      title: "Data & Software Engineering",
      issuer: "RevoU Tech Academy - Studi Independen Bersertifikat",
      date: "August 2023 – December 2023",
      grade: "96/100 (A)",
      certificateNumber: "CMP/12-23/6658616",
      image: "/placeholder.svg?height=400&width=600&text=RevoU+Certificate",
      modules: [
        {
          name: "Data Processing in Data Analytics",
          hours: 180,
          score: "90/100",
          topics: ["Understanding Business Problem", "Data Cleaning", "Introduction to SQL", "SQL Implementation"],
        },
        {
          name: "Data Visualisation & Communication in Data Analytics",
          hours: 180,
          score: "100/100",
          topics: ["Python for Data Analysis", "Data Visualization", "Data Communication", "Capstone Project"],
        },
        {
          name: "Introduction to Software Engineering",
          hours: 180,
          score: "100/100",
          topics: [
            "Introduction to Software Engineering",
            "Advanced HTML and CSS",
            "JavaScript Programming Fundamentals",
            "Building a simple game using JavaScript",
          ],
        },
        {
          name: "Fundamental Full-Stack Web Development in Software Engineering",
          hours: 180,
          score: "100/100",
          topics: [
            "Introduction to Backend Development and Node.js",
            "Backend Development with Express.js",
            "Fullstack integration",
            "Capstone Project",
          ],
        },
        {
          name: "Career Development",
          hours: 40,
          score: "90/100",
          topics: [
            "Self-Selling Mindset",
            "Discovering 'U' in Job Seeking Process",
            "Basic Asset Workshop",
            "Networking Starter Kit",
          ],
        },
      ],
      skills: [
        "Node.js",
        "Express.js",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "Python",
        "Data Analysis",
        "Dashboard Visualization",
        "Full-Stack Development",
      ],
      description:
        "Comprehensive program covering fullstack development and data analysis with capstone project achieving excellent results. Completed 5 modules with total 760 hours of intensive learning.",
      type: "certificate",
    },
    {
      title: "Surat Keterangan Magang",
      issuer: "Dinas Komunikasi dan Informatika, Padang",
      date: "August 2024 – September 2024",
      image: "/placeholder.svg?height=300&width=400&text=Internship+Certificate",
      skills: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "Web Development", "UI/UX Design"],
      description:
        "Internship completion certificate for web programming position, working on transportation system project (PATRAN).",
      type: "internship",
    },
  ]

  const projects = [
    {
      title: "PATRAN (Padang Transportasi Rancak)",
      description:
        "Aplikasi web berbasis peta digital untuk visualisasi rute transportasi di Kota Padang. Dibangun selama magang di Dinas Komunikasi dan Informatika dengan fokus pada pengelolaan data kendaraan, harga, dan rute. Sistem ini dilengkapi dengan dashboard admin dan sistem penilaian kriteria bobot.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projek%20pkl.jpg-1zhgex3G4fhEpjAvpunlQCxYactbJw.jpeg",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
      category: "Web Application",
      status: "Completed",
      date: "August 2024 – September 2024",
      features: [
        "Visualisasi rute berbasis peta digital",
        "Sistem penilaian bobot kriteria",
        "Dashboard admin untuk monitoring",
        "Pengelolaan database kendaraan dan harga",
        "Interface pengguna yang responsif",
        "Sistem manajemen rute transportasi",
        "Dokumentasi teknis lengkap",
      ],
      highlights: ["Government Project", "Internship Project", "Transportation System", "Criteria Analysis"],
      role: "Programmer Web - Magang",
      company: "Dinas Komunikasi dan Informatika, Padang",
    },
    {
      title: "Sistem Informasi Pembayaran Online (Aulia Busana)",
      description:
        "Tugas Akhir berupa sistem informasi pembayaran online berbasis Laravel dengan integrasi API QRIS. Fokus pada pengelolaan transaksi digital dan manajemen pengguna dengan keamanan tinggi. Sistem dilengkapi dengan dashboard analytics yang menampilkan grafik pendapatan dan statistik bisnis real-time.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/skripsi%20projek.jpg-DtQKFXaZWMSTDgpUrp6aaLekuwfkyt.jpeg",
      technologies: ["Laravel", "PHP", "MySQL", "QRIS API", "Bootstrap", "JavaScript", "Chart.js"],
      category: "Final Project",
      status: "Completed",
      date: "2024 – 2025",
      features: [
        "Dashboard analytics dengan grafik real-time",
        "Integrasi API QRIS untuk pembayaran",
        "Manajemen kategori, produk, member, dan supplier",
        "Sistem keamanan berlapis",
        "Laporan transaksi dan statistik bisnis",
        "Interface admin yang user-friendly",
        "Monitoring pendapatan harian",
      ],
      highlights: ["Final Thesis", "Payment Integration", "Laravel Framework", "Business Analytics"],
      role: "Developer",
      company: "Universitas Putra Indonesia YPTK",
    },
    {
      title: "Portal Berita Medan 30 - RevoU Capstone",
      description:
        "Proyek capstone dalam program Studi Independen RevoU yang mencakup pengembangan portal berita fullstack dengan integrasi frontend-backend, data analysis, dan deployment. Portal berita ini dilengkapi dengan sistem manajemen konten, kategori berita, dan interface yang responsif. Mencapai skor akhir 96/100.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/revou%20projek.jpg-WhpWJssnTpKqAb3MsQFOaW9QZq0a2R.jpeg",
      technologies: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "SQL", "Python"],
      category: "Capstone Project",
      status: "Completed",
      date: "August 2023 – December 2023",
      features: [
        "Portal berita dengan sistem CMS",
        "Manajemen kategori dan artikel",
        "Interface responsif multi-device",
        "Sistem pencarian dan filter berita",
        "Dashboard admin untuk pengelolaan konten",
        "Data analysis dan visualisasi traffic",
        "Deployment dan dokumentasi lengkap",
      ],
      highlights: ["Capstone Project", "Team Leadership", "Excellent Grade (A)", "News Portal", "CMS"],
      role: "Project Leader",
      company: "RevoU Tech Academy",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundEffects />

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-blue-200/50 transition-all duration-500 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-110 transition-all duration-500 cursor-pointer animate-pulse">
              AK
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "education", label: "Education" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "certificates", label: "Certificates" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" },
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-500 hover:text-blue-600 hover:scale-125 hover:-translate-y-1 relative group ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse rounded-full"></div>
                  )}
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Enhanced Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-24 h-24 bg-blue-300/20 rounded-full animate-float-enhanced"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-indigo-300/20 rounded-full animate-float-delayed-enhanced"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-blue-400/20 rounded-full animate-float-enhanced"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-indigo-200/20 rounded-full animate-float-delayed-enhanced"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up-enhanced">
            {/* Enhanced Profile Photo */}
            <div className="relative mb-12 group">
              {/* Enhanced Background decorative elements */}
              <div className="absolute inset-0 -m-6">
                <div className="w-full h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full opacity-30 animate-pulse-enhanced"></div>
              </div>
              <div className="absolute inset-0 -m-4">
                <div className="w-full h-full bg-gradient-to-r from-blue-300 to-indigo-400 rounded-full opacity-40 animate-ping-enhanced"></div>
              </div>
              <div className="absolute inset-0 -m-2">
                <div className="w-full h-full bg-gradient-to-r from-blue-200 to-indigo-300 rounded-full opacity-50 animate-spin-slow"></div>
              </div>

              {/* Enhanced Main photo container */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full p-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-2xl transform hover:scale-110 transition-all duration-700 hover:rotate-6 group-hover:shadow-blue-500/50">
                  <div className="w-full h-full rounded-full p-1 bg-white">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amelia-kasrin.jpg-mbBkHY0n0sVU1TMijOM3I8snSZ4dE9.jpeg"
                      alt="Amelia Kasrin"
                      className="w-full h-full rounded-full object-cover shadow-lg hover:shadow-2xl transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Enhanced Floating elements */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg animate-bounce-enhanced flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white animate-spin" />
                </div>
                <div
                  className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg animate-bounce-enhanced flex items-center justify-center"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Zap className="w-4 h-4 text-white animate-pulse" />
                </div>
                <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-lg animate-pulse-enhanced flex items-center justify-center">
                  <Heart className="w-3 h-3 text-white animate-ping" />
                </div>
              </div>

              {/* Enhanced Glow effect */}
              <div className="absolute inset-0 -m-12 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-full blur-2xl animate-pulse-glow"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-slide-up-enhanced">
              {["A", "m", "e", "l", "i", "a", " ", "K", "a", "s", "r", "i", "n"].map((letter, index) => (
                <span
                  key={index}
                  className="inline-block hover:animate-bounce-enhanced hover:text-blue-500 transition-all duration-300 hover:scale-125"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h1>

            <p
              className="text-xl md:text-2xl bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent mb-8 max-w-3xl mx-auto animate-slide-up-enhanced"
              style={{ animationDelay: "0.3s" }}
            >
              Information Systems Graduate || Web Developer || Data Analyst
            </p>
            <p
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up-enhanced"
              style={{ animationDelay: "0.6s" }}
            >
              Transforming Ideas into Digital Solutions with Laravel, JavaScript, and Modern Web Technologies.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-enhanced"
              style={{ animationDelay: "0.9s" }}
            >
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                <Mail className="w-5 h-5 mr-2 animate-bounce" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" onClick={downloadCV}>
                <Download className="w-5 h-5 mr-2 animate-pulse" />
                Download CV
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-enhanced">
            <ChevronDown className="w-8 h-8 text-blue-400 hover:text-indigo-600 transition-colors duration-300 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand-enhanced rounded-full"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-700 hover:scale-105">
                <CardContent className="p-0">
                  <User className="w-12 h-12 text-blue-600 mb-6 animate-pulse-enhanced hover:animate-spin-enhanced transition-all duration-500" />
                  <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-500 mb-4">
                    Lulusan Sistem Informasi dengan fokus pada pengembangan aplikasi web berbasis Laravel, JavaScript,
                    dan teknologi fullstack. Memiliki pengalaman dalam membangun sistem informasi dan aplikasi web
                    menggunakan berbagai bahasa pemrograman serta mengelola database relasional.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors duration-500">
                    Terbiasa bekerja dalam tim, menyusun dokumentasi teknis, dan memiliki semangat tinggi dalam belajar
                    teknologi baru. Siap mendukung pengembangan sistem informasi melalui solusi digital yang efisien dan
                    inovatif.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400} className="space-y-6">
              {[
                { icon: MapPin, text: "Kota Padang, Sumatera Barat" },
                { icon: Phone, text: "+6282217712834" },
                { icon: Mail, text: "ameliakasrin05@gmail.com" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-blue-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-700 transition-colors duration-500 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}

              <div className="flex space-x-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/ameliakasrin", "_blank")}
                  className="group"
                >
                  <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://linkedin.com/in/amelia-kasrin/", "_blank")}
                  className="group"
                >
                  <Linkedin className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                  LinkedIn
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand-enhanced rounded-full"></div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="max-w-4xl mx-auto shadow-2xl border-0 hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-500">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 animate-pulse-enhanced hover:animate-spin-enhanced transition-all duration-500" />
                  <div>
                    <CardTitle className="text-2xl text-white">S.Kom - Sistem Informasi</CardTitle>
                    <CardDescription className="text-blue-100">Universitas Putra Indonesia YPTK Padang</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-4 rounded-lg transition-all duration-500 hover:scale-105">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                      Duration
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                      September 2021 – Mei 2025
                    </p>
                  </div>
                  <div className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-4 rounded-lg transition-all duration-500 hover:scale-105">
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                      GPA
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">3.46/4.00</p>
                  </div>
                </div>
                <div className="mt-6 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-4 rounded-lg transition-all duration-500 hover:scale-105">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                    Tugas Akhir
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                    Sistem Informasi Pembayaran Online berbasis Laravel dengan integrasi API QRIS. Fokus pada
                    pengelolaan transaksi digital dan manajemen pengguna.
                  </p>
                </div>
                <div className="mt-4 group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-4 rounded-lg transition-all duration-500 hover:scale-105">
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                    Activities
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                    Aktif dalam organisasi kemahasiswaan dan kegiatan jurusan, termasuk seminar dan workshop teknologi
                    informasi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-white to-indigo-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand-enhanced rounded-full"></div>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                icon: Briefcase,
                title: "Programmer Web - Magang",
                company: "Dinas Komunikasi dan Informatika, Padang",
                period: "August 2024 – September 2024",
                tasks: [
                  "Membangun aplikasi web transportasi menggunakan PHP, JavaScript, HTML, dan CSS.",
                  "Merancang UI/UX serta backend visualisasi rute berbasis peta digital.",
                  "Mengelola database kendaraan, harga, dan rute menggunakan MySQL.",
                  "Melakukan pengujian sistem dan menyusun dokumentasi teknis.",
                ],
              },
              {
                icon: Code,
                title: "Project Leader - Data & Software Engineering",
                company: "RevoU Tech Academy - Studi Independen Bersertifikat",
                period: "August 2023 – December 2023",
                tasks: [
                  "Memimpin proyek pengembangan aplikasi fullstack menggunakan Node.js, Express.js, HTML, CSS, dan JavaScript.",
                  "Mengerjakan data analysis dengan SQL dan Python, serta membuat dashboard visualisasi.",
                  "Mengerjakan capstone project untuk integrasi frontend-backend dan deployment.",
                  "Menyelesaikan proyek dengan skor akhir 96/100 (A).",
                ],
              },
              {
                icon: GraduationCap,
                title: "Sekretaris",
                company: "UKM IT Cybernetix, Padang",
                period: "Mei 2023 – December 2023",
                tasks: [
                  "Mengelola administrasi, notulensi rapat, dan surat menyurat organisasi.",
                  "Menjadi penghubung komunikasi internal dan eksternal UKM.",
                  "Mendukung kelancaran kegiatan dan program kerja organisasi secara terstruktur.",
                ],
              },
            ].map((exp, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="shadow-2xl border-0 hover:shadow-blue-500/20 transition-all duration-700 group hover:scale-105">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-500">
                          <exp.icon className="w-8 h-8 text-blue-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-blue-700 transition-colors duration-500">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg group-hover:text-indigo-600 transition-colors duration-500">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="group-hover:bg-blue-100 group-hover:text-blue-800">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-gray-700">
                      {exp.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start space-x-3 group/item hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-3 rounded-lg transition-all duration-500 hover:scale-105"
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-500"></div>
                          <span className="group-hover/item:text-blue-700 transition-colors duration-500">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand-enhanced rounded-full"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Programming Languages", items: skills.programming },
              { title: "Frameworks & Libraries", items: skills.frameworks },
              { title: "Database", items: skills.database },
              { title: "Tools & Platforms", items: skills.tools },
              { title: "Soft Skills", items: skills.softSkills },
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="shadow-2xl border-0 hover:shadow-blue-500/20 transition-all duration-700 group hover:scale-110 hover:rotate-1">
                  <CardHeader className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-t-xl group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-500">
                    <CardTitle className="text-lg text-white group-hover:scale-110 transition-transform duration-500 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {category.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs animate-fade-in hover:bg-blue-100 hover:text-blue-800 hover:border-blue-300 transition-all duration-500"
                          style={{ animationDelay: `${skillIndex * 100}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certificates Section */}
      <section id="certificates" className="py-20 bg-gradient-to-br from-white to-indigo-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
              Certificates
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand-enhanced rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my skills and expertise in web development and
              data analysis.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="shadow-2xl border-0 hover:shadow-blue-500/20 transition-all duration-700 group overflow-hidden hover:scale-105 hover:rotate-1">
                  {/* Certificate Image */}
                  <div className="relative h-48 flex-shrink-0 overflow-hidden">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="default"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      >
                        <Award className="w-3 h-3 mr-1 animate-pulse" />
                        {cert.grade || "Certified"}
                      </Badge>
                    </div>
                    {cert.certificateNumber && (
                      <div className="absolute bottom-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 shadow-lg">
                          <FileText className="w-3 h-3 mr-1" />
                          {cert.certificateNumber}
                        </Badge>
                      </div>
                    )}
                    {cert.type === "internship" && (
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 shadow-lg"
                        >
                          <FileText className="w-3 h-3 mr-1 animate-bounce" />
                          Internship
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Certificate Content */}
                  <CardContent className="p-6">
                    {/* Header Info */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-1">{cert.issuer}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-1 animate-pulse" />
                        {cert.date}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                        {cert.description}
                      </p>
                    </div>

                    {/* Modules (for RevoU certificate) */}
                    {cert.modules && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-500">
                          Course Modules:
                        </h4>
                        <div className="space-y-2">
                          {cert.modules.map((module, moduleIndex) => (
                            <div
                              key={moduleIndex}
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                            >
                              <div className="flex justify-between items-start mb-1">
                                <h5 className="font-medium text-gray-800 text-sm">{module.name}</h5>
                                <Badge variant="secondary" className="text-xs">
                                  {module.score}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600">{module.hours} hours</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                        Skills Covered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="text-xs hover:bg-blue-100 hover:text-blue-800 transition-all duration-500 hover:scale-110"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand-enhanced rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A showcase of my projects demonstrating skills in web development, system analysis, and problem-solving.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="shadow-2xl border-0 hover:shadow-blue-500/20 transition-all duration-700 group overflow-hidden h-full hover:scale-105 hover:rotate-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800 shadow-lg">
                        <Folder className="w-3 h-3 mr-1 animate-pulse" />
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={
                          project.status === "Completed"
                            ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                            : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-gray-500 text-sm mb-2">
                            <Calendar className="w-4 h-4 mr-1 animate-pulse" />
                            {project.date}
                          </div>
                          <p className="text-blue-600 font-medium text-sm mb-3">
                            {project.role} - {project.company}
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                          Key Features:
                        </h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-500"
                            >
                              <Star className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="text-xs hover:bg-blue-100 hover:text-blue-800 transition-all duration-500 hover:scale-110"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, highlightIndex) => (
                            <Badge
                              key={highlightIndex}
                              variant="default"
                              className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 hover:scale-110 transition-transform duration-300"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white to-indigo-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-500">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto animate-expand-enhanced rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect and create
              something amazing together!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300} className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Email Contact */}
                  <div
                    className="text-center group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-6 rounded-xl transition-all duration-500 cursor-pointer hover:scale-110"
                    onClick={() =>
                      window.open(
                        "mailto:ameliakasrin05@gmail.com?subject=Hello%20Amelia&body=Hi%20Amelia,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                        "_blank",
                      )
                    }
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 group-hover:scale-125 transition-all duration-500 shadow-lg">
                      <Mail className="w-10 h-10 text-blue-600 group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                      Email
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 text-sm">
                      ameliakasrin05@gmail.com
                    </p>
                    <p className="text-xs text-blue-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Click to send email
                    </p>
                  </div>

                  {/* WhatsApp Contact */}
                  <div
                    className="text-center group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-6 rounded-xl transition-all duration-500 cursor-pointer hover:scale-110"
                    onClick={() =>
                      window.open(
                        "https://wa.me/6282217712834?text=Hi%20Amelia,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
                        "_blank",
                      )
                    }
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 group-hover:scale-125 transition-all duration-500 shadow-lg">
                      <Phone className="w-10 h-10 text-blue-600 group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 text-sm">
                      +62 822-1771-2834
                    </p>
                    <p className="text-xs text-blue-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Click to chat on WhatsApp
                    </p>
                  </div>

                  {/* Location Contact */}
                  <div
                    className="text-center group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 p-6 rounded-xl transition-all duration-500 cursor-pointer hover:scale-110"
                    onClick={() => window.open("https://www.google.com/maps/search/Padang,+Sumatera+Barat", "_blank")}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 group-hover:scale-125 transition-all duration-500 shadow-lg">
                      <MapPin className="w-10 h-10 text-blue-600 group-hover:animate-bounce" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-500">
                      Location
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 text-sm">
                      Kota Padang, Sumatera Barat
                    </p>
                    <p className="text-xs text-blue-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Click to view on Google Maps
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "mailto:ameliakasrin05@gmail.com?subject=Hello%20Amelia&body=Hi%20Amelia,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                        "_blank",
                      )
                    }
                    className="group"
                  >
                    <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Send Email
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      window.open(
                        "https://wa.me/6282217712834?text=Hi%20Amelia,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
                        "_blank",
                      )
                    }
                    className="group"
                  >
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Chat on WhatsApp
                  </Button>

                  <Button size="lg" variant="secondary" onClick={downloadCV} className="group">
                    <Download className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-500" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-500">
            &copy; {new Date().getFullYear()} Amelia Kasrin. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Heart className="w-4 h-4 text-blue-400 animate-pulse" />
            <Sparkles className="w-4 h-4 text-indigo-400 animate-spin-slow" />
            <Zap className="w-4 h-4 text-blue-500 animate-bounce" />
          </div>
        </div>
      </footer>
    </div>
  )
}
