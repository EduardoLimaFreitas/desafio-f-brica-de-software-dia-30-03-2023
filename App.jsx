import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pokemon from "./components/Pokemon/Pokemon"
function App() {
 

  return (

    //https://pokeapi.co/api/v2/pokemom/pikachu

   <Router>
     <Header/>

     <Routes>

      <Route path="/"></Route>
      <Route path="/Pokemon"></Route>


     </Routes>




   </Router>
  )
}

export default App
