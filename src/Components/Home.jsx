import Img from "../assets/cover.jpg"
import FoodCard from "./FoodCard"
import MenuCard from "./MenuCard"

const foodCard = [
    {
        id:1,
        url:'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name:"Burger",
    },{
        id:2,
        url:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:'Pizza',
    },{
        id:3,
        url:"https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:'Momos',
    },
]
const menuCard = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
      price: "1000",
      imageUrl: "https://images.unsplash.com/photo-1573821663912-6df460f9c684?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, Caesar dressing, croutons, and Parmesan cheese.",
      price: "400",
      imageUrl: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Spaghetti Carbonara",
      description: "Traditional Italian pasta with eggs, cheese, pancetta, and pepper.",
      price: "800",
      imageUrl: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      description: "Rich chocolate cake with a molten chocolate center, served with vanilla ice cream.",
      price: "300",
      imageUrl: "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];



function Home() {
    return (
        <>
         <section className="relative">
            <img src={Img} className="w-full h-[50vh] object-cover" />
            <div className="absolute   top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="flex gap-1">
                    <input type="text" placeholder="Search Food" className="px-4 w-[40vw] py-2 border rounded-lg focus:outline-none border-gray-600"/>
                    <button className="px-6 py-2 rounded-md bg-gradient-to-tl from-orange-600 to-orange-500 text-white font-extrabold">Search</button>
                </div>
            </div>
         </section>
         <section className="w-[100vw] flex flex-col justify-center items-center">
            <h1 className="text-center font-bold text-3xl text-gray-700 my-8">Explore Food</h1>
            <div className="w-full flex flex-wrap justify-center items-center gap-10">
                {foodCard.map((item)=>
                    <FoodCard key={item.id} url={item.url} name={item.name}/>
                    )}
            </div>
         </section>
         <section className="mx-auto">
            <h2 className="text-center font-bold text-2xl text-gray-700 my-10">Food Menu</h2>
            <div className="flex flex-wrap justify-around gap-5 sm:px-3">
                {menuCard.map((item)=>
                    <MenuCard key={item.id} url={item.imageUrl} name={item.name} price={item.price} description={item.description}/>)}
            </div>
         </section>
        </>
    )
}

export default Home
