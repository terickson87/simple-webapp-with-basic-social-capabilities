import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";
import MyAppBar from "@/components/MyAppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: "Simple Social Webapp",
  },
  description: "A simple webapp that has basic social capabilities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <body className={inter.className}>
          <MyAppBar />
          {children}
        </body>
      </AppRouterCacheProvider>
    </html>
  );
}
