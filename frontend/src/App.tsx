import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Landing';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/projeto' element={<Projeto />} /> */}
        {/* <Route path='/oque' element={<Fazemos />} /> */}
        {/* <Route path='/como' element={<ComoFazemos />} /> */}
        {/* <Route path='/crescemos' element={<Crescemos />} /> */}
        {/* <Route path='/onde' element={<Onde />} /> */}
        {/* <Route path='/dicas' element={<Dicas />} /> */}
        {/* <Route path='/dev' element={<Credito />} /> */}

      </Routes>
    </Router>
  )
}

export default App;