import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diablo Crop",
  description: "Employee PayRun application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-full">
        <ReduxProvider>
          <Header />
          <div className="mx-auto min-h-full max-w-7xl overflow-auto">
            {children}
          </div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
