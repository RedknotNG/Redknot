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
import { NavLinkSchema } from "@/lib/AdminTypes";
import { useState } from "react";
import ArrowDownIcon from "@/icons/ArrowDownIcon";

const navLinkData: NavLinkSchema[] = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <AdminDashboardIcon />,
  },
  {
    title: "Products",
    path: "/admin/products?active=All products",
    icon: <AdminProductsIcon />,
  },
  { title: "Orders", path: "/admin/orders", icon: <AdminOrdersIcon /> },
  { title: "Users", path: "/admin/users", icon: <AdminUsersIcon /> },
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
          <section className="w-full relative">
            <div className="h-screen fixed left-0 top-0 w-[272px] flex flex-col justify-between bg-background-disabled px-[16px] py-[24px]">
              <div className="flex flex-col gap-[20px]">
                <Link href={"/admin/dashboard"} className="text-text-loud">
                  <RedKnotSmallIcon />
                </Link>

                <div className="flex flex-col gap-[20px]">
                  <div className="flex flex-col gap-[5px]">
                    {navLinkData.map((data, index) => (
                      <NavLink key={index} data={data} />
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

            <section className="adminWidth absolute top-0 left-[272px]">
              {children}
            </section>
          </section>
        </body>
      ) : (
        <body className={`${inter.variable}`}>{children}</body>
      )}
    </html>
  );
}

function NavLink({ data }: { data: NavLinkSchema }) {
  const pathname = usePathname();

  const [showOrders, setShowOrders] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  return (
    <div>
      {data.title === "Orders" ? (
        <div
          className="flex flex-col"
          style={{
            height: showOrders ? "92px" : "37px",
            transition: "height 200ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
          }}
        >
          <button
            onClick={() => setShowOrders((prev) => !prev)}
            className={`flex gap-[12px] items-center justify-between rounded-[4px] py-[8px] px-[12px] bg-transparent`}
          >
            <div className="flex gap-[12px] items-center">
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
                    ? "small text-text-muted leading-[20px] !font-medium"
                    : "small text-text-normal leading-[20px]"
                }
              >
                {data.title}
              </p>
            </div>
            <div
              className={`w-fit`}
              style={{
                transform: `rotateZ(${showOrders ? "180" : "0"}deg)`,
                transition: "transform ease 200ms",
              }}
            >
              <ArrowDownIcon />
            </div>
          </button>

          {showOrders && (
            <Link
              href={"/admin/orders/earner-orders"}
              className="flex gap-[12px] items-center rounded-[4px] py-[8px] px-[12px]"
            >
              <div className="flex justify-center items-center px-[10px] ">
                <div className="w-[2px] h-[28px] bg-[#A4ACB9]"></div>
              </div>
              <p
                className={
                  pathname.includes("/admin/orders/earner-orders")
                    ? "flex-grow small text-text-muted leading-[20px] !font-medium py-[8px] px-[12px] bg-background-hover border-[2px] rounded-[4px]"
                    : "flex-grow small text-text-normal leading-[20px] py-[8px] px-[12px]"
                }
              >
                {"Earner Orders"}
              </p>
            </Link>
          )}
        </div>
      ) : data.title === "Users" ? (
        <div
          className="flex flex-col"
          style={{
            height: showUsers ? "100%" : "37px",
            transition: "height 200ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
          }}
        >
          <button
            onClick={() => setShowUsers((prev) => !prev)}
            className={`flex gap-[12px] items-center justify-between rounded-[4px] py-[8px] px-[12px] bg-transparent`}
          >
            <div className="flex gap-[12px] items-center">
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
                    ? "small text-text-muted leading-[20px] !font-medium"
                    : "small text-text-normal leading-[20px]"
                }
              >
                {data.title}
              </p>
            </div>
            <div
              className={`w-fit`}
              style={{
                transform: `rotateZ(${showUsers ? "180" : "0"}deg)`,
                transition: "transform ease 200ms",
              }}
            >
              <ArrowDownIcon />
            </div>
          </button>

          {showUsers && (
            <div className="flex gap-[12px] py-[8px] px-[12px]">
              <div className="flex justify-center items-center px-[10px] ">
                <div className="w-[2px] h-full bg-[#A4ACB9]"></div>
              </div>
              <div className="flex-grow flex flex-col gap-[5px]">
                <Link
                  href={"/admin/users"}
                  className="flex gap-[12px] items-center rounded-[4px]"
                >
                  <p
                    className={
                      pathname.includes("/admin/users")
                        ? "flex-grow small text-text-muted leading-[20px] !font-medium py-[8px] px-[12px] bg-background-hover border-[2px] rounded-[4px]"
                        : "flex-grow small text-text-normal leading-[20px] py-[8px] px-[12px]"
                    }
                  >
                    {"Admin"}
                  </p>
                </Link>

                <Link
                  href={"/admin/users"}
                  className="flex gap-[12px] items-center rounded-[4px]"
                >
                  <p
                    className={
                      pathname.includes("/admin/users")
                        ? "flex-grow small text-text-muted leading-[20px] !font-medium py-[8px] px-[12px] bg-background-hover border-[2px] rounded-[4px]"
                        : "flex-grow small text-text-normal leading-[20px] py-[8px] px-[12px]"
                    }
                  >
                    {"Earners"}
                  </p>
                </Link>

                <Link
                  href={"/admin/users"}
                  className="flex gap-[12px] items-center rounded-[4px]"
                >
                  <p
                    className={
                      pathname.includes("/admin/users")
                        ? "flex-grow small text-text-muted leading-[20px] !font-medium py-[8px] px-[12px] bg-background-hover border-[2px] rounded-[4px]"
                        : "flex-grow small text-text-normal leading-[20px] py-[8px] px-[12px]"
                    }
                  >
                    {"Support"}
                  </p>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : data.title === "Products" ? (
        <Link
          href={data.path}
          className={
            pathname.includes("/admin/products")
              ? "flex gap-[12px] items-center rounded-[4px] py-[8px] px-[12px] bg-background-hover border-[2px]"
              : "flex gap-[12px] items-center rounded-[4px] py-[8px] px-[12px] bg-transparent"
          }
        >
          <div
            className={
              pathname.includes("/admin/products")
                ? "text-text-muted"
                : "text-text-normal"
            }
          >
            {data.icon}
          </div>
          <p
            className={
              pathname.includes("/admin/products")
                ? "small text-text-muted leading-[20px] !font-medium"
                : "small text-text-normal leading-[20px]"
            }
          >
            {data.title}
          </p>
        </Link>
      ) : (
        <Link
          href={data.path}
          className={
            pathname.includes(data.path)
              ? "flex gap-[12px] items-center rounded-[4px] py-[8px] px-[12px] bg-background-hover border-[2px]"
              : "flex gap-[12px] items-center rounded-[4px] py-[8px] px-[12px] bg-transparent"
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
                ? "small text-text-muted leading-[20px] !font-medium"
                : "small text-text-normal leading-[20px]"
            }
          >
            {data.title}
          </p>
        </Link>
      )}
    </div>
  );
}
