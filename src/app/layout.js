import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://psychemasterindia.org"),
  title: "PsycheMaster | Mental Health & Epilepsy Support",
  description:
    "PsycheMaster is a mental health and epilepsy support platform offering personalized counseling, expert-led workshops, and specialized training programs for individuals, families, and caregivers. Book confidential sessions with professionals and take control of your emotional well-being.",
  keywords: [
    "mental health India",
    "epilepsy counseling",
    "online therapy",
    "emotional wellness",
    "psychemaster",
    "psychological support",
    "counseling for students",
    "epilepsy awareness",
    "caregiver support",
  ],
  openGraph: {
    title: "PsycheMaster | Mental Health & Epilepsy Support",
    description:
      "Expert mental health and epilepsy counseling. Personalized support, certified professionals, free workshops, and emotional wellness programs for individuals and families in India.",
    url: "https://psychemasterindia.org",
    siteName: "PsycheMaster",
    images: [
      {
        url: "/images/og-image.png", // Make sure this image exists in public folder
        width: 1200,
        height: 630,
        alt: "PsycheMaster Mental Health and Epilepsy Counseling",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PsycheMaster | Mental Health & Epilepsy Support",
    description:
      "Compassionate mental health and epilepsy counseling. Book a confidential session today.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://psychemasterindia.org",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
