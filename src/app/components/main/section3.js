import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "./child/author";

async function getData() {
  const res = await fetch("http://localhost:3000/api/popular");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function section3() {
  const data = await getData();
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}
            {data.map((value, index) => (
              <Post data={value} key={index}></Post>
            ))}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
          {
        data.map((value,index) =>(
          <Post data={value} key={index}></Post>
        ))
      }
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({data}) {
  const {id , title, subtitle, category , img,description, published, author} = data
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link  href={`/posts/${id}`}>
          <Image
            href={`/posts/${id}`}
            src={img}
            className="rounded"
            width={300}
            height={250}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link  href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
          {category || "unknown"}
          </Link>
          <Link  href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600">
            -  {published || "unknown "}
          </Link>
        </div>
        <div className="title">
          <Link
             href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
             {title || "Title"}
          </Link>
        </div>
        <Author {...author}></Author>
      </div>
    </div>
  );
}
