import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
const data = `Hungry hungry hippos will conduct a 
            <br/>
            fair launch in which 80&#65285; of pre raised 
            <br/>
            funds will be blocked in a secure 
            <br/>
            eth liquidity pool
            <br/>
            lock it with us &#1470; target 50&#65285; APR`;

  return (
    <div className="w-full lg:w-[1240px] mx-auto">
      <div className='h-[calc(100vh-184px)]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-full">
          <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center">
            <h2 className='uppercase font-outline flex justify-center items-center text-center text-xl' dangerouslySetInnerHTML={{__html: data}} />
            <div className='uppercase flex items-center mt-8'>
              <Link href={``}>
                <a className='border-4 border-black px-5 py-2 text-center md:mr-4'>
                  <span className='text-lg'>L</span><span className='text-sm mr-1'>ink to</span>
                  <span className='text-lg'>P</span><span className='text-sm mr-1'>resale</span>
                  <span className='text-lg'>B</span><span className='text-sm'>utton</span>
                  <br/> 
                  <span className='text-sm'>"Presale info"</span>
                </a>
              </Link>
              <Link href={``}>
                <a className='border-4 border-black px-5 py-2 text-center'>
                  <span className='text-lg'>L</span><span className='text-sm mr-1'>ink to</span>
                  <span className='text-lg'>T</span><span className='text-sm mr-1'>elegram</span>
                  <span className='text-lg'>G</span><span className='text-sm'>roup</span>
                  <br/> 
                  <span className='text-sm'>"Click here for telegram"</span>
                </a>
              </Link>
            </div>
            <p className='font-fill uppercase text-center mt-4 tracking-wide text-sm'>Contract address</p>
            <p className='uppercase text-center mt-4 text-lg'>0x921B1A01D3B9FCAD71C2BBF95FDA751844CDC139</p>
          </div>
          <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-2">
            <div className="h-full flex flex-col justify-center">
              <Image src="/imgs/hippos-ink.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="80%" />
            </div>
          </div> 
        </div>
        <div className='flex justify-center items-center'>
          <span className='font-outline text-black text-center py-8 tracking-widest text-2xl first-letter:text-4xl mr-2'>
            Full 
          </span>
          <span className='font-outline text-black text-center py-8 tracking-widest text-2xl first-letter:text-4xl mr-2'>
            Site 
          </span>
          <span className='font-outline text-black text-center py-8 tracking-widest text-2xl first-letter:text-4xl mr-2'>
            Coming 
          </span>
          <span className='font-outline text-black text-center py-8 tracking-widest text-2xl first-letter:text-4xl mr-2'>
            Soon 
          </span>
        </div>
      </div>
    </div>
  )
h-full }
