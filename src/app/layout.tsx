import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata: Metadata = {
  title: "Bárbara PDA's Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        {/* <StairTransition /> */}
        {/* <PageTransition> */}
          {children}
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
