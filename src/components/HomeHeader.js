import Link from "next/link";
import {TbGridDots} from 'react-icons/tb';
export default function HomeHeader() {
  return (
    <header className="flex justify-end items-center p-5 text-sm">
        <div className="flex items-center space-x-4">
            <Link href="https://mail.google.com" className="hover:underline">
                Gmail
            </Link>
            <Link href="https://images.google.com" className="hover:underline">
                Images
            </Link>            
            <TbGridDots 
            className=" bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md
            hover:brightness-105 hover:shadow-md transition-shadow
            ">Sign in</button>
        </div>
    </header>
  )
}
