import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import foodAnimation from "../assets/animations/Food.json";

const Fooddel = () => {
  return (
    <div>
         <div className="flex justify-center items-center">
      <Player 
        autoplay
        loop
        src={foodAnimation}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
    </div>
  )
}

export default Fooddel