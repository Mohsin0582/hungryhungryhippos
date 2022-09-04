import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import Team from '../components/Team'
import Badge from '../components/Badge'

export default function Home() {
  const data = `Hungry Hungry Hippos will conduct a fair launch in which 80&#65285; of pre-raised funds will
  be locked in a secure ETH liquidity pool for 12 months, earning a minimum target of 50&#65285; APR.`

  return (
    <>
      <div className="w-full lg:w-[1240px] mx-auto">
        <div className='h-[calc(100vh-80px)]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 h-full">
            <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center">
              <div className="w-[95%] sm:w-[80%] mx-auto">
                <h2 className='uppercase font-wicked-fill flex justify-center items-center text-center text-[16px] sm:text-xl' dangerouslySetInnerHTML={{__html: data}} />
                <div className='hero-links'>
                  <Link href="https://www.pinksale.finance/launchpad/0xc620f2598f2F818faa20D3ffE8104ccf5A263e9f?chain=BSC">
                      <a title="Presale" target="_blank" rel="noopener noreferrer" className='comic-button mb-5 md:mb-0'>
                        <span>Link to</span>
                        <span>Presale</span>
                        <span>Button</span>
                      </a>
                  </Link>
                  <Link href="https://t.me/HHHofficial">
                      <a title="Telegram" target="_blank" rel="noopener noreferrer" className='comic-button'>
                        <span>Link to</span>
                        <span>Telegram</span>
                        <span>Group</span>
                      </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-1">
              <div className="h-full flex flex-col justify-center rotate-12">
                <Image src="/imgs/hippo-pink.png" alt="home image" layout="responsive" objectFit="contain" width="100%" height="80%" />
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className='about-section bg-gradient-to-bl from-[#b1e1f8] to-[#faf1ea] py-10 sm:py-20' id="about">
        <div className="w-full lg:w-[1240px] mx-auto">
          <About/>
        </div>
      </div>
      <div className='tokenomics-section py-10' id="tokenomics">
          <Tokenomics/>
          <div className='team-section pt-6' id="team">
            <Team/>
          </div>
      </div>
      <hr className='border-[#243c5a]'/>
      <div className='py-2 badge-section' id="badge">
        <Badge/>
      </div>
    </>
    
  )
h-full }
