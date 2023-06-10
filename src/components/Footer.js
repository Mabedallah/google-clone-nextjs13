import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
        <div className="border-b px-8 py-3">
            <CountryLookup/>            
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            <ul className="flex items-center space-x-6">
                <li className="link flex flex-row items-center justify-center w-full h-24">About</li>
                <li className=" link flex flex-row items-center justify-center w-full h-24">Advertising</li>
                <li className="link flex flex-row items-center justify-center w-full h-24">Business</li>
                <li className="link flex flex-row items-center justify-center w-full h-24">How Search works</li>
            </ul>
            <ul className="flex items-center space-x-6">
                <li className="flex link flex-row items-center justify-center w-full h-24">Privacy</li>
                <li className=" link flex flex-row items-center justify-center w-full h-24">Terms</li>
                <li className="link flex flex-row items-center justify-center w-full h-24">Settings</li>
            </ul>
        </div>
    </footer>

  )
}
