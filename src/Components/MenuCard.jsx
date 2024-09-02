function MenuCard({url,name,price,description}) {
    return (
        <div className="flex border border-gray-300 rounded-lg px-4 py-2 gap-x-2 md:w-[40%]">
           <img src={url} className="w-32 h-48 object-cover rounded-md" />
           <div className="flex flex-col">
           <span className="text-gray-900 text-lg font-bold">{name}</span>
           <span className="">Rs: {price} /-</span>
           <p className="my-2">{description}</p>
           <button className="w-32 mt-2
           3 py-2 rounded-md bg-gradient-to-tl from-orange-600 to-orange-500 text-white font-bold active:bg-gradient-to-tl hover:from-orange-700 hover:to-orange-500 hover:text-gray-200">Order Now</button>
           </div>
        </div>
    )
}

export default MenuCard
