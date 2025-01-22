import React from "react";
import Container from "../Container/Container";
import { API_BASE_URL } from "@/app/config/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

async function getABout(): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/about_page/footerseo`, {
    cache: "no-store",
  });
  if (!response.ok) {
    return [];
  }
  const data: any = await response.json();
  return data as any;
}
async function getPopular_right_now(): Promise<any> {
  const response = await fetch(`${API_BASE_URL}/get-search-suggestions`, {
    cache: "no-store",
  });
  if (!response.ok) {
    return [];
  }
  const data: any = await response.json();
  return data as any;
}

export default async function FooterSeo({isMobile}:any) {
  const { data, meta_img } = await getABout();
  const search_query = await getPopular_right_now();

  return (
    <div className="footerSeo">
      <Container className="pb-[70px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className={` ${isMobile ? 'text-white' :''} AccordionTrigger`}>
              Popular search query
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-row flex-wrap w-full gap-2">
                {search_query &&
                  search_query.map((item: any, index: any) => (
                    <div className="flex flex-col" key={index}>
                      <a className={` text-sm md:text-base ${isMobile ? '!text-white' :'text-neutral-black'}  `} href={`/search?q=${item.query}`}>{item.query} | </a>
                    </div>
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className={` ${isMobile ? 'text-white' :''} AccordionTrigger`}>
            More information
            </AccordionTrigger>
            <AccordionContent>
            <div
                  className={` mobile_heading text-sm md:text-base ${isMobile ? '!text-white' :'text-neutral-black'}  `}
                  dangerouslySetInnerHTML={{
                    __html: data?.content,
                  }}
                />
            </AccordionContent>
          </AccordionItem>

        </Accordion>
        {/* <div className="popular_search mb-[40px]">
                    <h4 className='text-center text-xl font-medium border border-b border-primary mb-3'>Popular search query</h4>
                    <div className='flex flex-row flex-wrap w-full gap-2'>
                        {
                            search_query && search_query.map((item: any, index: any) => (
                                <div className="flex flex-col" key={index} >
                                    <a href={`/search?q=${item.query}`}>{item.query} | </a>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className="seo_content">
                    <h4 className='text-center text-xl font-medium border border-b border-primary mb-3 '>More information</h4>
                    <div className=' text-sm md:text-base text-neutral-black ' dangerouslySetInnerHTML={{
                        __html: data?.content
                    }} />
                </div> */}
      </Container>
    </div>
  );
}
