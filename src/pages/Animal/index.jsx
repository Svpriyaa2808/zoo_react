// import MainContent from "../../components/MainContent"
// import Sidebar from "../../components/Sidebar"

// const AnimalPage = ({content,animalClick,description,details,sidebarName}) => {
//     console.log(content)
//     return (
//         <>
//         <div className="container">
//         <div className="main_content">
//         <Sidebar animalName={sidebarName} animalNameClick={animalClick}/>
//         <MainContent contentArray={content} animalDescription={description} animalDetails={details}/>
//         </div>
//         </div>
//         </>
//     )
// }

// export default AnimalPage


import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import MainContent from "../../components/MainContent";
import { AnimalName } from "../../data/data";
import { mammalsContent, birdsContent, reptilesContent } from "../../data/data";

const AnimalPage = ({ animalClick, description, details }) => {
  const { type } = useParams(); 

  const contentMap = {
    Mammals: mammalsContent,
    Birds: birdsContent,
    Reptiles: reptilesContent
  };

  const content = contentMap[type];
  console.log(content)
  const sidebarName = AnimalName(type);

  return (
    <div className="container">
       <div className="main_content">
      <Sidebar animalName={sidebarName} animalNameClick={animalClick} />
      <MainContent animalDescription={description} animalDetails={details} contentArray={content} />
    </div>
    </div>
  );
};

export default AnimalPage;
