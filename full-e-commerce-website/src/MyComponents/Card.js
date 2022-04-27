import styled from "styled-components";
import {Star} from "@material-ui/icons";
import {StarHalf} from "@material-ui/icons";

const Container = styled.div`
    height: 500px;
    width: 300px;
    border: 1px solid gray;
    margin: 10px;
    border-radius: 5px;
`
const ImageContainer = styled.div`
    height: 70%;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Title = styled.h3`
    padding: 10px 0px 5px 10px;
    color: #9900F0;
    cursor: pointer;
    &:hover{
        color: #B20600;
    }
`
const Review = styled.div`

`
const ReviewStar = styled.span`
    margin-left: 5px;
    display: flex;
    align-items: center;
`
const ReviewCount = styled.span`
    margin-left: 10px;
    font-size: 20px;
`
const Price = styled.div`
    padding: 10px;
    font-size: 24px;
`

const Card = ({item}) => {
    return (
        <Container>
            <ImageContainer>
                <Image src={item.image} />
            </ImageContainer>
            <Title>{item.title}</Title>
            <Review>
                <ReviewStar>
                    <Star style={{color: "yellow"}} />
                    <Star style={{color: "yellow"}}/>
                    <Star style={{color: "yellow"}}/>
                    <Star style={{color: "yellow"}}/>
                    <StarHalf style={{color: "yellow"}}/>
                    <ReviewCount>{item.review} reviews</ReviewCount>
                </ReviewStar>
            </Review>
            <Price>
                $ {item.price}
            </Price>
        </Container>
    )
}

export default Card;