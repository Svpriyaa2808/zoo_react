import styles from '../../Navigation/navigation.module.css'
import { Categories } from '../../../data/data'
import NavItem from '../NavItem'
const DesktopNavigation = ({hideAnimalContent}) => {
    return (
        <>
        <div className={styles.desktop_menu}>
            <NavItem name="Home" />
            {Categories.map((item,index) => <NavItem key={index} name={item} welcomeMessage={hideAnimalContent}/>)}
        </div>
        </>
    )
}

export default DesktopNavigation