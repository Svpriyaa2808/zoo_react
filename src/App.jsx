import { Route,Routes } from "react-router-dom"
import Mammals from "./components/Mammals"

function App() {
    return (
    <>
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/mammals" element={<Mammals />}></Route>
      </Routes>
    </>
  )
}

export default App
