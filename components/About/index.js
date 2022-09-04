import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    const data = `The Hungry Hungry Hippos team believes that with the London Fork and upcoming events in the Ethereum blockchain, Ethereum holds one of the most promising futures of all cryptocurrencies.
    Hungry Hungry Hippos will utilize 80% of all funds collected and convert into Ethereum.
    Rather than pairing with HHH tokens and increasing the trading liquidity, only 10% of all funds raised will be dedicated to HHH LP -
    creating a fast moving, and highly tradable token with LOW TAX !`

    return (
        <>
            <div className="h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    <div className="pb-16 sm:pb-0 col-span-1 flex flex-col justify-center items-center">
                        <div className="w-[92%] md:w-[80%] lg:w-[70%] mx-auto">
                            <h1 className='uppercase font-medium text-center text-2xl pb-5 sm:pb-20'>About section</h1>
                            <h2 className='uppercase font-comic-bold-fill flex justify-center items-center text-center md:text-base lg:text-xl' dangerouslySetInnerHTML={{__html: data}} />
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col justify-center item-center">
                        <div className="flex flex-col justify-center item-center">
                            <Image src="/imgs/hippo-pink.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="30%" />
                        </div>
                        <div className='flex justify-center items-center py-8'>
                            <Link href="/about">
                                <a title="About page" rel="noopener noreferrer" className='comic-button'>
                                    <span>More</span>
                                    <span>Info</span>
                                    <span>Here</span>
                                </a>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-center rotate-12">
                            <Image src="/imgs/down-hippo.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="40%" />
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}