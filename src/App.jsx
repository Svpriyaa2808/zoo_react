import { useState } from "react"
import { Route,Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import AnimalPage from "./pages/Animal"
import AnimalDetails from "./pages/AnimalDetails"
import {homeContent,AnimalShortDescription,AnimalName} from "./data/data"

function App() {

  const [showDescription,setShowDescription] = useState(null)
  const [fullDetails,setFullDetails] = useState(null)
    
  const handleClick = (item) => {
      setShowDescription(showDescription === item ? null : item)
  }

  const handleDetails = () => {
    setFullDetails("show")
  }

  return (
    <>
    
      <Routes>
        <Route element={<Layout animalClick={handleClick}/>}>
        <Route path='/' element={<Home content={homeContent} animalClick={handleClick}
                                        sidebarName={AnimalName(null)} 
                                        description={showDescription} 
                                        details={AnimalShortDescription(showDescription)}/>}>
        </Route>

         <Route
          path="/:type"
          element={
            <AnimalPage
                animalClick={handleClick}
                description={showDescription}
                details={AnimalShortDescription(showDescription)}
                animalFullDetails={handleDetails}
            />
          }
        />
      
    
      <Route
      path="/:type/:animal"
      element={<AnimalDetails />}  
      />
        
       </Route> 
      </Routes>
    </>
  )
}

export default App



