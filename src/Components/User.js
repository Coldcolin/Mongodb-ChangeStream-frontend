import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios"

const User = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try{
            const res = await axios.get("http://localhost:4455/api/order")
            setData(res.data.order)
            console.log(res.data.order)
        }catch(err){
            console.log(err)
        }
      };
      useEffect(() => {
        getData()
      }, []);
  return (
    <Container>
    <Div>User</Div>
        <Wrapper>
        {
                data?.map((props)=>(
                    <Orders1 key={props._id}>
                <Address>{props.address}</Address>
                <Address>{props.name}</Address>
                <Items>
                    <ul>
                        <li>{props.items}</li>
                        <li>order id:{props.token}</li>
                    </ul>
                </Items>
            </Orders1>
                ))
            }
        </Wrapper>
    </Container>
  )
}

export default User

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`
const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const Orders1 = styled.div`
    width: 200px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    min-height: 120px;
    font-size: 14px;
    margin: 10px 5px;
    padding: 10px;
`

const Address = styled.div`
    font-weight: 500;
`
const Items = styled.div``

const Div = styled.div`
    font-size: 25px;
    font-weight: bold;
    padding-top: 100px;
`