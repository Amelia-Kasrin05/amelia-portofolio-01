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
  Download,
  Sparkles,
  Database,
  BarChart3,
  Cpu,
  Network,
  Terminal,
  Zap,
} from "lucide-react"

// Enhanced Button Component
const Button = ({ children, className = "", variant = "default", size = "default", onClick, ...props }: any) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105 active:scale-95 group relative overflow-hidden"

  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  }

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-12 px-6 text-base",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}

// Clean Card Components
const Card = ({ children, className = "", ...props }: any) => (
  <div
    className={`rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${className}`}
    {...props}
  >
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }: any) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }: any) => (
  <h3
    className={`text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </h3>
)

const CardDescription = ({ children, className = "", ...props }: any) => (
  <p className={`text-sm text-gray-600 mt-1 ${className}`} {...props}>
    {children}
  </p>
)

const CardContent = ({ children, className = "", ...props }: any) => (
  <div className={`px-6 pb-6 ${className}`} {...props}>
    {children}
  </div>
)

// Clean Badge Component
const Badge = ({ children, className = "", variant = "default", ...props }: any) => {
  const variants = {
    default: "bg-blue-100 text-blue-800 border-blue-200",
    secondary: "bg-gray-100 text-gray-800 border-gray-200",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

// Intersection Observer Hook
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

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0, ...props }: any) => {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

// Enhanced Technology Background Component with Full Coverage
const TechBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {/* Base gradient background that covers entire viewport */}
    <div className="absolute inset-0 w-full h-[200vh] bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/60 animate-gradient-shift"></div>

    {/* Floating geometric shapes with tech theme - positioned across full height */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-2xl animate-float-tech"></div>
    <div className="absolute top-[40vh] right-10 w-40 h-40 bg-gradient-to-r from-indigo-200/25 to-purple-200/25 rounded-full blur-2xl animate-float-delayed"></div>
    <div className="absolute top-[80vh] left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse-glow"></div>
    <div className="absolute top-[120vh] right-1/3 w-36 h-36 bg-gradient-to-r from-purple-200/25 to-pink-200/25 rounded-full blur-2xl animate-float-tech"></div>
    <div className="absolute top-[160vh] left-10 w-28 h-28 bg-gradient-to-r from-blue-300/30 to-indigo-300/30 rounded-full blur-xl animate-float-delayed"></div>

    {/* Technology Icons Floating - distributed across full scroll height */}
    <div className="absolute inset-0 w-full h-[200vh]">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-tech opacity-10"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${5 + i * 8}vh`, // Distribute across scroll height
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {i % 6 === 0 && <Code className="w-8 h-8 text-blue-500" />}
          {i % 6 === 1 && <Database className="w-7 h-7 text-indigo-500" />}
          {i % 6 === 2 && <BarChart3 className="w-6 h-6 text-blue-600" />}
          {i % 6 === 3 && <Cpu className="w-8 h-8 text-indigo-600" />}
          {i % 6 === 4 && <Network className="w-7 h-7 text-blue-400" />}
          {i % 6 === 5 && <Terminal className="w-6 h-6 text-indigo-400" />}
        </div>
      ))}
    </div>

    {/* Code Rain Effect - continuous across scroll */}
    <div className="absolute inset-0 w-full h-[200vh]">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute text-blue-300/20 font-mono text-sm animate-code-rain"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 200}vh`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${12 + Math.random() * 6}s`,
          }}
        >
          {
            [
              "const",
              "function",
              "return",
              "data",
              "array",
              "object",
              "async",
              "await",
              "class",
              "import",
              "export",
              "useState",
              "useEffect",
              "props",
              "state",
            ][i]
          }
        </div>
      ))}
    </div>

    {/* Binary Code Background - extended coverage */}
    <div className="absolute inset-0 w-full h-[200vh] opacity-5">
      {[...Array(35)].map((_, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs text-blue-600 animate-binary-scroll"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 200}vh`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        >
          {Math.random().toString(2).substring(2, 12)}
        </div>
      ))}
    </div>

    {/* Data Flow Lines - extended SVG */}
    <svg className="absolute inset-0 w-full h-[200vh] opacity-20" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#6366f1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Multiple flowing data lines across different sections */}
      <path
        d="M0,100 Q200,50 400,100 T800,100"
        stroke="url(#dataGradient)"
        strokeWidth="2"
        fill="none"
        className="animate-data-flow"
      />
      <path
        d="M100,300 Q300,250 500,300 T900,300"
        stroke="url(#dataGradient)"
        strokeWidth="1.5"
        fill="none"
        className="animate-data-flow"
        style={{ animationDelay: "3s" }}
      />
      <path
        d="M0,500 Q250,450 500,500 T1000,500"
        stroke="url(#dataGradient)"
        strokeWidth="2"
        fill="none"
        className="animate-data-flow"
        style={{ animationDelay: "6s" }}
      />
      <path
        d="M150,700 Q350,650 550,700 T950,700"
        stroke="url(#dataGradient)"
        strokeWidth="1.5"
        fill="none"
        className="animate-data-flow"
        style={{ animationDelay: "9s" }}
      />
      <path
        d="M50,900 Q300,850 550,900 T1050,900"
        stroke="url(#dataGradient)"
        strokeWidth="2"
        fill="none"
        className="animate-data-flow"
        style={{ animationDelay: "12s" }}
      />

      {/* Circuit-like patterns distributed across height */}
      <g className="animate-circuit-pulse">
        <path
          d="M50,150 L150,150 L150,250 L250,250"
          stroke="url(#circuitGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
        />
        <path
          d="M300,400 L400,400 L400,300 L500,300"
          stroke="url(#circuitGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3,3"
        />
        <path
          d="M600,650 L700,650 L700,550 L800,550"
          stroke="url(#circuitGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M200,850 L300,850 L300,750 L400,750"
          stroke="url(#circuitGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="6,6"
        />
      </g>

      {/* Network nodes distributed across scroll height */}
      <g>
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={50 + ((i * 60) % 1000)}
            cy={150 + Math.floor(i / 15) * 200 + Math.sin(i) * 50}
            r="4"
            fill="#3b82f6"
            opacity="0.6"
            className="animate-network-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </g>
    </svg>

    {/* Matrix-style falling characters - extended coverage */}
    <div className="absolute inset-0 w-full h-[200vh]">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute font-mono text-green-400/10 text-lg animate-matrix-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 200}vh`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        >
          {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
        </div>
      ))}
    </div>

    {/* Tech particles - extended across full scroll */}
    <div className="absolute inset-0 w-full h-[200vh]">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-tech-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 200}vh`,
            animationDelay: `${Math.random() * 18}s`,
            animationDuration: `${15 + Math.random() * 8}s`,
          }}
        ></div>
      ))}
    </div>

    {/* Chart/Graph elements distributed across sections */}
    <div className="absolute bottom-10 right-10 opacity-10">
      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <rect
            key={i}
            x={i * 25}
            y={100 - (20 + Math.random() * 60)}
            width="20"
            height={20 + Math.random() * 60}
            fill="url(#chartGradient)"
            className="animate-chart-grow"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>

    {/* Additional chart elements in different sections */}
    <div className="absolute top-[60vh] left-10 opacity-8">
      <svg width="150" height="80" xmlns="http://www.w3.org/2000/svg">
        {[...Array(6)].map((_, i) => (
          <rect
            key={i}
            x={i * 25}
            y={80 - (15 + Math.random() * 50)}
            width="18"
            height={15 + Math.random() * 50}
            fill="url(#chartGradient)"
            className="animate-chart-grow"
            style={{ animationDelay: `${i * 0.3 + 2}s` }}
          />
        ))}
      </svg>
    </div>

    <div className="absolute top-[120vh] right-20 opacity-8">
      <svg width="180" height="90" xmlns="http://www.w3.org/2000/svg">
        {[...Array(7)].map((_, i) => (
          <rect
            key={i}
            x={i * 25}
            y={90 - (18 + Math.random() * 55)}
            width="20"
            height={18 + Math.random() * 55}
            fill="url(#chartGradient)"
            className="animate-chart-grow"
            style={{ animationDelay: `${i * 0.4 + 4}s` }}
          />
        ))}
      </svg>
    </div>

    {/* Rotating tech elements distributed across scroll */}
    <div className="absolute top-[30vh] right-1/4 opacity-20">
      <div className="w-16 h-16 border-2 border-blue-400/50 rounded-full animate-rotate-slow">
        <div className="w-8 h-8 bg-blue-500/30 rounded-full m-3 animate-rotate-reverse"></div>
      </div>
    </div>

    <div className="absolute top-[70vh] left-1/4 opacity-15">
      <div className="w-12 h-12 border border-indigo-400/50 rotate-45 animate-scale-pulse">
        <div className="w-6 h-6 bg-indigo-500/30 m-2.5 animate-rotate-slow"></div>
      </div>
    </div>

    <div className="absolute top-[110vh] right-1/3 opacity-18">
      <div className="w-14 h-14 border-2 border-purple-400/50 rounded-full animate-rotate-reverse">
        <div className="w-7 h-7 bg-purple-500/30 rounded-full m-2.5 animate-rotate-slow"></div>
      </div>
    </div>

    <div className="absolute top-[150vh] left-1/3 opacity-16">
      <div className="w-10 h-10 border border-cyan-400/50 rotate-45 animate-scale-pulse">
        <div className="w-5 h-5 bg-cyan-500/30 m-2 animate-rotate-reverse"></div>
      </div>
    </div>

    {/* Glowing orbs distributed across scroll height */}
    <div className="absolute top-[25vh] left-1/3 w-4 h-4 bg-blue-500/30 rounded-full animate-tech-glow blur-sm"></div>
    <div
      className="absolute top-[45vh] right-1/3 w-6 h-6 bg-indigo-500/25 rounded-full animate-tech-glow blur-sm"
      style={{ animationDelay: "3s" }}
    ></div>
    <div
      className="absolute top-[65vh] left-1/4 w-5 h-5 bg-purple-500/28 rounded-full animate-tech-glow blur-sm"
      style={{ animationDelay: "6s" }}
    ></div>
    <div
      className="absolute top-[85vh] right-1/4 w-4 h-4 bg-cyan-500/32 rounded-full animate-tech-glow blur-sm"
      style={{ animationDelay: "9s" }}
    ></div>
    <div
      className="absolute top-[105vh] left-2/3 w-6 h-6 bg-blue-500/28 rounded-full animate-tech-glow blur-sm"
      style={{ animationDelay: "12s" }}
    ></div>
    <div
      className="absolute top-[125vh] right-2/3 w-5 h-5 bg-indigo-500/30 rounded-full animate-tech-glow blur-sm"
      style={{ animationDelay: "15s" }}
    ></div>
    <div
      className="absolute top-[145vh] left-1/2 w-4 h-4 bg-purple-500/26 rounded-full animate-tech-glow blur-sm"
      style={{ animationDelay: "18s" }}
    ></div>
    <div
      className="absolute top-[165vh] right-1/2 w-6 h-6 bg-cyan-500/29 rounded-full animate-tech-glow blur-sm"
      style={{ animationDelay: "21s" }}
    ></div>

    {/* Additional floating shapes for depth */}
    <div
      className="absolute top-[50vh] left-20 w-20 h-20 bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-xl animate-float-tech"
      style={{ animationDelay: "10s" }}
    ></div>
    <div
      className="absolute top-[90vh] right-20 w-24 h-24 bg-gradient-to-r from-indigo-100/18 to-purple-100/18 rounded-full blur-2xl animate-float-delayed"
      style={{ animationDelay: "15s" }}
    ></div>
    <div
      className="absolute top-[130vh] left-1/2 w-18 h-18 bg-gradient-to-r from-cyan-100/22 to-blue-100/22 rounded-full blur-xl animate-pulse-glow"
      style={{ animationDelay: "20s" }}
    ></div>
  </div>
)

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

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
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/revou%20sertifikat-dtv7VFIxahxfU7ReClQCBzyXFeeDaS.png",
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
  ]

  const projects = [
    {
      title: "Sistem Pendukung Keputusan AHP-TOPSIS",
      description:
        "Sistem pendukung keputusan yang dikembangkan selama masa PKL di Toko Warzuqni Official, sebuah toko yang menjual produk kecantikan. Sistem ini menggunakan metode AHP (Analytical Hierarchy Process) dan TOPSIS (Technique for Order Preference by Similarity to Ideal Solution) untuk membantu dalam pengambilan keputusan pemilihan produk kecantikan terbaik berdasarkan kriteria yang telah ditentukan.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projek%20pkl.jpg-1zhgex3G4fhEpjAvpunlQCxYactbJw.jpeg",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap"],
      category: "Decision Support System",
      status: "Completed",
      date: "August 2024 – September 2024",
      features: [
        "Implementasi metode AHP untuk pembobotan kriteria",
        "Implementasi metode TOPSIS untuk ranking alternatif",
        "Interface input data produk kecantikan",
        "Kalkulasi otomatis nilai preferensi",
        "Dashboard hasil ranking produk",
        "Export hasil analisis dalam format laporan",
        "Validasi konsistensi matriks perbandingan",
      ],
      highlights: ["PKL Project", "AHP-TOPSIS Method", "Beauty Products", "Decision Support"],
      role: "Web Developer - PKL",
      company: "Toko Warzuqni Official",
    },
    {
      title: "PATRAN (Padang Transportasi Rancak)",
      description:
        "Aplikasi web berbasis peta digital untuk visualisasi rute transportasi di Kota Padang. Sistem ini dikembangkan sebagai bagian dari digitalisasi layanan transportasi publik dengan fokus pada penyediaan informasi rute, jadwal, dan tarif transportasi yang mudah diakses oleh masyarakat.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/patran-project.jpg-T1NALsqekaKi3gKmAIjqHAzGGMrbNR.png",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "Google Maps API"],
      category: "Transportation System",
      status: "Completed",
      date: "August 2024 – September 2024",
      features: [
        "Landing page dengan desain modern dan responsif",
        "Visualisasi rute berbasis peta digital",
        "Informasi jadwal dan tarif transportasi",
        "Pencarian rute optimal antar lokasi",
        "Database kendaraan dan operator",
        "Integrasi dengan Google Maps API",
        "Sistem informasi halte dan pemberhentian",
      ],
      highlights: ["Government Project", "Transportation System", "Public Service", "Digital Map"],
      role: "Web Developer - PKL",
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
        "Integrasi API QRIS untuk pembayaran digital",
        "Manajemen kategori, produk, member, dan supplier",
        "Sistem keamanan berlapis dan enkripsi data",
        "Laporan transaksi dan statistik bisnis",
        "Interface admin yang user-friendly",
        "Monitoring pendapatan dan analisis trend",
      ],
      highlights: ["Final Thesis", "Payment Integration", "Laravel Framework", "Business Analytics"],
      role: "Full-Stack Developer",
      company: "Universitas Putra Indonesia YPTK",
    },
    {
      title: "Portal Berita Medan 30 - RevoU Capstone",
      description:
        "Proyek capstone dalam program Studi Independen RevoU yang mencakup pengembangan portal berita fullstack dengan integrasi frontend-backend, data analysis, dan deployment. Portal berita ini dilengkapi dengan sistem manajemen konten, kategori berita, sistem komentar, dan interface yang responsif.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/revou%20projek.jpg-WhpWJssnTpKqAb3MsQFOaW9QZq0a2R.jpeg",
      technologies: ["Node.js", "Express.js", "HTML", "CSS", "JavaScript", "SQL", "Python"],
      category: "Capstone Project",
      status: "Completed",
      date: "August 2023 – December 2023",
      features: [
        "Portal berita dengan sistem CMS lengkap",
        "Manajemen kategori dan artikel dinamis",
        "Interface responsif untuk multi-device",
        "Sistem pencarian dan filter berita advanced",
        "Dashboard admin untuk pengelolaan konten",
        "Data analysis dan visualisasi traffic pengunjung",
        "Deployment dan dokumentasi teknis lengkap",
      ],
      highlights: ["Capstone Project", "Team Leadership", "Excellent Grade (A)", "News Portal", "CMS"],
      role: "Project Leader & Full-Stack Developer",
      company: "RevoU Tech Academy",
    },
  ]

  return (
    <div className="min-h-screen relative">
      <TechBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 relative ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            {/* Profile Photo */}
            <div className="relative mb-8">
              <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full p-1 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-2xl animate-pulse-glow">
                <div className="w-full h-full rounded-full p-1 bg-white">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amelia-kasrin.jpg-mbBkHY0n0sVU1TMijOM3I8snSZ4dE9.jpeg"
                    alt="Amelia Kasrin"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-float-tech">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                <Zap className="w-3 h-3 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-slide-up">
              Amelia Kasrin
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto animate-fade-in">
              Information Systems Graduate • Web Developer • Data Analyst
            </p>
            <p
              className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Transforming Ideas into Digital Solutions with Laravel, JavaScript, and Modern Web Technologies.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button size="lg" onClick={() => scrollToSection("contact")}>
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" onClick={downloadCV}>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>
          </AnimatedSection>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <User className="w-12 h-12 text-blue-600 mb-6 animate-pulse-glow" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Lulusan Sistem Informasi dengan fokus pada pengembangan aplikasi web berbasis Laravel, JavaScript,
                    dan teknologi fullstack. Memiliki pengalaman dalam membangun sistem informasi dan aplikasi web
                    menggunakan berbagai bahasa pemrograman serta mengelola database relasional.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
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
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50/80 transition-colors duration-200 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-blue-100 rounded-full animate-pulse-glow">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}

              <div className="flex space-x-4 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/ameliakasrin", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://linkedin.com/in/amelia-kasrin/", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 animate-float-tech" />
                  <div>
                    <CardTitle className="text-2xl text-white">S.Kom - Sistem Informasi</CardTitle>
                    <CardDescription className="text-blue-100">Universitas Putra Indonesia YPTK Padang</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="animate-fade-in">
                    <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                    <p className="text-gray-600">September 2021 – Mei 2025</p>
                  </div>
                  <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                    <h4 className="font-semibold text-gray-900 mb-2">GPA</h4>
                    <p className="text-gray-600">3.46/4.00</p>
                  </div>
                </div>
                <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h4 className="font-semibold text-gray-900 mb-2">Tugas Akhir</h4>
                  <p className="text-gray-600">
                    Sistem Informasi Pembayaran Online berbasis Laravel dengan integrasi API QRIS. Fokus pada
                    pengelolaan transaksi digital dan manajemen pengguna.
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                icon: Briefcase,
                title: "Web Developer - Magang (PKL)",
                company: "Toko Warzuqni Official & Dinas Komunikasi dan Informatika, Padang",
                period: "August 2024 – September 2024",
                tasks: [
                  "Mengembangkan Sistem Pendukung Keputusan AHP-TOPSIS untuk Toko Warzuqni Official dalam pemilihan produk kecantikan terbaik.",
                  "Membangun aplikasi PATRAN (Padang Transportasi Rancak) untuk Dinas Komunikasi dan Informatika Padang.",
                  "Mengimplementasikan metode AHP dan TOPSIS untuk analisis multi-kriteria dalam pengambilan keputusan.",
                  "Merancang UI/UX yang user-friendly dan responsive untuk kedua sistem.",
                  "Mengelola database dan implementasi logika bisnis menggunakan PHP dan MySQL.",
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
                <Card>
                  <CardHeader className="border-b border-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full animate-pulse-glow">
                          <exp.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{exp.title}</CardTitle>
                          <CardDescription className="text-base">{exp.company}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.tasks.map((task, taskIndex) => (
                        <li
                          key={taskIndex}
                          className="flex items-start space-x-3 animate-fade-in"
                          style={{ animationDelay: `${taskIndex * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 animate-pulse-glow"></div>
                          <span className="text-gray-700">{task}</span>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Programming Languages", items: skills.programming, icon: Code },
              { title: "Frameworks & Libraries", items: skills.frameworks, icon: Terminal },
              { title: "Database", items: skills.database, icon: Database },
              { title: "Tools & Platforms", items: skills.tools, icon: Cpu },
              { title: "Soft Skills", items: skills.softSkills, icon: Network },
            ].map((category, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="h-full">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl">
                    <CardTitle className="text-lg text-white flex items-center">
                      <category.icon className="w-5 h-5 mr-2 animate-float-tech" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="animate-fade-in"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
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

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Professional certifications and achievements that validate my skills and expertise in web development and
              data analysis.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader className="border-b border-gray-100">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">{cert.title}</CardTitle>
                            <CardDescription className="text-base text-blue-600 font-medium">
                              {cert.issuer}
                            </CardDescription>
                            <div className="flex items-center text-gray-500 text-sm mt-2">
                              <Calendar className="w-4 h-4 mr-1 animate-pulse-glow" />
                              {cert.date}
                            </div>
                          </div>
                          <Badge variant="success">
                            <Award className="w-3 h-3 mr-1 animate-float-tech" />
                            {cert.grade}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{cert.description}</p>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Skills Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.slice(0, 6).map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="default"
                                className="animate-fade-in"
                                style={{ animationDelay: `${skillIndex * 0.1}s` }}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {cert.certificateNumber && (
                          <div className="text-sm text-gray-500">Certificate No: {cert.certificateNumber}</div>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              A showcase of my projects demonstrating skills in web development, system analysis, and problem-solving.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">
                        <Folder className="w-3 h-3 mr-1 animate-pulse-glow" />
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="success" className="animate-fade-in">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <Calendar className="w-4 h-4 mr-1 animate-pulse-glow" />
                        {project.date}
                      </div>
                      <p className="text-blue-600 font-medium text-sm">
                        {project.role} - {project.company}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-sm text-gray-600 animate-fade-in"
                            style={{ animationDelay: `${featureIndex * 0.1}s` }}
                          >
                            <Star className="w-3 h-3 text-blue-500 mr-2 mt-0.5 flex-shrink-0 animate-pulse-glow" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="animate-fade-in"
                            style={{ animationDelay: `${techIndex * 0.1}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <Badge
                          key={highlightIndex}
                          variant="default"
                          className="animate-fade-in"
                          style={{ animationDelay: `${highlightIndex * 0.1}s` }}
                        >
                          {highlight}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect and create
              something amazing together!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300} className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: "ameliakasrin05@gmail.com",
                      action: () =>
                        window.open(
                          "mailto:ameliakasrin05@gmail.com?subject=Hello%20Amelia&body=Hi%20Amelia,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                          "_blank",
                        ),
                    },
                    {
                      icon: Phone,
                      title: "WhatsApp",
                      value: "+62 822-1771-2834",
                      action: () =>
                        window.open(
                          "https://wa.me/6282217712834?text=Hi%20Amelia,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
                          "_blank",
                        ),
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      value: "Kota Padang, Sumatera Barat",
                      action: () => window.open("https://www.google.com/maps/search/Padang,+Sumatera+Barat", "_blank"),
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="text-center p-6 rounded-xl hover:bg-gray-50/80 transition-colors duration-200 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={contact.action}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                        <contact.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{contact.title}</h3>
                      <p className="text-gray-600 text-sm">{contact.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open(
                        "mailto:ameliakasrin05@gmail.com?subject=Hello%20Amelia&body=Hi%20Amelia,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.",
                        "_blank",
                      )
                    }
                  >
                    <Mail className="w-5 h-5 mr-2" />
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
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button size="lg" variant="secondary" onClick={downloadCV}>
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50/80 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Amelia Kasrin. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Sparkles className="w-4 h-4 text-blue-400 animate-float-tech" />
            <Database className="w-4 h-4 text-indigo-400 animate-pulse-glow" />
            <BarChart3 className="w-4 h-4 text-blue-500 animate-float-delayed" />
          </div>
        </div>
      </footer>
    </div>
  )
}
