import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products';
import './App.css'
import styled from 'styled-components'
import Navbar from './MyComponents/Navbar';
import Footer from './MyComponents/Footer';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  flex: 1;
`

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/top-product" element={<Products />} />
            </Routes>
          </Main>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
