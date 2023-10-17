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
      <body className="h-full">
        <ReduxProvider>
          <Header />
          <div className="mx-auto max-h-full max-w-7xl">{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
