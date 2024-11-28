import { useContext, useEffect, useState } from "react"
import Title from "./Title"
import { ShopContext } from "../context/ShopContext"
import Item from "./Item"



function NewArrivals() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
    const {products} = useContext(ShopContext)
    const [newArrivals , setNewArrival] = useState([])
    useEffect(() => {
        const data = products.slice(0,10)
        setNewArrival(data)

    },[products])
  return (
    <section className="max-padd-container py-16">
        <Title title={'New Arrivals'} titleStyles={'text-center'}/>
        {/* container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {newArrivals.map((product) => (
               <div onClick={scrollToTop} key={product._id}>
                <Item product={product} />
               </div> 
          ))}
        </div> 
    </section>
  )
}

export default NewArrivals
