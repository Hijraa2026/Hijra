import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIJRA — Modest Fashion",
  description: "Des tenues modestes, élégantes et professionnelles pour la femme active.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
