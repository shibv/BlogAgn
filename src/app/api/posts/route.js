
import { NextResponse } from 'next/server'
import data from "../data/data"

       
export async function GET() {   
 
    const {Posts} = data
   
   return NextResponse.json(Posts)
}