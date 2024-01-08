import Menu from "@app/components/menu/menu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joseph A. Frontend Mentor Challenges",
  description:
    "This is a website to showcase all the challenge from frontend mentor solved by me.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen flex flex-col">
          <div className="flex items-center">
            <Menu />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
