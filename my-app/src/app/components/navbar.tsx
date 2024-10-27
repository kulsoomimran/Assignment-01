import Link from "next/link"
import Image from "next/image"
import Logo from "../public/Logo.jpg"
export default function Navbar(){
    return(
        <div className="flex items-center justify-between text-left gap-4">
            <Image src={Logo} alt="Logo"/>
            <h1>The CHARMLY</h1>
           <Link href="./">Home</Link>
           <Link href="./bracelets">Bracelets</Link>
           <Link href="./rings">Rings</Link>
           <Link href="./necklaces">Necklaces</Link>
           <Link href="./reviews">Reviews</Link>
        </div>
    )
}