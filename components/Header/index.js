import {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose, AiOutlineTwitter} from 'react-icons/ai'

const Header = (props) => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hungry Hungry Hippos</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <nav className="fixed w-full lg:w-10/12 h-20 z-10 mx-auto">
                <div className='w-full h-full flex justify-between items-center px-2 2xl:px-16'>
                    <Link href="/">
                        <a rel="noopener noreferrer">
                            <Image src="/imgs/logos/logo.png" alt="hungry hungry hippos logo" width="100%" height="50%" />
                        </a>
                    </Link>
                
                    <div>
                        <ul className='hidden md:flex'>
                            <Link href="#about">
                                <a rel="noopener noreferrer" className='main-nav'>About</a>
                            </Link>
                            <Link href="#tokenomics">
                                <a rel="noopener noreferrer" className='main-nav'>Tokenomics</a>
                            </Link>
                            <Link href="#team">
                                <a rel="noopener noreferrer" className='main-nav'>Team</a>
                            </Link>
                            <Link href="/litepaper">
                                <a rel="noopener noreferrer" className='main-nav'>Litepaper</a>
                            </Link>
                            <Link href="">
                                <a rel="noopener noreferrer" className='main-nav'>Links</a>
                            </Link>
                            <Link href="https://pancakeswap.finance/swap?inputCurrency=0x921B1A01d3b9FcaD71C2BBf95FDA751844cdC139">
                                <a rel="noopener noreferrer" className='main-nav'>Buy Now</a>
                            </Link>
                        </ul>

                         {/* Mobile Screen Burger Icon */}
                        <div className='md:hidden' onClick={handleNav}>
                            <AiOutlineMenu size={25} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Screen Side Drawer */}
            <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[100]' : ''}>
                <div 
                    className= {
                        nav 
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='w-full flex justify-between items-center'>
                            <Image src="/imgs/logos/logo.png" alt="hungry hungry hippos mobile logo" width="87" height="35" />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='py-4'>
                            <ul className='uppercase flex flex-col'>
                                <Link href="#about">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>About</a>
                                </Link>
                                <Link href="#tokenomics">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Tokenomics</a>
                                </Link>
                                <Link href="#team">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Team</a>
                                </Link>
                                <Link href="/litepaper">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Litepaper</a>
                                </Link>
                                <Link href="">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Links</a>
                                </Link>
                                <Link href="https://pancakeswap.finance/swap?inputCurrency=0x921B1A01d3b9FcaD71C2BBf95FDA751844cdC139">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Buy Now</a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header