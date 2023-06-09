import CountryLookup from "./CountryLookup";

export default function Footer() {
  return (
    <footer>
        <div className="flex flex-col items-center justify-center w-full h-24">
            <CountryLookup/>            
        </div>
        <div className="flex flex-col items-center justify-center w-full h-24">
            <ul className="flex flex-row items-center justify-center w-full h-24">
                <li className="link flex flex-row items-center justify-center w-full h-24">About</li>
                <li className=" link flex flex-row items-center justify-center w-full h-24">Advertising</li>
                <li className="link flex flex-row items-center justify-center w-full h-24">Business</li>
                <li className="link flex flex-row items-center justify-center w-full h-24">How Search works</li>
            </ul>
            <ul className="flex flex-row items-center justify-center w-full h-24">
                <li className="flex link flex-row items-center justify-center w-full h-24">Privacy</li>
                <li className=" link flex flex-row items-center justify-center w-full h-24">Terms</li>
                <li className="link flex flex-row items-center justify-center w-full h-24">Settings</li>
            </ul>
        </div>
    </footer>

  )
}
