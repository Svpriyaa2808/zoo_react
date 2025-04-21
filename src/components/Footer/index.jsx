import styles from './footer.module.css'
import  logo from '../../assets/logo.png'
import karta from '../../assets/karta-footer.jpg'
import FooterNavigation from '../Navigation/FooterNavigation'

const Footer = ({animalDes}) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
            <div className={styles.logo_container}>
                <img src={logo} alt='logo'></img>
                <h1 className={styles.page_title}>Nature's zoo</h1>
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
                </div> 
                <div className={styles.park}>
                    <p>Experience the Park</p>
                </div>
            </div>
            </div>
        </div>
       
    )
}

export default Footer