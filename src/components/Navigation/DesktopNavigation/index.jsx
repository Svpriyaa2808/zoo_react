import styles from '../../Navigation/navigation.module.css'
import { Categories } from '../../../data/data'
import NavItem from '../NavItem'
const DesktopNavigation = ({hideAnimalContent}) => {
    return (
        <>
            <NavItem name="Home" />
            {Categories.map((item,index) => <NavItem key={index} name={item} welcomeMessage={hideAnimalContent}/>)}
        </>
    )
}

export default DesktopNavigation