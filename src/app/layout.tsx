import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/store/StoreProvider";

const font = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishabh Panwar",
  description:
    "Software Developer : My name is Rishabh Panwar, I am a software developer from India, this is my resume built with Next.js 14.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
