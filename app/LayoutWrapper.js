"use client"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Toaster position="top-right" reverseOrder={false} />
      <Footer />
    </>
  );
}
