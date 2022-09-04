import Image from 'next/image'
import Link from 'next/link'

export default function Tokenomics() {
    const data = `By creating a 3% / 3% tax system that is ENTIRELY dedicated to TRUE BURNS, (what !? no Dev tax!?) we have made a low gas, low tax, 
    easy trading token that will DECIMATE supply with every trade - increasing YOUR share of the staked LP value! `

    const kyc = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat.`

    return (
        <>
            <div className="grid sm:grid-cols-4 md:grid-cols-8">
                <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col justify-center items-center px-0 md:px-7 pb-5 sm:pb-0">
                    <div className="w-full">
                        <div className="flex flex-col justify-center -rotate-2 pb-6">
                            <Image src="/imgs/tokenomics.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="20%" />
                        </div>
                        <h2 className='px-4 sm:px-0 uppercase font-comic-bold-fill flex justify-center items-center text-center text-md' dangerouslySetInnerHTML={{__html: data}} />
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2 md:col-span-2 px-0 md:px-7">
                    <div className="flex flex-col justify-center pb-6">
                        <Image src="/imgs/pinksale-2.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="46%" />
                    </div>
                    <h2 className='px-4 sm:px-0 uppercase font-comic-bold-fill flex justify-center items-center text-center text-xs' dangerouslySetInnerHTML={{__html: kyc}} />
                </div>
                <div className="col-span-1 sm:col-span-4 md:col-span-3 py-12 sm:py-16 px-0 md:px-7 flex flex-col items-center justify-center">
                    <Link href="https://dessertswap.finance">
                        <a target="_blank" title="Audit" rel="noopener noreferrer" className='comic-button'>
                            <span>View</span>
                            <span>Audit</span>
                        </a>
                    </Link>
                </div> 
            </div>
        </>
    )
}