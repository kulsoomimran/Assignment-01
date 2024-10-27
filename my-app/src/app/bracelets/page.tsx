import Image from "next/image"
import Bracelet1 from "../public/Bracelets/B1.jpg"
import Bracelet2 from "../public/Bracelets/B2.jpg"
import Bracelet3 from "../public/Bracelets/B3.jpg"
import Bracelet4 from "../public/Bracelets/B4.jpg"
import Bracelet5 from "../public/Bracelets/B5.jpg"
import Bracelet6 from "../public/Bracelets/B6.jpg"
import Bracelet7 from "../public/Bracelets/B7.jpg"
import Bracelet8 from "../public/Bracelets/B8.jpg"
import Bracelet9 from "../public/Bracelets/B9.jpg"
import Bracelet10 from "../public/Bracelets/B10.jpg"
import Bracelet11 from "../public/Bracelets/B11.jpg"
import Bracelet12 from "../public/Bracelets/B12.jpg"

export default async function Bracelets(){
    await new Promise((resolve) => {
        setTimeout(resolve, 8000)
    }) 

    return(
        <div>
            <div className="flex justify-center items-center">
               <h1 className="font-serif text-center text-2xl">The CHARMLY Bracelets</h1> 
            </div>
            <div className="flex">
                <Image 
                src={Bracelet1}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet2}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet3}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet4}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet5}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet6}
                alt="Bracelet"
                />
                </div>
                <div className="flex">
                <Image 
                src={Bracelet7}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet8}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet9}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet10}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet11}
                alt="Bracelet"
                />
                <Image 
                src={Bracelet12}
                alt="Bracelet"
                />
            </div>
        </div>
    )
}