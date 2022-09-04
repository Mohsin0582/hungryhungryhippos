import Image from 'next/image'

export default function About() {
    return (
        <>
            <div className="h-full">
                <Image src="/imgs/about.jpg" alt="about image" layout="responsive" objectFit="cover" width="61%" height="100%" />
            </div>
        </>
    )
}