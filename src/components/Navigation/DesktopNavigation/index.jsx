import styles from '../../Navigation/navigation.module.css'
import { Categories } from '../../../data/data'
import NavItem from '../NavItem'
const DesktopNavigation = () => {
    return (
        <>
            <NavItem name="Home" />
            {Categories.map((item,index) => <NavItem key={index} name={item} />)}
        </>
    )
}

export default DesktopNavigation