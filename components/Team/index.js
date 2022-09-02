import Image from 'next/image'

export default function Team() {
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
            <div className="w-full">
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-full pb-5'>
                        <div className="w-[90%] sm:w-[50%] mx-auto">
                            <Image src="/imgs/leading.png" alt="team leading image" layout="responsive" objectFit="contain" width="100%" height="9%" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="w-[90%] sm:w-[53%] mx-auto">
                            <div className='flex items-center justify-between'>
                                <div className="w-[20%]">
                                    <Image src="/imgs/helga.png" alt="team leading image" layout="responsive" objectFit="contain" width="100%" height="100%" />
                                </div>
                                <div className="w-[20%]">
                                    <Image src="/imgs/dippo.png" alt="team leading image" layout="responsive" objectFit="contain" width="100%" height="100%" />
                                </div>
                                <div className="w-[20%]">
                                    <Image src="/imgs/rippo.png" alt="team leading image" layout="responsive" objectFit="contain" width="100%" height="100%" />
                                </div>
                                <div className="w-[20%]">
                                    <Image src="/imgs/maxie.png" alt="team leading image" layout="responsive" objectFit="contain" width="100%" height="100%" />
                                </div>
                            </div>
                            <h2 className='pt-5 px-4 uppercase font-comic-bold-fill flex justify-center items-center text-center text-[10px]' dangerouslySetInnerHTML={{__html: data}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}