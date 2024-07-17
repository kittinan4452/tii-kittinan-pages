"use client";
import { useState } from "react"

export default function Navbar(){
    const [isMenuOpen,setIsMenuOpne] = useState(false);
    const toggleMenu = () =>{
        setIsMenuOpne(!isMenuOpen)
    };
    return (
        
        <nav >
            <div className="fixed  w-full z-20 top-0 start-0 backdrop-blur-sm ">
            <div className="flex items-center justify-between  mx-auto p-4 max-w-screen-xl   ">
            <div>
                <a href="">
                    <div className="flex">
                    <h1 className="font-Kode_Mono text-4xl font-bold text-red-600">Tii-</h1>
                    <h1 className="font-Kode_Mono text-4xl font-bold text-white">Kittinan</h1>
                    </div>
                </a>
            </div>
            <div>
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-9 mx-5">
                    <li><a href="#contentinfo" className="hover:text-red-700 font-Kode_Mono">Home</a></li>
                    <li><a href="#abortandskills" className="hover:text-red-700 font-Kode_Mono">Abort & Skills</a></li>
                    <li><a href="#experiences" className="hover:text-red-700 font-Kode_Mono">Experiences</a></li>
                    <li><a href="#contact" className="hover:text-red-700 font-Kode_Mono">Contact</a></li>
                </ul>
            </div>
            </div>
            {isMenuOpen ? (
                <ul className="flex-col md:hidden  mx-4 space-y-2 ">
                <li><a href="#contentinfo" className="font-Kode_Mono hover:text-red-700">Home</a></li>
                <li><a href="#abortandskills" className="font-Kode_Mono hover:text-red-700">Abort</a></li>
                <li><a href="#experiences" className="font-Kode_Mono hover:text-red-700">Experiences</a></li>
                <li><a href="#contact" className="font-Kode_Mono hover:text-red-700">Contact</a></li>
            </ul>
            ): null
          }
            </div>
            
        </nav>
        
    )
}