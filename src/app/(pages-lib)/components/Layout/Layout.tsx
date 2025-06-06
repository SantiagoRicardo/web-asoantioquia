import React from "react";

import type { Metadata } from "next";
import { Header } from "../Header";
import { Recycle } from "../Recycle";

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
        <Recycle />
      </body>
    </html>
  );
}
