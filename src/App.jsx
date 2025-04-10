import { useState } from "react"
import { Route,Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Mammals from "./components/Mammals"
import Home from "./pages/Home"
import AnimalPage from "./pages/Animal"
import { birdsContent, homeContent, mammalsContent, reptilesContent ,AnimalShortDescription,AnimalName} from "./data/data"

function App() {

  const [showDescription,setShowDescription] = useState(null)
    
  const handleClick = (item) => {
      setShowDescription(showDescription === item ? null : item)
  }

    return (
    <>
    
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Home content={homeContent} animalClick={handleClick}
                                        sidebarName={AnimalName(null)} 
                                        description={showDescription} 
                                        details={AnimalShortDescription(showDescription)}/>}>
        </Route>

        <Route path='/Mammals' element={<AnimalPage  sidebarName={AnimalName("Mammals")} 
                                                  description={showDescription} 
                                                  details={AnimalShortDescription(showDescription)}
                                                  content={mammalsContent}
                                                  animalClick={handleClick} />}>
        </Route>

        <Route path='/Birds' element={<AnimalPage  sidebarName={AnimalName("Birds")} 
                                                  description={showDescription} 
                                                  details={AnimalShortDescription(showDescription)}
                                                  content={birdsContent}
                                                  animalClick={handleClick} />}>
        </Route>

        <Route path='/Reptiles' element={<AnimalPage  sidebarName={AnimalName("Reptiles")} 
                                                  description={showDescription} 
                                                  details={AnimalShortDescription(showDescription)}
                                                  content={reptilesContent}
                                                  animalClick={handleClick} />}>
        </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
