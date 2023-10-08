
import Author from "../../components/main/child/author";
import Image from "next/image";

import Related from "../../components/main/child/related";

async function getData() {
  // console.log(id)

  const res = await fetch("http://localhost:3000/api/posts")

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }


  return res.json()
}

export default async function page({ params }){
   const idd = params.postId[0]
   console.log(idd)
  
  const data = await getData()

  
  const neww =   data.find(value=> value.id == idd)
  

 

  const {id , title, subtitle, category , img,description, published, author} = neww;

  // console.log(params.postId[0])
  return (
    <section className="conatiner mx-auto md:px-2 py-16  w-1/2 ">
      <div className="flex justify-center">
        <Author {...author} />
      </div>

      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center">
          {" "}
          {title || "Title"}
        </h1>
        <p className="text-gray-500 text-xl text-center ">
        {subtitle}
        </p>
        <div className="py-10">
          <Image src={img} width={900} height={600}></Image>
        </div>
        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <p>
          {description}
          </p>
         
        </div>
      </div>

      <Related />
    </section>
  );
};


