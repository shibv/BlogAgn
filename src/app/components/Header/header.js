import {ImFacebook, ImTwitter, ImYoutube} from 'react-icons/im'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search...." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"} className='font-bold uppercase text-3xl '>Blog</Link>

        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <a href=""><ImFacebook></ImFacebook></a>
            <a href=""><ImTwitter></ImTwitter></a>
            <a href=""><ImYoutube> </ImYoutube></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
