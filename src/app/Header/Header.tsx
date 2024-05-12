import Image from "next/image";
import Button from "../components/Button";

const Header = () => {
    return (
        <header className="bg-black bg-gradient-to-b from-white to-gray-800 h-screen">
            <div className="flex justify-center items-center max-w-screen-lg mx-auto h-full">
                <div className="flex bg-black w-[1440px] h-[760px] rounded-3xl">
                    <div className="flex items-center  ml-24">
                        <div className="flex flex-col max-w-xl">
                            <h1 className="text-5xl mb-10">Discover the Power of Technology with <h1 className="text-gray-600">NexusTech</h1></h1>
                            <Button/>
                            <ul className="flex md:w-2/3 text-2xl gap-10 mt-10">
                                <li>240k+ Total Sale</li>
                                <li>100k+ Auctions</li>
                                <li>240k+ Artists</li>
                            </ul>
                        </div>
                        <div className="flex flex-col border border-white rounded-3xl w-[510px] h-[540px] bg-black max-w-2xl justify-center ml-40">
                            <Image src="/apple.png" alt="apple" width="510" height="400"/>
                            <div className="flex justify-between m-5">
                                <div className="flex flex-col space-y-4">
                                    <h5>Web Development</h5>
                                    <p className="flex items-center gap-2"><Image src="/logoperson.png" alt="logo" width={30} height={30}/>Constantin</p>
                                </div>
                                <div className="space-y-2">
                                    <Image src="/linkedin.svg" alt="icon" width={30} height={33}/>
                                    <Image src="/github.png" alt="icon" width={30} height={33}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
