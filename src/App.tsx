import { Bag }  from './pages/bag';
import { Payment }  from './pages/payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Nav } from './components/nav/nav';

function App() {
  return (
    <>
        <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/bag" element={<Bag />} />
          <Route path="/payment" element={<Payment />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
