import {ImFacebook, ImTwitter, ImYoutube} from 'react-icons/im'
import Link from 'next/link' 
import Newsletter from '../main/child/newsletter'

const Footer = () => {
    return (
      <footer className="bg-gray-50">
        <Newsletter></Newsletter>
        <div className="conatiner mx-auto flex justify-center py-12">
          <div className="py-5">
            <div className="flex gap-6 justify-center">
            <Link href={"/"}><ImFacebook></ImFacebook></Link>
            <Link href={"/"}><ImTwitter></ImTwitter></Link>
            <Link href={"/"}><ImYoutube> </ImYoutube></Link>
            </div>
            <p className='py-5 text-gray-400 '>Copyright 2023 All rights reserved | This template is made with by Shiv </p>
            <p className='text-gray-400 text-center'>Terms & Condition</p>
          </div>

        </div>

      </footer>
    )
  }
  
  export default Footer