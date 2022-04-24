import styled from "styled-components"
import {productArray} from './Data.js'
import Card from './Card'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`

const Product = () => {
    return (
        <Container>
            {
                productArray.map((item) => {return (<Card item={item}  />)})
            }
        </Container>
    )
}

export default Product;