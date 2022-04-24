import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-product" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
