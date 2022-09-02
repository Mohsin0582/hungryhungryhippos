import Link from 'next/link'

export default function Footer() {
    const col_1 = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat.`

    const col_2 = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat.`

    const col_3 = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat.`


    return (
        <>
            <div className='bg-[#0c0a18] py-10'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
                    <div className="col-span-3 md:col-span-1 flex justify-center items-center">
                        <p className='w-[80%] mx-auto text-center px-2 uppercase font-comic-regular-fill text-white text-[12px] first-letter:text-base' dangerouslySetInnerHTML={{__html: col_1}} />
                    </div>
                    <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center text-white uppercase">
                        <Link href="#about">
                                <a rel="noopener noreferrer" className='text-sm text-[12px] first-letter:text-base'>About</a>
                        </Link>
                        <Link href="#tokenomics">
                                <a rel="noopener noreferrer" className='text-sm text-[12px] first-letter:text-base'>Tokenomics</a>
                        </Link>
                        <Link href="#team">
                                <a rel="noopener noreferrer" className='text-sm text-[12px] first-letter:text-base'>Team</a>
                        </Link>
                        <Link href="#litepaper">
                                <a rel="noopener noreferrer" className='text-sm text-[12px] first-letter:text-base'>Litepaper</a>
                        </Link>
                        <Link href="">
                                <a rel="noopener noreferrer" className='text-sm text-[12px] first-letter:text-base'>Links</a>
                        </Link>
                        <Link href="">
                                <a rel="noopener noreferrer" className='text-sm text-[12px] first-letter:text-base'>Buy Now</a>
                        </Link>
                    </div>
                    <div className="col-span-3 md:col-span-1 flex justify-center items-center">
                        <p className='w-[80%] mx-auto text-center px-2 uppercase font-comic-regular-fill text-white text-[12px] first-letter:text-base' dangerouslySetInnerHTML={{__html: col_2}} />
                    </div>
                </div>
                <p className='w-[70%] mx-auto text-center uppercase font-comic-regular-fill text-white text-[9px] leading-relaxed first-letter:text-[12px]' dangerouslySetInnerHTML={{__html: col_3}} />
            </div>
        </>
    )
}