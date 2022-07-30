import { useState } from "react"
import styled from "styled-components"
import AddItems from "./AddItems"
import Orders from "./Orders"
import axios from "axios"


const Admin = () =>{
    const [right, setRight] = useState("Orders")

    const changeRight = ()=>{
        setRight("Products")
    }
    const changeRight1 = ()=>{
        setRight("Orders")
    }
    
    
    return(
        <Container>
            <Wrapper>
                    <Left>
                        <Heading onClick={changeRight1}>Recieved Orders</Heading>
                        <Heading onClick={changeRight}>Add Products</Heading>
                        {/* <Heading>Recieved Orders</Heading> */}
                    </Left>
                    <Right>
                    {
                        right === "Products"? <AddItems/>: right === "Orders"? <Orders/>: null 
                    }
                    </Right>
            </Wrapper>
        </Container>
    )
}

export default Admin

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    font-family: poppins;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    position: relative;
`
const Left = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 100vh;
    position: fixed;
    background-color:  #DF9632;
    justify-content: center;
`
const Right = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 20%);
    align-items: center;
    position: absolute;
    left: 20%;
`
const Heading = styled.div`
    width: 98%;
    height: 50px;
    background-color:  #DF9632;
    border-left: 5px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    margin: 5px 0;

    :hover{
        cursor: pointer;
    }
`
