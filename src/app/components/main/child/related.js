import Link from "next/link";
import Image from "next/image";
import Author from "./author";

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Related(){

  const data = await getData()

  return (
    <section className="pt-20 ">
      <h1 className="font-bold text-3xl py-10"> Related</h1>
      <div className="flex flex-col gap-10">
      {
        data.map((value,index) =>(
          <Post data={value} key={index}></Post>
        ))
      }
       
      </div>
    </section>
  );
};



function Post({data}) {

  const {id , title, subtitle, category , img,description, published, author} = data
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            src={img}
            className="rounded"
            height={200}
            width={300}
          ></Image>
        </Link>
      </div>
      <div className="info flex justify-center flex-col ">
        <div className="cat">
          <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800 ">
          {category || "unknown"}
          </Link>
          <Link href={`/posts/${id}`} className="text-gray-800 hover:text-gray-600 ">
            - {published || "unknown "}
          </Link>
        </div>
        <div className="title">
          <Link
           href={`/posts/${id}`}
            className="text-xl  font-bold text-gray-800 hover:text-gray-600 "
          >
          {title || "Title"}
          </Link>
        </div>

        <Author {...author}></Author>
      </div>
    </div>
  );
}
