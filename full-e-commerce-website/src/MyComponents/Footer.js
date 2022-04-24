import styled from 'styled-components'

const Container = styled.div`
    background-color: #141E27;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

const TextContainer = styled.span`
    margin: 10px;
`

const Footer = () => {
    return (
        <Container>
            <TextContainer>
                All right reserved.
            </TextContainer>
        </Container>
    )
}

export default Footer;