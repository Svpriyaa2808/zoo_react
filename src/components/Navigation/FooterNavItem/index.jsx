import { NavLink } from "react-router-dom"
import styles from '../../Navigation/navigation.module.css'

const FooterNavItem = ({name,welcomeMessage}) => {
    return (
        <NavLink to={name === "Home" ? '/' : name} className={styles.footer_nav_menu}  onClick={()=>welcomeMessage(null)}>{name}</NavLink>
    )
}

export default FooterNavItem