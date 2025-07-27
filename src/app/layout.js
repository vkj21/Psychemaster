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
  title: "PsycheMaster | Mental Health & Epilepsy Support",
  description:
    "PsycheMaster is a mental health and epilepsy support platform offering personalized counseling, expert-led workshops, and specialized training programs for individuals, families, and caregivers. Book confidential sessions with professionals and take control of your emotional well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
