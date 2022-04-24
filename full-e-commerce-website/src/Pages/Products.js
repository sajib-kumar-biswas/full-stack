import styled from 'styled-components'
import Navbar from '../MyComponents/Navbar'
import Product from '../MyComponents/Product'
import Footer from '../MyComponents/Footer'

const Container = styled.div`
  
`

const Caption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #125B50;
`

const Products = () => {
  return (
    <Container>
        <Navbar />
        <Caption>
            <h3>Top-Ranked Products</h3>
        </Caption>
        <Product />
        <Footer />
    </Container>
  )
}

export default Products;