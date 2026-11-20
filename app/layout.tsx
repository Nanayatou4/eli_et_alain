import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eli-et-alain.vercel.app"),
  title: {
    default: "Ely et Alain | Restaurant à Mbour",
    template: "%s | Ely et Alain",
  },
  description:
    "Découvrez Ely et Alain, votre restaurant à Mbour : cuisine africaine et européenne, poissons, viandes, plats du jour et accueil chaleureux.",
  keywords: [
    "Ely et Alain",
    "Chez Ely",
    "restaurant à Mbour",
    "restaurant Mbour Sénégal",
    "cuisine sénégalaise",
    "restaurant poisson Mbour",
  ],
  openGraph: {
    title: "Ely et Alain | Restaurant à Mbour",
    description:
      "Découvrez notre cuisine africaine et européenne à Mbour, entre saveurs authentiques et convivialité.",
    url: "https://eli-et-alain.vercel.app",
    siteName: "Ely et Alain",
    locale: "fr_SN",
    type: "website",
  },
  verification: {
    google: "pG1M8P9eww0Wj7oIwLhPTLubDKOoqX0lZElshBx9-XU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
