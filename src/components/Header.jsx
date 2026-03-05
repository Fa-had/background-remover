import Nav from "@/components/Nav";
import Image from "next/image";
import backgroundIcon from "@/public/background_remove_icon.png";

const Header = () => {
  return (
    <header className="flex flex-col mx-auto w-full p-8">
        <div className="flex justify-between">
          <div className="flex items-center space-x-2">
            <Image src={backgroundIcon} alt="logo" className="rounded-full" width={40} height={40} />
            <span className="text-xl font-bold text-gray-800">
              bg
              <span className="text-gray-400">Remove</span>
            </span>
          </div>
          <Nav />
          <div className="flex items-center space-x-4">
            <a href="#" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">Log in</a>
            <a href="#" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200">Sign up</a>
          </div>
        </div>
    </header>
  );
}
export default Header;