import type { Metadata } from "next";
import { Providers } from "./providers";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Nicolas Gomes Guadagno",
  description: "Full Stack Developer",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={robotoMono.className}>
        <div className="flex flex-col w-full 2xl:w-[1080px]">
        <NextIntlClientProvider messages={messages}>
          <SpeedInsights />
          <Providers>
            <Header />
            {children}
          </Providers>
        </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
