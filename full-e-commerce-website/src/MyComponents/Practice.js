import styled from 'styled-components'
import Navbar from './Navbar'
import Product from './Product'
import Footer from './Footer'

const Container = styled.div`
    
`

const Practice = () => {
    return (
        <Container>
            <Navbar />
            <Product />
            <Footer />
        </Container>
    )
}

export default Practice;