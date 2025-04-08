import { NavLink } from "react-router-dom"
import styles from '../../Navigation/navigation.module.css'

const NavItem = ({name}) => {
    return (
        
        <NavLink to={name === "Home" ? '/' : name} className={styles.nav_menu} >{name}</NavLink>
    )
}

export default NavItem