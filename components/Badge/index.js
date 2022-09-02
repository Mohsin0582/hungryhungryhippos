import Link from 'next/link'
import Image from 'next/image'

export default function Badge() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-3 md:col-span-1">
                    <div className='flex items-center'>
                        <Link href={``} className="w-full flex flex-col items-start justify-start">
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/lunar.png" alt="lunarcrush" layout="responsive" objectFit="contain" width="100%" height="12px" />
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center h-[64.94px]'>
                        <Link href={``} className="w-full">
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/nomics.png" alt="nomics" layout="responsive" objectFit="contain" width="100%" height="11px" />
                            </a>
                        </Link>
                    </div>
                </div>


                <div className="col-span-3 md:col-span-1">
                    <div className='invisible flex items-center'>
                        <Link href={``}>
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/sep.png" alt="sep" layout="responsive" objectFit="contain" width="100%" height="10px" />
                            </a>
                        </Link>
                    </div>
                    <div className='flex'>
                        <Link href={``}>
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/sep.png" alt="lunarcrush" layout="responsive" objectFit="contain" width="100%" height="80px" />
                            </a>
                        </Link>
                        <Link href={``}>
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/meta.png" alt="meta" layout="responsive" objectFit="contain" width="100%" height="80px" />
                            </a>
                        </Link>
                        <Link href={``}>
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/meme.png" alt="meme" layout="responsive" objectFit="contain" width="100%" height="80px" />
                            </a>
                        </Link>
                        <Link href={``}>
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/poop.png" alt="poop" layout="responsive" objectFit="contain" width="100%" height="80px" />
                            </a>
                        </Link>
                    </div>
                </div>


                <div className="col-span-3 md:col-span-1 pb-4 sm:pb-0">
                    <div className='flex items-center'>
                        <Link href={``}>
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/rabbit.png" alt="rabbitcrush" layout="responsive" objectFit="contain" width="100%" height="18px" />
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-center h-[64.94px]'>
                        <Link href={``}>
                            <a rel="noopener noreferrer" className='w-full'>
                                <Image src="/imgs/wallets/bsc.png" alt="poop" layout="responsive" objectFit="contain" width="100%" height="14px" />
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}