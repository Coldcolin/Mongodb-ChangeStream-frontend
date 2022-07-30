import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from "axios"
import background from "./Images/seeBack.jpeg"
import {useSelector, useDispatch} from "react-redux"
import { addProduct, addToCart} from "./Global/globState"


const HomePage = () => {

    const [data, setData] = useState()
    const dispatch = useDispatch();

    const getBread = async ()=>{
        try{
            const res = await axios.get('http://localhost:4455/api/')
            setData(res.data.data)
            dispatch(addProduct(res.data.data));
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getBread()
    }, [])

  return (
    <Container>
        <Wrapper>
            <Title>
            <Images src={background} alt=""/>
            <Words>Welcome to Breadoo</Words>
            </Title>
            <Holder>
                {
                    data?.map((props)=>(
                        <Card key={props._id}>
                            <Image src={`http://localhost:4455/${props.image}`}/>
                            <Name>{props.name}</Name>
                            <Price>N {props.Price}</Price>
                            <Desc>{props.description}</Desc>
                            <Button
                            onClick={() => {
                            dispatch(addToCart(props));
                            }}
                            >Add to Cart</Button>
                        </Card>
                    ))
                }
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    font-family: poppins;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    width: 100%;
    height: 40vh;
    position: relative;
    margin-top: 70px;
`
const Words = styled.div`
    font-size: 60px;
    font-weight: 500;
    color: white;
    top: 40%;
    font-family: poppins;
    left: 32%;
    position: absolute;

`
const Button = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    transition: all 350ms;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #DF9632;
    color: white;
    border-radius: 3px;

    :hover{
        cursor: pointer;
        background-color: white;
        border: none;
        color: black;
        font-weight: 600;
    }
`

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Card = styled.div`
    width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:5px;
    border: 1px solid grey;
    border-radius: 5px;
    transition: all 350ms;
    transform: scale(1);
    margin: 20px;

    :hover{
        cursor: pointer;
        background-color: #DF9632;
        transition: all 350ms;
        transform: scale(1.005);
        color: white;
        border: none;
    }
`
const Image = styled.img`
    width: 250px;
    height: 150px;
    margin-bottom: 10px;
    object-fit: cover;
`
const Name = styled.div`
    width: 250px;
    height: 20px;
    font-weight: 500;
    margin: 10px 0;
`
const Price = styled.div`
    width: 250px;
    height: 30px;
    margin-bottom: 10px;
`
const Desc = styled.div`
    width: 250px;
    min-height: 50px;
    overflow-y: scroll;
    font-size: 14px;
`