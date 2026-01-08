import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../src/views/Home.jsx'
import Login from '../src/views/Login.jsx'
import Cart from '../src/views/Cart.jsx'
import Contact from '../src/views/Contact.jsx'
import StationaryStore from '../src/views/StationaryStore.jsx'
import Material from '../src/views/Material.jsx'
import {BrowserRouter,Routes,Route} from 'react-router'


const root = createRoot(document.getElementById('root'))

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<StationaryStore />} />
        <Route path="/m" element={<Material />} />
      </Routes>
    </BrowserRouter>
  </>
)
