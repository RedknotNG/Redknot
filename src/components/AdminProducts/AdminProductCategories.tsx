import Image from "next/image";
import adminEmptyProductCategory from "../../../public/emptyState/adminEmptyProductCategory.webp";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCategoriesTableDataSchema } from "@/lib/AdminTypes";
import bs1 from "../../../public/bs1.png";
import AdminAllProductCategories from "./AllProductCategories";

const tableData: ProductCategoriesTableDataSchema[] = [
  {
    id: "12ew",
    name: { title: "Hoodie", image: bs1 },
    description: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "12w",
    name: { title: "Top", image: bs1 },
    description: "Jorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "12e",
    name: { title: "Shirt", image: bs1 },
    description: "Rorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "1ew",
    name: { title: "Dress", image: bs1 },
    description: "Korem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function AdminProductCategories() {
  const searchParams = useSearchParams();
  const active = searchParams.get("active");
  return (
    <>
      {tableData.length < 1 ? (
        <div className="shadow w-full rounded-[12px] flex flex-col py-[100px] justify-center items-center">
          <div className="flex flex-col gap-[24px] justify-center items-center">
            <Image
              alt="Empty category"
              src={adminEmptyProductCategory}
              width={115}
              height={133}
              className="p-[20px]"
            />

            <div className="w-[352px] flex flex-col justify-center items-center gap-[5px]">
              <p className="!font-medium text-text-loud text-center">
                Create product category
              </p>
              <p className="small text-text-subdued text-center">
                Rorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <Link
              href={`/admin/products/categories/create-categories?active=${active}`}
              className="w-fit bg-[#050210] px-[16px] py-[10px] flex gap-[5px] text-text-white rounded-[6px]"
            >
              <p className="small !font-semibold text-text-white">
                Create category
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <AdminAllProductCategories tableData={tableData} />
        </div>
      )}
    </>
  );
}
