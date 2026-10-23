import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ely et Alain | Restaurant à Mbour",
  description:
    "Découvrez la cuisine sénégalaise dans un cadre chaleureux, entre terre et mer, à Mbour.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
