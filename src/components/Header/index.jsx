import BannerArea from '../BannerArea'
import styles from './header.module.css'
import  logo from '../../assets/logo.png'
import DesktopNavigation from '../Navigation/DesktopNavigation'

const Header = ({animalDes}) => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.title_section}>
            <img className={styles.logo} src={logo}></img>
            <h1 className={styles.page_title}>Nature's zoo</h1>
            </div>
            <div className={styles.navigation}>
                <DesktopNavigation hideAnimalContent={animalDes}/>
            </div>
        </header>
        <BannerArea />
        </>
    )
}

export default Header