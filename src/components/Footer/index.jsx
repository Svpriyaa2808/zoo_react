import styles from './footer.module.css'
import  logo from '../../assets/logo.png'
import karta from '../../assets/karta-footer.jpg'
import FooterNavigation from '../Navigation/FooterNavigation'
import { SocialLogo } from 'social-logos'

const Footer = ({animalDes}) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.logo_container}>
                    <img src={logo} alt='logo'></img>
                    <h2 className={styles.page_title}>Nature's zoo</h2>
                </div>
                
                <div className={styles.footer_nav}>
                    <FooterNavigation hideAnimalContent={animalDes}/>
                </div>
                
                <div className={styles.footer_divider}>
                </div>
                
                <div className={styles.footer_details}>
                    <ul className={styles.additional_link_list}>
                        <li className={styles.additional_link}>About us</li>
                        <li className={styles.additional_link}>The work of the zoo</li>
                        <li className={styles.additional_link}>Privacy Policy</li>
                        <li className={styles.additional_link}>Press & Media</li>
                    </ul>
                </div>
                
                <div className={styles.footer_background}>
                    <div className={styles.map}>
                        <img src={karta} alt='park_map'></img>
                        <div className={styles.park}>
                        <p>Experience the Park</p>
                    </div>
                </div> 
                
                <div className={styles.contact_info}>
                    <div className={styles.contact}>
                        <h3>Contact Us</h3>
                        <p>+61.7.5436.2000</p>
                        <p>Steve Irwin Way, Beerwah QLD 4519</p>
                        <p>info@natureszoo.com.au</p>
                    </div>
                    
                    <div className={styles.visit_us}>
                        <p>FAQs</p>
                        <p>Visit Us</p>
                        <p>Event Calender</p>
                        <p>Volunteering</p>
                    </div>
                
                    <div className={styles.news_letter}>
                        <p>Newsletter Sign Up</p>
                        <input className={styles.input} type='text' placeholder='Email Address'></input>
                        <button className={styles.button}>Submit</button>
                    </div>
                </div>
                
                <div className={styles.social_media}>
                    <p>Follow us and get
                    the latest news</p>
                    <SocialLogo icon='facebook' size={32}/>
                    <SocialLogo icon='youtube' size={32}/>
                    <SocialLogo icon='instagram' size={32}/>
                    <SocialLogo icon='twitter' size={32}/>
                    <SocialLogo icon='copyrights' size={32} />
                </div>
            </div>
        </div>
    </div>
       
    )
}

export default Footer