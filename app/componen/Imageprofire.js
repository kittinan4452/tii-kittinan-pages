"use client";
import Image from "next/image"
export default function Imageprofile(){
    return(
        <div className="lg:ml-32 mask mask-hexagon-2 shadow-2xl "  >
            <Image src="../image/tii.jpg" width={400} height={300}  className="p-12 mask mask-hexagon-2  shadow-inner "/>
        </div>
    )
}