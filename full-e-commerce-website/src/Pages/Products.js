import styled from 'styled-components'
import Product from '../MyComponents/Product'

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
      <Caption>
        <h3>Top-Ranked Products</h3>
      </Caption>
      <Product />
    </Container>
  )
}

export default Products;