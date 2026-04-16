import type { Metadata } from "next";
import { caveat, geistMono, orbit, spaceGrotesk } from "@/lib/fonts";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import Nav from "@/components/ui/Nav";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeewon Moon · Portfolio",
  description:
    "Developer & designer building thoughtful digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-locale="kr">
      <body
        className={`${spaceGrotesk.variable} ${orbit.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
      >
        <LocaleProvider>
          <Nav />
          {children}
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
