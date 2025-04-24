import HomeDetail from "../../components/HomeDetails"
import MainContent from "../../components/MainContent"
import Sidebar from "../../components/Sidebar"

const Home = ({content,animalClick,description,details,sidebarName,setActive, animalNameActive }) => {
    console.log(content)

    return (
        <>
            <div className="container">
                <div className="main_content">
                    <Sidebar animalName={sidebarName} animalNameClick={animalClick} activeClass={setActive} animalActive={animalNameActive}/>
                    <MainContent contentArray={content} animalDescription={description} animalDetails={details}/>
                </div>
                <HomeDetail />
            </div>
        </>
    )
}

export default Home