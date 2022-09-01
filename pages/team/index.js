import Image from 'next/image'

export default function Team() {
    return (
        <>
            <div className="h-screen w-full">
                <div className='h-screen flex flex-col items-center justify-center'>
                    <div className='w-full'>
                        <div className="w-[50%] mx-auto">
                            <Image src="/imgs/leading.png" alt="team leading image" layout="responsive" objectFit="contain" width="100%" height="17%" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="w-[62%] mx-auto flex items-center justify-between">
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
                    </div>
                </div>
            </div>
        </>
    )
} 