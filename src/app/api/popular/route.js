import { NextResponse } from 'next/server'
import data from "../data/data"
       
export async function GET(req,res) {   
 
    const {Popular} = data
    

   return NextResponse.json(Popular)
}