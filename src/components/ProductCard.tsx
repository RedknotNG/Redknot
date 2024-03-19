import { ProductsSchema } from "@/lib/AdminTypes";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }: { data: ProductsSchema }) {
  return (
    <Link
      href={`/earner/products/${data.id}`}
      className="flex flex-col gap-[5px]"
    >
      <Image
        alt="Best Selling Img"
        src={data.img}
        width={277}
        height={288}
        className="rounded-[8px]"
      />

      <h6 className="font-semibold text-[#101928]">{data.title}</h6>
      <p className="font-medium text-text-subdued">{data.position}</p>
      <p className="small italic font-medium text-[#B54708]">
        {data.available} pcs available
      </p>

      <p className="font-medium text-text-muted">{data.price}</p>
    </Link>
  );
}
