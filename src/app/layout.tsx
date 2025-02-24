import React from "react";

import "./app.css";

import type { Metadata } from "next";

import { Header } from "./(pages-lib)/components/Header";
import { Footer } from "./(pages-lib)/components/Footer";

export const metadata: Metadata = {
  title: "Asoantioquia",
  description: "Asoantioquia",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
