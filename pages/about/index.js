import Image from 'next/image'

export default function About() {
    return (
        <>
         {/* <div className="absolute top-0 left-0 z-10 h-full bg-blue-400">
                        <div className="h-full flex flex-col justify-center">
                            <Image src="/../public/imgs/hippo-pink.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="60%" />
                        </div>
                    </div> */}
            {/* <div className="h-full">
                <div className="bg-[url('/../imgs/about-bg.png')] bg-auto bg-no-repeat bg-center h-full bg-red-400">
                    <div className="h-full flex justify-center items-center bg-red-400">
                        <Image src="/../public/imgs/logo-big.png" alt="large logo image" layout="responsive" objectFit="contain" width="60%" height="60%" />
                    </div>
                   
                </div>
            </div> */}
            <div className="h-full">
                <Image src="/../public/imgs/about.jpg" alt="about image" layout="responsive" objectFit="cover" width="61%" height="100%" />
            </div>
        </>
    )
}