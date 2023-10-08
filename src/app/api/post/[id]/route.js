
import { NextResponse } from 'next/server'
import data from "../../data/data"

       
export async function GET(request, { params }) {   
 
    const {Posts} = data
    const slug = params.slug
     console.log(params.id)

     if(params.id){
        const post = Posts.find(value => value.id == params.id)
        return NextResponse.json(post)
     }
   return NextResponse.json(Posts)
}