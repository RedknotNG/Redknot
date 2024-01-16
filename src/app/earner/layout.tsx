import type { Metadata } from "next";
import { inter } from "../fonts";
import "../globals.css";
import Link from "next/link";
import RedKnotSmallIcon from "@/icons/redknotSmall";

export const metadata: Metadata = {
  title: "RedKnot Dashboard",
  description: "Redknot Earners' Dashboard",
};

export default function EarnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <section className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center bg-background-loud">
            <div className="w-[1280px] px-[32px] py-[16px] flex justify-between">
              <Link href={"/earner/dashboard"} className="text-text-white">
                <RedKnotSmallIcon />
              </Link>

              <div></div>

              <div></div>
            </div>
          </div>

          <section className="w-full">{children}</section>
        </section>
      </body>
    </html>
  );
}
