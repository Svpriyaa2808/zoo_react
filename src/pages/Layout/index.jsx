import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Layout = ({animalClick}) => {
    // const [showDescription,setShowDescription] = useState(null)
    
    // const handleClick = (item) => {
    //     setShowDescription(item)
    // }
    
    return (
        <>
            <Header animalDes={animalClick}/>
            {/* <div className="container">
                <div className="main_content">
                    {showDescription}
            <Sidebar animalNameClick={handleClick}/>
            <MainContent animalDescription={showDescription} animalDetails={AnimalShortDescription(showDescription)} />
            </div>
            </div> */}
            <Outlet />
            <Footer animalDes={animalClick}/>
        </>
    )
}

export default Layout