import ViewIcon from "@/icons/ViewIcon";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import hoodie from "../../../../public/ProductCategory/hoodie.png";
import top from "../../../../public/ProductCategory/top.png";
import sweatshirt from "../../../../public/ProductCategory/sweatshirt.png";
import shirt from "../../../../public/ProductCategory/shirt.png";

type ProductsCategorySchema = {
  img: StaticImageData;
  title: string;
  available: number;
  id: string;
};

const ProductsCategoryData: ProductsCategorySchema[] = [
  {
    img: hoodie,
    title: "Hoodie",
    available: 50,
    id: "123wqer",
  },
  {
    img: top,
    title: "Top",
    available: 50,
    id: "1wqer",
  },
  {
    img: sweatshirt,
    title: "Sweatshirt",
    available: 50,
    id: "123wr",
  },
  {
    img: shirt,
    title: "Gown",
    available: 50,
    id: "1w3wqer",
  },
  {
    img: shirt,
    title: "Shirt",
    available: 50,
    id: "1w3saqer",
  },
  {
    img: shirt,
    title: "Shorts",
    available: 50,
    id: "1w3er",
  },
  {
    img: shirt,
    title: "Joggers",
    available: 50,
    id: "qer",
  },
];

export default function ProductCategoriesPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full bg-background-disabled flex justify-center border-b-[1px]">
        <div className="w-full max-w-[1280px] flex items-center gap-[12px] py-[24px] px-[32px]">
          <p className="text-[30px] font-semibold leading-[38px] text-text-loud">
            Product categories
          </p>
        </div>
      </div>

      <div className="w-full bg-background-white flex justify-center py-[40px]">
        <div className="product-categories w-full  max-w-[1280px] p-[32px] flex flex-col gap-[24px]">
          <div className="grid grid-cols-4 gap-[24px]">
            {ProductsCategoryData.map((data, index) => (
              <ProductCategoryCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCategoryCard({ data }: { data: ProductsCategorySchema }) {
  return (
    <div className="flex flex-col gap-[5px]">
      <Image
        alt="Product Category Img"
        src={data.img}
        width={277}
        height={288}
        className="rounded-[8px]"
      />

      <h6 className="font-semibold text-[#101928]">{data.title}</h6>

      <p className="small italic font-medium text-[#B54708]">
        {data.available} pcs available
      </p>

      <Link
        href={`/earner/product-categories/${data.id}`}
        className="form-button w-fit flex justify-center items-center gap-[6px] text-text-white px-[8px] py-[6px]"
      >
        <ViewIcon />
        <p className="small text-text-white font-medium"> View products</p>
      </Link>
    </div>
  );
}
