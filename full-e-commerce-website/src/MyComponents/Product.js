import styled from "styled-components"
import Card from './Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Product = () => {

    const [productArray, setProductArray] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/top-products');
            setProductArray(result.data);
        }
        fetchData();
    },[])

    console.log("is it showing ? ");

    return (
        <Container>
            {
                productArray.map((item) => { return (<Card item={item} />) })
            }
        </Container>
    )
}

export default Product;