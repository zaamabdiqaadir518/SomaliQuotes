import React from 'react'
import {createRoot} from "react-dom/client"

import "./assign2.css"

const root=document.getElementById("root")

createRoot(root).render(
<div>
<SayHi/>
</div>



)
function SayHi(){
    return <div>
        <h1>This is first Combonent</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nam laudantium libero ea architecto? Excepturi?</p>
    </div>
}