import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className=" min-h-dvh px-20">
            <header className="flex justify-between items-center">
                <div className="flex justify-center items-center">
                    <img src="/svgs/buy.svg" alt="Ooja logo" width={100} />{" "}
                    <h2 className="font-iceberg text-5xl">Ooja</h2>
                </div>
                <nav>
                    <ul className="flex justify-center items-center space-x-2">
                        <li>
                            <Link to="/login" className="bg-indigo-600 text-white   py-2 px-4 rounded-md font-bold">Log In</Link>
                        </li>
                        <li>
                            <Link to="/signup" className="bg-rose-500 text-white py-2 px-4 rounded-md font-bold">Sign Up</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="flex flex-col items-center justify-center min-h-[500px] relative"> 
                   <h1 className="font-extrabold text-center font-iceberg text-7xl">
                     Welcome to the best place to buy and sell your favourite items.<span className="oj">Ooja</span> is your one stop<span className="oj"> market place</span>

                </h1>
                <p className="text-center text-slate-800 text-lg my-10">
                We offer fast, reliable delivery services to bring your items right to your doorstep. At Ooja, we serve customers nationwide, providing a wide variety of products, from household essentials to food, groceries, and much more to meet all your needs.
                    </p> 
                    <Link to="/signup" className=" bg-rose-500 text-white py-2 px-4 rounded-md font-bold">Get Started</Link>

                    
            </div>
        </div>
  )
}

export default Hero