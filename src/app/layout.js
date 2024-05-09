import { Inter } from "next/font/google";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ToolyZone",
  description: "A digital service provider tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="px-2 sm:px-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
