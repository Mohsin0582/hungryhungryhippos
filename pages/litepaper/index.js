import Image from 'next/image'

export default function Litepaper () {
    return (
        <>
            <div className="h-full">
                <Image src="/../public/imgs/litepaper.jpg" alt="about image" layout="responsive" objectFit="cover" width="100%" height="55%" />
            </div>
        </>
    )
}