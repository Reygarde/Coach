import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coach AI",
  description: "David Goggins AI Coach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Favicon */}
          <link rel="icon" href="/reygarde-icon.png" type="image/png" />
          {/* Métadonnées pour le SEO */}
          <meta name="theme-color" content="#f69435" />
          <title>Coach AI</title>
          <meta name="description" content="David Goggins AI Coach" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
