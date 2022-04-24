import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    background-color: #141E27;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`

const Left = styled.div`
    font-size: 30px;
    font-weight: 700;
`

const Right = styled.div`

`

const Navbar = () => {
    return (
        <Container>
            <Left>
                <Link style={{margin: "10px", color: "white", textDecoration: "none"}} to='/'>buybuy</Link>
            </Left>
            <Right>
                <Link style={{margin: "10px", color: "white", textDecoration: "none"}} to='/'>Cart</Link>
                <Link style={{margin: "10px", color: "white", textDecoration: "none"}} to='/'>Sign in</Link>
            </Right>
        </Container>
    )
}

export default Navbar;