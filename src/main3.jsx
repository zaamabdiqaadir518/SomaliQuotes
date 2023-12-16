import { useState } from "react";

function Main(){
    const [color, setColor]= useState("")
    const updateColor = () =>{
        setColor("red")
    }
    const reserColor = () =>{
        setColor("black")
    }
    return <div className="w-[400px] rounded-xl p-4 m-10">
        <h1 style={{color:color}} className="text-5xl font-bold mb-5">This is State</h1>
        <button onClick={updateColor} className="border-2 to-blue-500 text-xl bg-red-500">Save</button>
        <button onClick={reserColor} className="border-2 to-blue-500 text-xl bg-red-500">Delete</button>

    </div>
}
export default Main