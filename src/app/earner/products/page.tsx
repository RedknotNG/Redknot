"use client";

import ProductDropDown from "@/components/ProductDrop";
import SearchIcon from "@/icons/SearchIcon";
import SortIcon from "@/icons/SortIcon";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import productImage from "../../../../public/productImage.png";
import Link from "next/link";

type ProductsSchema = {
  img: StaticImageData;
  title: string;
  position: string;
  available: number;
  price: string;
  id: string;
};

const productsData: ProductsSchema[] = [
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "123wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "13wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "123wqe",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "123wer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "13wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "1wqer",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "23wqe",
  },
  {
    img: productImage,
    title: "Nini - Adire Agbada dress",
    position: "Top",
    available: 50,
    price: "₦13,500",
    id: "12er",
  },
];

export default function ProductPage() {
  const [searchValue, setSearchValue] = useState("");
  function dropCB(value: string) {
    console.log(value);
  }
  return (
    <div className="w-full flex justify-center relative">
      <div className="w-full max-w-[1280px] p-[32px] flex flex-col gap-[32px]">
        <p className="text-[30px] font-semibold leading-[38px] text-text-loud">
          Products
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-[16px]">
            <div className="shadow flex gap-[6px] px-[16px] py-[10px] rounded-[6px]">
              <SortIcon />
              <p className="small text-text-muted font-semibold">Sort by</p>
            </div>

            <ProductDropDown cb={dropCB} />
          </div>

          <div className="shadow flex gap-[10px] items-center p-[10px] rounded-[6px]">
            <div className="text-[#818898]">
              <SearchIcon />
            </div>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search"
              className="font-normal font-inter text-[16px] text-text-subdued leading-[24px] focus:border-none focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[24px]">
          {productsData.map((data, index) => (
            <ProductCard key={index} data={data} />
          ))}
        </div>

        <div className="w-full px-[24px] py-[16px] border-t-[1px] border-t-[#EAECF0] flex justify-between">
          <button className="py-[8px] px-[14px] shadow text-center rounded-[6px]">
            <p className="small font-medium leading-[20px] text-[#344054]">
              Previous
            </p>
          </button>
          <p className="small font-medium leading-[20px] text-[#344054]">
            Page 1 of 10
          </p>
          <button className="py-[8px] px-[14px] shadow text-center rounded-[6px]">
            <p className="small font-medium leading-[20px] text-[#344054]">
              Next
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ data }: { data: ProductsSchema }) {
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

      <h6 className="font-semibold leading-[28px] text-[#101928]">
        {data.title}
      </h6>
      <p className="font-medium leading-[24px] text-text-subdued">
        {data.position}
      </p>
      <p className="small italic font-medium leading-[20px] text-[#B54708]">
        {data.available} pcs available
      </p>

      <p className="font-medium leading-[24px] text-text-muted">{data.price}</p>
    </Link>
  );
}
