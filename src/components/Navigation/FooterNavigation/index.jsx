import styles from '../../Navigation/navigation.module.css'
import { Categories } from '../../../data/data'
import FooterNavItem from '../FooterNavItem'

const FooterNavigation = ({hideAnimalContent}) => {
 return (
    <div className={styles.footer_menu}>
            <FooterNavItem name="Home" />
            {Categories.map((item,index) => <FooterNavItem key={index} name={item} welcomeMessage={hideAnimalContent}/>)}
        </div>
 )   
}

export default FooterNavigation