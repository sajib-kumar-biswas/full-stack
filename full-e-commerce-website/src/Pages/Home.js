import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 100%;
    width: 100%;
`

const Main = styled.div`
  height: 100%;
  width: 100%;
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
      <Main>
        <Link style={{ display: "block", width: "50%", height: "20%" }} to="/top-product">
          <Button>
            To-Products
          </Button>
        </Link>
      </Main>
    </Container>
  )
}

export default Home;