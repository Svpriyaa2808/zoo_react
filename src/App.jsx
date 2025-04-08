import { Route,Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Mammals from "./components/Mammals"

function App() {
    return (
    <>
    
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Mammals />}>Home</Route>
        <Route path='/mammals' element={<Mammals />}></Route>
        <Route path='/birds' element={<Mammals />}></Route>
        <Route path='/reptiles' element={<Mammals />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
