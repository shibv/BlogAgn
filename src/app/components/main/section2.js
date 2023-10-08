import Link from "next/link";
import Image from "next/image";
import Author from "./child/author";
//import getPost from "../../../../lib/helper";

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

export default async function section2() {
  
  const data = await getData()

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className=" font-bold text-4xl py-12 text-center">Lastes Post</h1>
      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
      {
        data.map((value,index) =>(
          <Post data={value} key={index}></Post>
        ))
      }
      </div>
    </section>
  );
}

// export default section2;

function Post({data}) {
  const {id , title, subtitle, category , img,description, published, author} = data
  return (
    <div className="item">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <Image
            src={img}
            width={500}
            height={350}
            className="rounded"
          ></Image>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
        <p className="text-gray-500 py-3">
          {subtitle}
        </p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
