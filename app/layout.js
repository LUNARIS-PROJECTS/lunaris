import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata = {
  title: "LUNARIS | AI Utilities That Launch Your Future",
  description: "Interview prep AI, code review assistant, viral growth tools for startups. The all-in-one AI utility suite.",
  openGraph: {
    title: "LUNARIS | AI Utilities That Launch Your Future",
    description: "Interview prep AI, code review assistant, viral growth tools for startups.",
    type: "website",
    locale: "en_US",
    url: "https://lunaris.ai",
    siteName: "LUNARIS",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        "min-h-screen bg-space-black font-sans antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}
