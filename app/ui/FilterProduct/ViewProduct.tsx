import React from "react";
import ProductItem from "../Product/ProductItem";
import PaginationFilter from "./PaginationFilter";
import { API_BASE_URL } from "@/app/config/api";
import ProductNotFound from "../Product/ProductNotFound/ProductNotFound";

async function getProducts(apiUrl: string, page: number = 1): Promise<any> {
  console.log("currentPage", page);
  const url = new URL(`${API_BASE_URL}/${apiUrl}`);
  url.searchParams.append("page", page.toString());
  const response = await fetch(url.toString(), {
    cache: "no-store",
  });
  if (!response.ok) {
    return [];
  }
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const data: any = await response.json();
  return data as any;
}

export default async function ViewProduct({ query }: any) {
  const { apiUrl, currentPage } = query;
  const result = await getProducts(apiUrl, currentPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pt-4 lg:gap-2">
        {result?.data?.length > 0 &&
          result.data.map((item: any) => (
            <ProductItem {...item} key={item.id} />
          ))}
      </div>
      {result?.data?.length === 0 && (
        <div className="product_not_found">
          <ProductNotFound />
        </div>
      )}

      {result?.data?.length > 0 && <PaginationFilter meta={result.meta} />}
    </>
  );
}
