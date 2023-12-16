function Hero(Props){
    return  <div className="w-[200px] rounded-5xl p-3  m-2">
     <img className="w-full h-[200px]" src={Props.image} alt="" />

      <h1 className="font-bold">{Props.title}</h1>
      <p>{Props.desc}</p>
      <h2 className="font-bold">{Props.paid}</h2>
      <button className="bg-yellow-500 text-white rounded-xl p-2">{Props.btn}</button>
   
    {/* "https://img.freepik.com/free-photo/young-businesswoman-posing-with-copy-space_23-2148826478.jpg?size=626&ext=jpg&ga=GA1.1.1394318484.1702282967&semt=sph" alt="" /> */}
  </div>
  }
  export default Hero