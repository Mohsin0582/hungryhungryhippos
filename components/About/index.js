import Image from 'next/image'

export default function About() {
    const data = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum 
    dolore eu fugiat nulla pariatur.`

    return (
        <>
            <div className="h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 h-full">
                    <div className="pb-16 sm:pb-0 col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center">
                        <div className="w-[92%] md:w-[80%] lg:w-[70%] mx-auto">
                            <h1 className='uppercase font-medium text-center text-2xl pb-5 sm:pb-20'>About section</h1>
                            <h2 className='uppercase font-comic-bold-fill flex justify-center items-center text-center md:text-base lg:text-xl' dangerouslySetInnerHTML={{__html: data}} />
                        </div>
                    </div>
                    <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="h-full flex flex-col justify-center rotate-12">
                            <Image src="/imgs/down-hippo.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="60%" />
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}