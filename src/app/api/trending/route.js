import { NextResponse } from 'next/server'
import data from "../data/data"
       
export async function GET() {   
    const {Trending} = data
   return NextResponse.json(Trending)
}