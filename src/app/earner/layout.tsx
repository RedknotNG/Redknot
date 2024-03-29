"use client";

import { inter } from "../fonts";
import "../globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "@/icons/CartIcon";
import Image from "next/image";
import ProfileImg from "../../../public/Profile.png";
import RedKnotSmallIcon from "@/icons/RedknotSmallIcon";

const navLinkData = [
  { title: "Dashboard", path: "/earner/dashboard" },
  { title: "Products", path: "/earner/products" },
  { title: "Product categories", path: "/earner/product-categories" },
  { title: "Orders", path: "/earner/orders" },
  { title: "Transactions", path: "/earner/transactions" },
  { title: "Profile", path: "/earner/profile" },
];

export default function EarnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <section className="w-full flex flex-col items-center relative">
          <div className="w-full flex justify-center bg-background-loud fixed z-50">
            <div className="w-[1280px] px-[32px] py-[24px] flex justify-between">
              <Link href={"/earner/dashboard"} className="text-text-white">
                <RedKnotSmallIcon />
              </Link>

              <div className="flex gap-[24px] justify-between">
                {navLinkData.map((data, index) => (
                  <Link
                    href={data.path}
                    key={index}
                    className={
                      pathname.includes(data.path)
                        ? "text-center text-text-white text-[16px] font-inter font-medium leading-[24px] rounded-[6px] py-[8px] px-[12px] bg-[#1D234A]"
                        : "text-center text-text-disabled text-[16px] font-inter font-medium leading-[24px] rounded-[6px] py-[8px] px-[12px] bg-transparent"
                    }
                  >
                    {data.title}
                  </Link>
                ))}
              </div>

              <div className="flex gap-[16px] items-center">
                <Link
                  href={"/earner/carts"}
                  className="flex gap-[5px] items-center"
                >
                  <CartIcon />{" "}
                  <p className="text-[18px] font-medium leading-[28px] text-text-disabled">
                    (2)
                  </p>
                </Link>

                <Image
                  alt="Profile Img"
                  src={ProfileImg}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <section className="w-full absolute top-[88px]">{children}</section>
        </section>
      </body>
    </html>
  );
}
