import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-lg mx-auto">
            <div>
                <Image src="/Logo.png" alt="logo" width={200} height={100}/>
            </div>
            <div className="md:flex md:space-x-10 md:mt-0 mt-4">
                <ul className="flex flex-col md:flex-row md:space-x-10">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Partners</Link></li>
                    <li><Link href="#">FAQ</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>
                <ul className="flex space-x-5 md:mt-0 mt-4">
                    <li><Link href="#">EN</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
