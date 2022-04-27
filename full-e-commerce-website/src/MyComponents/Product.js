import styled from "styled-components"
import Card from './Card'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import logger from 'use-reducer-logger'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, productArray: action.payload };
        case "FETCH_FAIL":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

const Product = () => {

    const [{ loading, error, productArray }, dispatch] = useReducer(logger(reducer), {
        loading: true,
        productArray: [],
        error: "",
    });
    //const [productArray, setProductArray] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "FETCH_REQUEST" });
            try {
                const result = await axios.get('/api/top-products');
                dispatch({ type: "FETCH_SUCCESS", payload: result.data });
            } catch (err) {
                dispatch({ type: "FETCH_FAIL", payload: err.message });
            }
        }
        fetchData();
    }, [])

    return (
        <Container>
            {
                loading ? (<div>Loading...</div>) : error ? (<div>{error}</div>) : (
                productArray.map((item) => { return (<Card key={item.id} item={item} />) })
                )
            }
        </Container>
    )
}

export default Product;