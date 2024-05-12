import Link from "next/link";
import Button from "../components/Button"
import Image from "next/image";


const Footer = () => {
    return (
        <div>
            <div className="h-full mt-10 ">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h3 className="text-[#5C5B5B] text-sm">UPSKILL FOR A BETTER FUTURE</h3>
                    <h1 className="text-5xl">Request More Information</h1>
                    <p className="text-[#5C5B5B]">NexusTech is a software creation company, web applications and other projects in the IT field</p>
                    <Button/>
                    <p  className="text-[#5C5B5B] text-sm">© 2024 NexusTech</p>
                </div>
                <div className="flex justify-around mb-5">
                    <Image src="/Logo.png" alt="logo" width={200} height={100}/>
                    <ul className="flex gap-5 mt-9">
                        <li><Link href="#">HOME</Link></li>
                        <li><Link href="#">ABOUT US</Link></li>
                        <li><Link href="#">OUR SERVICES</Link></li>
                    </ul>

                    <ul className="flex gap-5 mt-7">
                        <li className="border-2 border-gray-50 rounded-full p-3">
                            <Image src="/icon.png" alt="icon" width={20} height={20}/>
                        </li>
                        <li className="border-2 border-gray-50 rounded-full p-3">
                            <Image src="/instagram.png" alt="icon" width={20} height={20}/>
                        </li>
                        <li className="border-2 border-gray-50 rounded-full p-3">
                            <Image src="/face.png" alt="icon" width={20} height={20}/>
                        </li>
                        <li className="border-2 border-gray-50 rounded-full p-3">
                            <Image src="/git.png" alt="icon" width={20} height={20}/>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Footer