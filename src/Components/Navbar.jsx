import Img from "../assets/logo.png"


function Navbar() {
    return (
        <nav className="flex justify-between px-8 sm:flex-row flex-col">
        <div className="flex items-center justify-center">
            <img src={Img} className="w-[60px]"/>
            <h1 className="font-bold text-gray-600 text-lg ml-2">TASTY EATS</h1>
        </div>
        <div className="flex gap-x-5 justify-center items-center ">
            <h1 className="text-gray-600 font-semibold hover:text-orange-600 hover:cursor-pointer transition-all hover:pb-2">Home</h1>
            <h1 className="text-gray-600 font-semibold hover:text-orange-600 hover:cursor-pointer transition-all hover:pb-2">Gallery</h1>
            <h1 className="text-gray-600 font-semibold hover:text-orange-600 hover:cursor-pointer transition-all hover:pb-2">About</h1>
            <h1 className="text-gray-600 font-semibold hover:text-orange-600 hover:cursor-pointer transition-all hover:pb-2">Contact</h1>
        </div>
        </nav>
    )
}

export default Navbar
