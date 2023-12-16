
import { useState } from "react"


function Hero() {

    const [counter, setCounter] = useState(0)

// increment function
    const handleIncrement = () => {
      setCounter(counter + 1)
    }
// decrement function
    const handleDecrement = () => {
      if(counter > 0){
        setCounter(counter - 1)
      }
    }
    
// Reset function
    const handleReset = () => {
      setCounter(0)
    }

  return <div className=" text-center mt-20">
    <h1 style={{ color: counter == 10 ? "red" : "" }}  className="text-9xl mb-10"> {counter} </h1>
    
    <button onClick={handleIncrement} className="bg-blue-400 p-3 rounded m-4">Increment</button>
    <button onClick={handleDecrement} className="bg-blue-400 p-3 rounded m-4">Decrement</button>
    <button onClick={handleReset} className="bg-blue-400 p-3 rounded m-4">Reset</button>
  </div>

}

export default Hero