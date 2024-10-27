import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Logo.jpg"
export default function Navbar(){
    return(
        <div className="flex items-center justify-between text-left gap-4 p-2 bg-blue-950 text-white">
            <div className="flex items-center space-x-4">
                <div className="w-16 h-16">
                   <Image  
               src={Logo} 
               alt="Logo"
               layout="responsive"
               objectFit="cover"
               /> 
                </div>
            <h1 className="text-2xl font-bold text-slate-300 font-serif">The CHARMLY</h1> 
            </div>
           <div className="flex items-center gap-5">
            <Link href="./">Home</Link>
            <Link href="./bracelets">Bracelets</Link>
            <Link href="./rings">Rings</Link>
            <Link href="./necklaces">Necklaces</Link>
            <Link href="./reviews">Reviews</Link>
           </div>
           
        </div>
    )
}