import { useState } from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    // const [showDescription,setShowDescription] = useState(null)
    
    // const handleClick = (item) => {
    //     setShowDescription(item)
    // }
    
    return (
        <>
            <Header />
            {/* <div className="container">
                <div className="main_content">
                    {showDescription}
            <Sidebar animalNameClick={handleClick}/>
            <MainContent animalDescription={showDescription} animalDetails={AnimalShortDescription(showDescription)} />
            </div>
            </div> */}
            <Outlet />
            
        </>
    )
}

export default Layout