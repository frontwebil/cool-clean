import type { Metadata } from "next";


import "./globals.css";
import "./reset.css";


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
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
