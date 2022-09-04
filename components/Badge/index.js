import Link from 'next/link'
import Image from 'next/image'

export default function Badge() {
    return (
        <>
            <div className="badges-wrapper">
                <div className="badges-item">
                    <Link href={``} className="">
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/lunar.png" alt="lunarcrush" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
                <div className="badges-item">
                    <Link href={``} className="w-full">
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/nomics.png" alt="nomics" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
                <div className="badges-item">
                    <Link href={``}>
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/sep.png" alt="lunarcrush" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
                <div className="badges-item">
                    <Link href={``}>
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/meta.png" alt="meta" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
                <div className="badges-item">
                    <Link href={``}>
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/meme.png" alt="meme" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
                <div className="badges-item">
                    <Link href={``}>
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/poop.png" alt="poop" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
                <div className="badges-item">
                    <Link href={``}>
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/rabbit.png" alt="rabbitcrush" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
                <div className="badges-item">
                    <Link href={``}>
                        <a rel="noopener noreferrer" className='w-full'>
                            <Image src="/imgs/wallets/bsc.png" alt="poop" layout="responsive" objectFit="contain" width="100%" height="60" />
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}