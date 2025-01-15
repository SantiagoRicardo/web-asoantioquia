import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asoantioquia",
  description: "Asoantioquia",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <div className="font-sans">{children}</div>;
}
