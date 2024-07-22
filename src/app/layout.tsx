import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Nicolas Gomes Guadagno",
  description: "Desenvolvedor Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="br" suppressHydrationWarning>
      <body className={robotoMono.className}>
        <div className="flex flex-col w-full 2xl:w-[1080px]">
        <Providers>
          <Header />
          {children}
        </Providers>
        </div>
      </body>
    </html>
  );
}
