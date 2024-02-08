"use client";

import { inter } from "../fonts";
import "../globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CartIcon from "@/icons/CartIcon";
import Image from "next/image";
import ProfileAvatar from "../../../public/ProfileAvatar.png";
import RedKnotSmallIcon from "@/icons/RedknotSmallIcon";
import AdminDashboardIcon from "@/icons/AdminLayout/AdminDashboardIcon";
import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import AdminOrdersIcon from "@/icons/AdminLayout/AdminOrdersIcon";
import AdminUsersIcon from "@/icons/AdminLayout/AdminUsersIcon";
import AdminEarnerLevelsIcon from "@/icons/AdminLayout/AdminEarnerLevelsIcon";
import AdminCommissionsIcon from "@/icons/AdminLayout/AdminCommissionsIcon";
import AdminExpensesIcon from "@/icons/AdminLayout/AdminExpensesIcon";
import AdminPayoutsIcon from "@/icons/AdminLayout/AdminPayoutsIcon";
import AdminProfileIcon from "@/icons/AdminLayout/AdminProfileIcon";
import LogoutIcon from "@/icons/LogoutIcon";
import Cookies from "js-cookie";

const navLinkData = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <AdminDashboardIcon />,
  },
  { title: "Products", path: "/admin/products", icon: <AdminProductsIcon /> },
  { title: "Orders", path: "/admin/orders", icon: <AdminOrdersIcon /> },
  { title: "users", path: "/admin/users", icon: <AdminUsersIcon /> },
  {
    title: "Earner Levels",
    path: "/admin/earner-levels",
    icon: <AdminEarnerLevelsIcon />,
  },
];

const navLinkTData = [
  {
    title: "Commissions",
    path: "/admin/commissions",
    icon: <AdminCommissionsIcon />,
  },
  { title: "Expenses", path: "/admin/expenses", icon: <AdminExpensesIcon /> },
  { title: "Payouts", path: "/admin/payouts", icon: <AdminPayoutsIcon /> },
];

export default function EarnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    Cookies.remove("redknot_admin");
    router.push("/admin");
  }

  return (
    <html lang="en">
      {pathname !== "/admin" ? (
        <body className={`${inter.variable}`}>
          <section className="w-full flex">
            <div className="h-screen w-[272px] flex flex-col justify-between bg-background-disabled px-[16px] py-[24px]">
              <div className="flex flex-col gap-[20px]">
                <Link href={"/admin/dashboard"} className="text-text-loud">
                  <RedKnotSmallIcon />
                </Link>

                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[5px]">
                    {navLinkData.map((data, index) => (
                      <Link
                        href={data.path}
                        key={index}
                        className={
                          pathname.includes(data.path)
                            ? "flex gap-[12px] rounded-[4px] py-[8px] px-[12px] bg-background-hover"
                            : "flex gap-[12px] rounded-[4px] py-[8px] px-[12px] bg-transparent"
                        }
                      >
                        <div
                          className={
                            pathname.includes(data.path)
                              ? "text-text-muted"
                              : "text-text-normal"
                          }
                        >
                          {data.icon}
                        </div>
                        <p
                          className={
                            pathname.includes(data.path)
                              ? "small text-text-muted leading-[20px]"
                              : "small text-text-normal leading-[20px] font-medium"
                          }
                        >
                          {data.title}
                        </p>
                      </Link>
                    ))}
                  </div>

                  <p className="small text-text-disabled font-medium leading-[20px] py-[8px] px-[12px] bg-transparent">
                    Transactions
                  </p>

                  <div className="flex flex-col gap-[5px]">
                    {navLinkTData.map((data, index) => (
                      <Link
                        href={data.path}
                        key={index}
                        className={
                          pathname.includes(data.path)
                            ? "flex gap-[12px] py-[8px] px-[12px] bg-background-hover"
                            : "flex gap-[12px] py-[8px] px-[12px] bg-transparent"
                        }
                      >
                        <div
                          className={
                            pathname.includes(data.path)
                              ? "text-text-muted"
                              : "text-text-normal"
                          }
                        >
                          {data.icon}
                        </div>
                        <p
                          className={
                            pathname.includes(data.path)
                              ? "small text-text-muted leading-[20px]"
                              : "small text-text-normal leading-[20px] font-medium"
                          }
                        >
                          {data.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-[20px] items-center">
                <div className="w-full flex flex-col gap-[10px]">
                  <p className="small text-text-disabled font-medium leading-[20px] py-[8px] px-[12px] bg-transparent">
                    Settings
                  </p>

                  <Link
                    href={"/admin/profile"}
                    className={
                      pathname.includes("/admin/profile")
                        ? "flex gap-[12px] py-[8px] px-[12px] bg-background-hover"
                        : "flex gap-[12px] py-[8px] px-[12px] bg-transparent"
                    }
                  >
                    <div
                      className={
                        pathname.includes("/admin/profile")
                          ? "text-text-muted"
                          : "text-text-normal"
                      }
                    >
                      <AdminProfileIcon />
                    </div>
                    <p
                      className={
                        pathname.includes("/admin/profile")
                          ? "small text-text-muted leading-[20px]"
                          : "small text-text-normal leading-[20px] font-medium"
                      }
                    >
                      Profile
                    </p>
                  </Link>
                </div>

                <div className="w-full flex justify-between gap-[5px]">
                  <Image
                    alt="Profile Img"
                    src={ProfileAvatar}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col gap-[5px]">
                    <p className="w-[120px] small font-semibold leading-[20px] text-text-loud truncate">
                      Mubarak Gbadeyanka
                    </p>

                    <p className="small leading-[20px] text-text-subdued">
                      mubrak@gmail.com
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="text-text-normal hover:text-secondary_red-100"
                  >
                    <LogoutIcon />
                  </button>
                </div>
              </div>
            </div>

            <section className="w-full">{children}</section>
          </section>
        </body>
      ) : (
        <body className={`${inter.variable}`}>{children}</body>
      )}
    </html>
  );
}
