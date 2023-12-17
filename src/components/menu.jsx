import { useState } from "react"

function Menu(){

    const [isOpen, setIsOpen]=useState (false)

    const handleIsOpen = ()=>{
        setIsOpen(true)
    }

    const handleClose = ()=>{
        setIsOpen(false)
    }
    return <div className=" flex bg-blue-500  px-5 py-8 justify-between text-white">
        <h1 className="text-5xl font-bold ">Menu</h1>
        <i style={{display:isOpen ===true ? "none": ""}} onClick={handleIsOpen} class="fa-solid fa-bars sm:hidden absolute right-2 text-4xl"></i>
        <i style={{display:isOpen ===true ? "block": "none"}} onClick={handleClose} class="fa-solid fa-x sm:hidden absolute right-2 text-4xl "></i>
        <ul style={{display:isOpen ===true ? "block": ""} } className=" space-x-0 text-5xl  sm:flex-row  flex-column mt-16 sm:space-x-14 hidden sm:flex sm:mt-0 sm:space-y-6   ">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Price</li>

        </ul>
    </div>
}
export default Menu