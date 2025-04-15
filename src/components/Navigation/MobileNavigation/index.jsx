import styles from '../../Navigation/navigation.module.css'
import MenuIcon from '../../../assets/menu_icon.svg'
const MobileNavigation = () => {
    return (
        <>
        <div className={styles.hamburger_menu}>
            <img src={MenuIcon} alt='Menu_icon'></img>
        </div>
    </>
    )
}

export default MobileNavigation