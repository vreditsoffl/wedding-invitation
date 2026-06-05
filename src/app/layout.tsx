import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel, Cormorant_Garamond, Great_Vibes, Noto_Serif_Tamil } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { SmoothScroll } from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: ["400"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSerifTamil = Noto_Serif_Tamil({
  variable: "--font-tamil",
  weight: ["400", "500", "600", "700"],
  subsets: ["tamil"],
});

export const metadata: Metadata = {
  title: "Satyapriya & Dhivakar | Wedding Invitation",
  description: "Join us in celebrating the wedding of Satyapriya and Dhivakar",
  openGraph: {
    title: "Satyapriya & Dhivakar | Wedding Invitation",
    description: "Join us in celebrating our wedding.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable} ${notoSerifTamil.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen bg-[#2A000A] text-foreground overflow-x-hidden w-full">
        <SmoothScroll>
          <LanguageProvider>
             <div className="max-w-[430px] w-full mx-auto min-h-screen bg-[#4B0012] relative overflow-x-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border-x border-[#E5C067]/10 font-sans">
                {children}
             </div>
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
