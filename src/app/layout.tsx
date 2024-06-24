import type { Metadata } from "next";
import "./globals.css";

import {
  ClerkProvider,
} from '@clerk/nextjs'
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "DORA STREAMER",
  description: "Live Streaming Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
    <html lang='en'>
      <body className="inter">
        <ThemeProvider attribute="class" forcedTheme="dark" storageKey="dora-theme">
        {children}
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
  );
}
