import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo}/>
            <p>SHOPPED</p>
        </div>
        <div className="footer-links">
            <ul>
                <li>Company</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
                <li>Offices</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                    <img src={pintrest_icon} alt="" />
                    </div>
                    <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                    </div>                  
                
            </div>
            <div className="copy-righter">
                        <hr/>
                        <p>Copyright @ 2023 All Right RESERVES </p>

                    </div>
        </div>
      
    </div>
  )
}

export default Footer
