import Image from "next/image"
import Ring1 from "../public/Rings/R1.jpg"
import Ring2 from "../public/Rings/R2.jpg"
import Ring3 from "../public/Rings/R3.jpg"
import Ring4 from "../public/Rings/R4.jpg"
import Ring5 from "../public/Rings/R5.jpg"
import Ring6 from "../public/Rings/R6.jpg"
import Ring7 from "../public/Rings/R7.jpg"
import Ring8 from "../public/Rings/R8.jpg"
import Ring9 from "../public/Rings/R9.jpg"
import Ring10 from "../public/Rings/R10.jpg"

export default function Rings(){
    return(
        <div>
        <div className="flex justify-center items-center">
           <h1 className="font-serif text-center text-2xl">The CHARMLY Rings</h1> 
        </div>
        <div className="flex">
                <Image 
                src={Ring1}
                alt="Rings"
                />
                <Image 
                src={Ring2}
                alt="Rings"
                />
                <Image 
                src={Ring3}
                alt="Rings"
                />
                <Image 
                src={Ring4}
                alt="Rings"
                />
                <Image 
                src={Ring5}
                alt="Rings"
                />
                </div>
                <div className="flex">
                <Image 
                src={Ring6}
                alt="Rings"
                />
                <Image 
                src={Ring7}
                alt="Rings"
                />
                <Image 
                src={Ring8}
                alt="Rings"
                />
                <Image 
                src={Ring9}
                alt="Rings"
                />
                <Image 
                src={Ring10}
                alt="Rings"
                />
                </div>
        </div>
    )
}