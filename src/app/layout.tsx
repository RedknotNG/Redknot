import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import ModalContextProvider from "@/contexts/ModalContext";
import ModalComponentContextProvider from "@/contexts/ModalComponentContext";

export const metadata: Metadata = {
  title: "RedKnot",
  description: "Redknot Wears",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <ModalContextProvider>
          <ModalComponentContextProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </ModalComponentContextProvider>
        </ModalContextProvider>
      </body>
    </html>
  );
}
