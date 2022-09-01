import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="w-full lg:w-[1240px] mx-auto">
      <Header/>
      <div className='h-[calc(100vh-104px)]'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-full">
        <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center">
          <h2 className='uppercase font-outline flex justify-center items-center text-center text-xl'>
            Hungry hungry hippos will conduct a 
            <br/>
            fair launch in which 80% of pre raised 
            <br/>
            funds will be blocked in a secure 
            <br/>
            eth liquidity pool
            <br/>
            lock it with us - target 50% APR
          </h2>
          <div className='uppercase flex items-center mt-8'>
            <Link href={``}>
              <a className='border-4 border-black px-5 py-2 text-center md:mr-4'>
                Link to presale button
                <br/> 
                <span className='text-sm'>"Presale info"</span>
              </a>
            </Link>
            <Link href={``}>
              <a className='border-4 border-black px-5 py-2 text-center'>
                <span className=''>Link to telegram group</span>
                <br/> 
                <span className='text-sm'>"Click here for telegram"</span>
              </a>
            </Link>
          </div>
          <p className='font-outline text-black uppercase font-bold text-center mt-4'>Contract address</p>
          <p className='uppercase text-center mt-4 text-lg'>0x921B1A01D3B9FCAD71C2BBF95FDA751844CDC139</p>
        </div>
        <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-2">
          <div className="h-full flex flex-col justify-center">
            <Image src="/../public/imgs/hippos-ink.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="80%" />
          </div>
        </div> 
      </div>
      <div>
        <p className='font-outline text-black uppercase text-4xl text-center py-8'>Full Site Coming Soon</p>
      </div>
    </div>
    </div>
    
  )
h-full }
