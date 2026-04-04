import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import "./reset.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CoolClean",
  description:
    "Обслуговуємо кондиціонери у Києві та київській області. Забезпечуємо повний комплекс робіт: від профілактичної чистки до складного технічного ремонту.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
