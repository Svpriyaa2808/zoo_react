import styles from '../../Navigation/navigation.module.css'
import NavItem from '../NavItem'
import { Categories } from '../../../data/data'

const FooterNavigation = ({hideAnimalContent}) => {
 return (
    <div className={styles.footer_menu}>
            <NavItem name="Home" />
            {Categories.map((item,index) => <NavItem key={index} name={item} welcomeMessage={hideAnimalContent}/>)}
        </div>
 )   
}

export default FooterNavigation