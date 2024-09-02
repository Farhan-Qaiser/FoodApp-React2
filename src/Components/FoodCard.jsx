import Pizza from "../assets/pizza.jpg"


function FoodCard({url,name}) {


    return (
        <div className="rounded-md overflow-hidden relative">
            <img src={url} className="h-[25rem] rounded-md" />
            <p className="absolute bottom-[10%] right-[50%] translate-x-[50%] translate-y-[50%] text-white font-bold">{name}</p>
        </div>
    )
}

export default FoodCard
