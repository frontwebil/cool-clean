import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import "./reset.css";

export const metadata: Metadata = {
  title: "CoolClean",
  description:
    "Обслуговуємо кондиціонери у Києві та київській області. Забезпечуємо повний комплекс робіт: від профілактичної чистки до складного технічного ремонту.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* GTM script */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSTQ435W');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {/* GTM noscript (обязательно сразу после body) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSTQ435W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <main>{children}</main>
      </body>
    </html>
  );
}
