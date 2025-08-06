import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhavirav Painting Service - Professional Painting Services in Mumbai",
  description:
    "Transform your homes and offices with quality paints and expert designs. Professional residential, commercial, and building painting services in Pune, Maharashtra.",
  keywords:
    "painting services pune, house painting, commercial painting, residential painting, building painting, texture painting, pune painters",
  authors: [{ name: "Bhavirav Painting Service" }],
  openGraph: {
    title:
      "Bhavirav Painting Service - Professional Painting Services in Mumbai",
    description:
      "Transform your homes and offices with quality paints and expert designs. Professional residential, commercial, and building painting services in Pune, Maharashtra.",
    url: "https://bhaviravpainting.com",
    siteName: "Bhavirav Painting Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bhavirav Painting Service - Professional Painting Services in Mumbai",
    description:
      "Transform your homes and offices with quality paints and expert designs. Professional residential, commercial, and building painting services in Pune, Maharashtra.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
