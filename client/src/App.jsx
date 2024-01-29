import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Components
import Nav from './components/Nav.jsx';

// Pages
import Home from './pages/home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
