import {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose, AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false)
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

            <nav className="fixed w-full lg:w-[91%] h-20 z-10">
                <div className='w-full h-full flex justify-between items-center px-2 2xl:px-16'>
                    <Image src="/imgs/logo.png" alt="hungry hungry hippos logo" width="100%" height="50%" />
                
                    <div>
                        <ul className='hidden md:flex'>
                            <Link href="/about">
                                <a rel="noopener noreferrer" className='ml-10 text-sm uppercase first-letter:text-2xl'>About</a>
                            </Link>
                            <Link href="/tokenomics">
                                <a rel="noopener noreferrer" className='ml-10 text-sm uppercase first-letter:text-2xl'>Tokenomics</a>
                            </Link>
                            <Link href="/team">
                                <a rel="noopener noreferrer" className='ml-10 text-sm uppercase first-letter:text-2xl'>Team</a>
                            </Link>
                            <Link href="/litepaper">
                                <a rel="noopener noreferrer" className='ml-10 text-sm uppercase first-letter:text-2xl'>Litepaper</a>
                            </Link>
                            <Link href="/links">
                                <a rel="noopener noreferrer" className='ml-10 text-sm uppercase first-letter:text-2xl'>Links</a>
                            </Link>
                            <Link href="/buy">
                                <a rel="noopener noreferrer" className='ml-10 text-sm uppercase first-letter:text-2xl'>Buy Now</a>
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
                            <Image src="/../public/imgs/logo.png" alt="hungry hungry hippos mobile logo" width="87" height="35" />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='py-4'>
                            <ul className='uppercase flex flex-col'>
                                <Link href="/about">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>About</a>
                                </Link>
                                <Link href="/tokenomics">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Tokenomics</a>
                                </Link>
                                <Link href="/team">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Team</a>
                                </Link>
                                <Link href="/litepaper">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Litepaper</a>
                                </Link>
                                <Link href="/links">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Links</a>
                                </Link>
                                <Link href="/buy">
                                    <a rel="noopener noreferrer" className='py-4 text-sm first-letter:text-lg'>Buy Now</a>
                                </Link>
                            </ul>
                            <div className='pt-40'>
                                <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                                <div className='flex items-center my-4 w-full sm:w-[80%]'>
                                    <div className='mr-[1rem] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineTwitter/>
                                    </div>
                                    <div className='mr-[1rem] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaTelegramPlane/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header