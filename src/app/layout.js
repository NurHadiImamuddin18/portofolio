import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
});

export const metadata = {
  title: "Nur Hadi Imamuddin | Software Engineer",
  description:
    "Nur Hadi Imamuddin — Software Engineer based in East Java. Building robust, user-centric systems from full-stack web applications to IoT integrations.",
  openGraph: {
    title: "Nur Hadi Imamuddin | Software Engineer",
    description:
      "Software Engineer crafting digital experiences with deep logic, sleek aesthetics, and scalable architectures.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
