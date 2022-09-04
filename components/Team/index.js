import Image from 'next/image'

export default function Team() {
    const data = `The Hungry Hungry  Hippos Core Team consists of four 
    individuals who collectively hold an uncanny and 
    multifaceted amount of experience  and TRUST in the space . 
    <br/>
    <br/>
    With their combined skills , they are determined to showcase talents ranging from solidity developement, financial
    analytics & trading , marketing etc ...
    in a never before seen , and REVOLTUTIONARY way. 
     <br/>
     <br/>
    Although each member of  The Hungry Core Team is KYC’d,
    at INCEPTION , they intend to remain anonymous. 
    The team believes this will increase intrigue, speculation,
    and overall excitement about the project.`

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