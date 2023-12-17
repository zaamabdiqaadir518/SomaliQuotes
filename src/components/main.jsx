import React, { useState } from 'react'

export default  function SomaliQuotes() {
    const[index,setIndex]=useState(0)
    const maahmah=[
        "1.Aadmi la aragyaaba, dhib la arag.",
        "2.Aan wada hadalno waa aan heshiino.",
       " 3. Abuur iyo waano, abuur baa horreysey.",
        "4.Abaal dad galaa badan, dad gudaase yar.",
       "5. Abaal raaga rag baa leh, mid baaqdana haween baa leh, mid soo dhakhsadana xoolaa leh.",
       "6. Abeesada taan sanqarta iyo tan aammusan, tan aamusan baa la qaatay.",
       "7. Abeesana dhul u eki bay wax ku dishaa, waadaadna dad u eki.",
       "8. Abkeey dooli diloow, dad nool maas u daahaa.",
       "9. Aboorku inta aanu kugu tufin ayaa lagu tufaa.",
       "10.afeef hore lahaw ama adkeesi dambe.",
       "11. Adhi been wuu didaa beense ma dhutiyo.",
       
        
    ]

    const NextBtn = () => {
        if (index < maahmah.length -1){
            setIndex(index + 1
                
                )
        }
    }
    const PreviousBtn = () => {
        if (index > 0){
            setIndex(index - 1)
                
                
        }
    }
    
   

  return (
    <div>
        <div className='text-center mt-2'>
        <h1 style={{display: index === maahmah.length-1 ? "block" :"none"}} className="font-bold text-red-500 ">DHAMAAD</h1>
        {/* <h1 className='my-20 text-3xl'> {maahmah[index]}</h1> */}

            <h1 className='my-20 text-3xl' style={{color:index ===2 ? "red" : "" }}> {maahmah[index]}</h1>
            
            <div className=''>
                <button onClick={PreviousBtn} className='bg-blue-400 px-8 py-3 rounded text-white'>Preview</button>
                <button  onClick={NextBtn} className='bg-blue-400 px-8 py-3 rounded text-white ml-10'>Next</button>

            </div>
        </div>
    </div>
  )
}