import styled from 'styled-components'
import Navbar from '../MyComponents/Navbar'
import Footer from '../MyComponents/Footer'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  width: 100%;
  height: 100%;
  color: white;
  background-color: teal;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  border: none;
`

const Home = () => {
  return (
    <Container>
        <Navbar />
        <Main>
          <Link style={{display: "block",width: "50%", height: "20%"}} to="/top-product">
            <Button>
              To-Products
            </Button>
          </Link>
        </Main>
        <Footer />
    </Container>
  )
}

export default Home;