import Image from 'next/image'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import Team from '../components/Team'
import Faq from '../components/Faq'
import Badge from '../components/Badge'

export default function Home() {
  const data = `Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur.`

  return (
    <>
      <div className="w-full lg:w-[1240px] mx-auto">
        <div className='h-[calc(100vh-80px)]'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 h-full">
            <div className="col-span-0 sm:col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center">
              <div className="w-[95%] sm:w-[80%] mx-auto">
                <h2 className='uppercase font-wicked-fill flex justify-center items-center text-center text-[16px] sm:text-xl' dangerouslySetInnerHTML={{__html: data}} />
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
      <div className='tokenomics-section pt-10' id="tokenomics">
          <Tokenomics/>
          <div className='team-section pt-6' id="team">
            <Team/>
          </div>
      </div>
      <div className='faq-section pt-10' id="faq">
        <Faq/>
      </div>
      <hr className='h-4 pt-2 border-[#243c5a]'/>
      <div className='badge-section' id="badge">
        <Badge/>
      </div>
    </>
    
  )
h-full }
