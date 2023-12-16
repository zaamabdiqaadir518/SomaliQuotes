import { useState } from "react"
import offImage from "./images/off.png"
import onImage from "./images/on.png"
function Hero(){
    const [bgcolor,setbgcolor] =useState("")
    const [textcolor,setTextcolor] = useState("")
    
    const onbtn=()=>{
         setbgcolor(true)
         setTextcolor(true)
    }
    const offbtn=()=>{
         setbgcolor(false)
         setTextcolor(false)
    }
return <div className="rounded-xl p-4 m-10" >
    <div style={{backgroundColor:bgcolor}} className="w-[400px] h-[400PX] border-2 border-red-500 rounded-full ml-[400px]">

<img  style={{display:bgcolor==true ? "block" :""}} src={onImage} />
<img  style={{display:bgcolor==false ? "block" :""}} src={offImage} />
    </div>
<div className="text-center mt-5">
    <button style={{color:textcolor == true ? "red" :""}} onClick={onbtn} className=" border-2 border-red-700 px-10 py-3 text-5xl">ON</button>
    <button style={{color:textcolor == false ? "red" :""}} onClick={offbtn} className=" border-2 border-red-700 px-10 py-3 text-5xl ml-3">OFF</button>
</div>
</div>

}
export default Hero