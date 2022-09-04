import Link from 'next/link'
import {FaEnvelope, FaTwitter, FaRedditAlien, FaTelegramPlane, FaChartPie} from 'react-icons/fa'
import {MdDocumentScanner} from 'react-icons/md'

export default function Footer() {
    return (
        <>
            <div className='footer-wrapper'>
                <div className="footer-grid">
                    <div className="footer-item">
                        <Link href="mailto:helga@HungryHungryHippos.io">
                                <a title="Contact us" rel="noopener noreferrer" className='link-with-icon'>
                                    <FaEnvelope size={25}/>
                                </a>
                        </Link>
                    </div>
                    <div className="footer-item">
                        <Link href="https://twitter.com/HHHipposBSC">
                                <a target="_blank" title="Twitter" rel="noopener noreferrer" className='link-with-icon'>
                                    <FaTwitter size={25}/>
                                </a>
                        </Link>
                    </div>
                    <div className="footer-item">
                        <Link href="https://reddit.com/r/HungryHungryHipposBSC">
                                <a target="_blank" title="Reddit" rel="noopener noreferrer" className='link-with-icon'>
                                    <FaRedditAlien size={25}/>
                                </a>
                        </Link>
                    </div>
                    <div className="footer-item">
                        <Link href="https://t.me/HHHofficial">
                                <a target="_blank" title="Telegram" rel="noopener noreferrer" className='link-with-icon'>
                                    <FaTelegramPlane size={25}/>
                                </a>
                        </Link>
                    </div>
                    <div className="footer-item">
                        <Link href="https://dessertswap.finance">
                                <a target="_blank" title="Audit" rel="noopener noreferrer" className='link-with-icon'>
                                    <FaChartPie size={25}/>
                                </a>
                        </Link>
                    </div>
                    <div className="footer-item">
                        <Link href="https://pancakeswap.finance/swap?inputCurrency=0x921B1A01d3b9FcaD71C2BBf95FDA751844cdC139">
                                <a target="_blank" title="BscScan" rel="noopener noreferrer" className='link-with-icon'>
                                    <MdDocumentScanner size={25}/>
                                </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}