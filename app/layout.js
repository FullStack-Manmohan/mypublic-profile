import "./globals.css";
import { Poppins, Inter } from "next/font/google";
import LayoutWrapper from "./LayoutWrapper"; 

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Full-Stack Developer | React, Next.js, Node.js, MongoDB | Manmohan Yadav",
  description: "I’m a full-stack developer specializing in React, Next.js, Node.js, and modern technologies. I build scalable web apps, mobile apps, and digital solutions that deliver results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} ${inter.className}`}>
      <body className="bg-[#F3F4F6] min-h-screen antialiased flex flex-col">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
