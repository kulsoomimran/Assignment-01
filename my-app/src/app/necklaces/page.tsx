import Image from "next/image"
import Necklace1 from "../public/Necklaces/N1.jpg"
import Necklace2 from "../public/Necklaces/N2.jpg"
import Necklace3 from "../public/Necklaces/N3.jpg"
import Necklace4 from "../public/Necklaces/N4.jpg"
import Necklace5 from "../public/Necklaces/N5.jpg"
import Necklace6 from "../public/Necklaces/N6.jpg"
import Necklace7 from "../public/Necklaces/N7.jpg"
import Necklace8 from "../public/Necklaces/N8.jpg"
import Necklace9 from "../public/Necklaces/N9.jpg"
import Necklace10 from "../public/Necklaces/N10.jpg"
import Necklace11 from "../public/Necklaces/N11.jpg"



export default function Necklaces(){
    return(
        <div>
        <div className="flex justify-center items-center ">
           <h1 className="font-serif text-center text-2xl">The CHARMLY Necklaces</h1> 
        </div>
            <div className="flex">
            <Image
            src={Necklace1}
            alt="Necklace"
            />
            <Image
            src={Necklace2}
            alt="Necklace"
            />
            <Image
            src={Necklace3}
            alt="Necklace"
            />
            <Image
            src={Necklace4}
            alt="Necklace"
            />
            <Image
            src={Necklace5}
            alt="Necklace"
            />
            <Image
            src={Necklace11}
            alt="Necklace"
            />
            </div>
            <div className="flex">
            <Image
            src={Necklace7}
            alt="Necklace"
            /> 
            <Image
            src={Necklace8}
            alt="Necklace"
            /> 
            <Image
            src={Necklace9}
            alt="Necklace"
            /> 
            <Image
            src={Necklace10}
            alt="Necklace"
            /> 
            <Image
            src={Necklace11}
            alt="Necklace"
            /> 
            <Image
            src={Necklace6}
            alt="Necklace"
            />
            </div>

            
        </div>
    )
}