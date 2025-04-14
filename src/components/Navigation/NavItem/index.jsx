import { NavLink } from "react-router-dom"
import styles from '../../Navigation/navigation.module.css'

const NavItem = ({name,welcomeMessage}) => {
    return (
        
        <NavLink to={name === "Home" ? '/' : name} className={styles.nav_menu} onClick={()=>welcomeMessage(null)}>{name}</NavLink>
    )
}

export default NavItem