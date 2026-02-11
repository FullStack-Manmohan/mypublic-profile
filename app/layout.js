import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import LayoutWrapper from "./LayoutWrapper"; 

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Manmohan Yadav | Software Engineer @ RCUH | Full-Stack React • Next.js • Node.js | Founder UpTecHunt",
  description: "Software Engineer at RCUH (UHERO / University of Hawai'i). Full-stack web systems, HIPAA-compliant dashboards, production-grade apps. Founder, UpTecHunt. Honolulu. Open to select projects and leads.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Manmohan Yadav — Software Engineer & Full-Stack Developer",
    description: "Secure, production-grade web systems & dashboards. React, Next.js, Node.js. HIPAA-compliant workflows. Honolulu.",
    url: "https://www.linkedin.com/in/manmohan-yadav",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} ${inter.className}`}>
      <body className="bg-[var(--color-surface)] min-h-screen antialiased flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
