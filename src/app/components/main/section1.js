"use client";
import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

async function getData() {
  const res = await fetch('http://localhost:3000/api/trending')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}



export default async function Section1() {


  const data = await getData()


  return (
    <section
      className="py-16"
      style={{
        background: "url('/images/Banner.jpg')no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
         {
          data.map((value,index)=>(
            <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
          ))
         }
        </Swiper>
      </div>
    </section>
  );
};


function Slide({data}) {

  const {id , title, subtitle, category , img,description, published, author} = data
  return (
    <>
      <div className="grid md:grid-cols-2">
        {/* col1 */}
        <div className="image ">
          <Link href={`/posts/${id}`}>
            <Image href={`/posts/${id}`} src={img} width={600} height={600}></Image>
          </Link>
        </div>
        {/* info */}
        <div className="info flex justify-center flex-col">
          <div className="cat">
            <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800 ">
            {category || "unknown"}
            </Link>
            <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600 ">
              -   {published || "Unknown"}
            </Link>
          </div>
          <div className="title">
            <Link
              href={`/posts/${id}`}
              className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600 "
            >
              {title || "Title"}
            </Link>
          </div>
          <p className="text-gray-500 py-3">
          {description}
          </p>
          <Author {...author}></Author>
        </div>
      </div>
    </>
  );
}
