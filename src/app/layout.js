import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "L-Nutra Health Dashboard",
  description: "L-Nutra Health Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>{children}</body>
    </html>
  );
}
