"use client";

import AddVariation from "@/components/AdminProducts/AddVariation";
import AdminProductsIcon from "@/icons/AdminLayout/AdminProductsIcon";
import SlashIcon from "@/icons/SlashIcon";
import { ProductVariationSchema } from "@/lib/AdminTypes";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function AdminCreateVariation() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  function handleCancel(id: string) {
    router.push(`/admin/products/${id}`);
  }

  function handleSaveNewVariation(newData: ProductVariationSchema) {
    console.log(newData);
  }
  return (
    <div className="adminWidth flex flex-col gap-[32px] p-[32px]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-[12px]">
          <div className="text-text-normal">
            <AdminProductsIcon />
          </div>
          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <Link
            href={"/admin/products"}
            className="small text-text-normal font-medium leading-[20px]"
          >
            All products
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <Link
            href={`/admin/products/${id as string}`}
            className="small text-text-normal font-medium leading-[20px]"
          >
            Nini - Adire Agbada dress
          </Link>

          <div className="text-text-disabled">
            <SlashIcon />
          </div>

          <p className="small text-primary-100 !font-medium">
            Create variation
          </p>
        </div>
      </div>

      <h3 className="!font-semibold text-text-loud leading-[40px]">
        Create variation
      </h3>

      <div className="w-full p-[16px] bg-background-disabled">
        <AddVariation
          id={id as string}
          handleCancel={handleCancel}
          handleSaveNewVariation={handleSaveNewVariation}
        />
      </div>
    </div>
  );
}
