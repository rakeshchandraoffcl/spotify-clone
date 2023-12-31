import Sidebar from "@/components/Sidebar";
import SuperbaseProvider from "@/providers/SuperbaseProvider";
import UserProvider from "@/providers/UserProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify - Web Player: Music for everyone",
  description: "Music player | Created by next js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SuperbaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SuperbaseProvider>
      </body>
    </html>
  );
}
