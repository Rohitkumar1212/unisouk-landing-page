// app/layout.jsx or layout.tsx
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "nullBrains | Start crafting your next idea",
  description: "Experience the next generation of creativity with nullBrains — create landing pages, blog pages, application pages and so much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
