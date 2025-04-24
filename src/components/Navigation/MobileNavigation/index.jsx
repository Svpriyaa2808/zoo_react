import { useState } from 'react'
import styles from '../../Navigation/navigation.module.css'
import MenuIcon from '../../../assets/menu_icon.svg'
import { Categories } from '../../../data/data'
import NavItem from '../NavItem'

const MobileNavigation = () => {

    const [showNav,setShowNav] = useState("inactive") //show menu when hamburger is clicked

    const handleMenu = () => {
        setShowNav(showNav === "active" ? "inactive" : "active")
    }
    return (
        <>
        <div className={styles.hamburger_menu}  >
            <img src={MenuIcon} alt='Menu_icon' onClick={handleMenu}></img> 
            <div className={`${styles.mobile_menu} ${styles[showNav]}`}>
                <NavItem name="Home" />
                {Categories.map((item,index) => <NavItem key={index} name={item} />)}
            </div>           
        </div>
        </>
    )
}

export default MobileNavigation