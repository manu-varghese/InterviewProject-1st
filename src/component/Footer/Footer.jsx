import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer_container'>
        <div className='footer_items'>
            <div className='footer_item'>
                <p className='footer_item_head'>ABOUT</p>
                <p className='footer_item_list'>How Xentice works</p>
                <p className='footer_item_list'>Founders Letter</p>
                <p className='footer_item_list'>Newsroom</p>
                <p className='footer_item_list'>Investors</p>
                <p className='footer_item_list'>Xentice Gold</p>
                <p className='footer_item_list'>Xentice Platinum</p>
                <p className='footer_item_list'>Startup Support</p>
                <p className='footer_item_list'>Careers</p>
            </div>
            <div className='footer_item'>
                <p className='footer_item_head'>EXPLORE</p>
                <p className='footer_item_list'>Diversity & Discrimination</p>
                <p className='footer_item_list'>Accessibility</p>
                <p className='footer_item_list'>Xentice Associates</p>
                <p className='footer_item_list'>Xentice Team</p>
                <p className='footer_item_list'>Xentice Mall</p>
                <p className='footer_item_list'>Xstudio</p>
                <p className='footer_item_list'>Xmoney</p>
                <p className='footer_item_list'>Entice Spaces</p>
            </div>
            <div className='footer_item'>
                <p className='footer_item_head'>SERVICES</p>
                <p className='footer_item_list'>Buttons & Badges</p>
                <p className='footer_item_list'>Mobile Apps</p>
                <p className='footer_item_list'>For Companies</p>
                <p className='footer_item_list'>Mobile Apps</p>
                <p className='footer_item_list'>Review Professionals</p>
                <p className='footer_item_list'>Suggested Professionals</p>
                <p className='footer_item_list'>Resource Centre</p>
                <p className='footer_item_list'>Community Centre</p>
            </div>
            <div className='footer_item'>
                <p className='footer_item_head'>SUPPORT</p>
                <p className='footer_item_list'>Our COVID-19 Response</p>
                <p className='footer_item_list'>Help Centre</p>
                <p className='footer_item_list'>Cancellation options</p>
                <p className='footer_item_list'>Neighbourhood Support</p>
                <p className='footer_item_list'>Corporate contact</p>
                <p className='footer_item_list'>Trust & Safety</p>
                <p className='footer_item_list'>FAQ</p>
                <p className='footer_item_list'>Payment gateway</p>
            </div>
        </div>

        <div className='dis_container'>
            <div className='dis_main'>
                <div className="dis1">
                    <p className='dis1_head'>DISCLAIMER</p>
                    <p className='dis1_para'>
                    Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com.
                    </p>
                </div>
                <div className="dis2">
                    <img src="https://www.xentice.com/static/media/google-play-badge.609afac0.png" width={100} alt="" />
                    <img src="https://www.xentice.com/static/media/badge-download-on-the-app-store.e8046ecc.png" width={100} alt="" />
                </div>
            </div>
        </div>
<hr />
        {/* <div style={{width: '100%', height: '1px', alignSelf: 'center', paddingRight: '60px', paddingLeft: '60px'}}>
            <div style={{width: '100%', height: '1px', backgroundColor: 'rgb(255, 255, 255)', alignSelf: 'center'}}></div>
        </div> */}

        <div className="policy_main">
            <div className="policy">
                <div className="policy1">
                    <p>© Xentice Group of Companies 2023 . All Rights Reserved</p>
                </div>
                <div className="policy2">
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer