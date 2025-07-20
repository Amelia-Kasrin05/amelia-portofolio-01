import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amelia Kasrin - Web Developer Portfolio",
  description:
    "Lulusan Sistem Informasi berfokus pada pengembangan aplikasi web berbasis Laravel, JavaScript, dan teknologi fullstack.",
  keywords: "web developer, laravel, javascript, portfolio, sistem informasi, amelia kasrin",
  authors: [{ name: "Amelia Kasrin" }],
  creator: "Amelia Kasrin",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ameliakasrin.github.io",
    title: "Amelia Kasrin - Web Developer Portfolio",
    description:
      "Lulusan Sistem Informasi berfokus pada pengembangan aplikasi web berbasis Laravel, JavaScript, dan teknologi fullstack.",
    siteName: "Amelia Kasrin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amelia Kasrin - Web Developer Portfolio",
    description:
      "Lulusan Sistem Informasi berfokus pada pengembangan aplikasi web berbasis Laravel, JavaScript, dan teknologi fullstack.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

