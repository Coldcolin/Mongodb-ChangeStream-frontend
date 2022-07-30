import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import axios from 'axios'
import { io } from "socket.io-client";


const socket = io("http://localhost:4455");
const Orders = () => {
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false)
    // const [id, setId] = useState("")

    const getData = async () => {
        try{
            const res = await axios.get("http://localhost:4455/api/order")
            setData(res.data.order)
            console.log(res.data.order)
        }catch(err){
            console.log(err)
        }
      };

      const pushDispatch = async (id)=>{
        try{
            await axios.patch(`http://localhost:4455/api/order/${id}`)
            setToggle(!toggle)
        }catch(err){
            console.log(err)
        }
      }


      useEffect(() => {
        // getData()
        socket.on("order", (newData) => {
          setData([...data, newData]);
          console.log(newData._id)
        //   setId(newData._id)
          getData();
        });
      }, []);
  return (
    <Container>
        <Holder>
            {
                data?.map((props)=>(
                    <Orders1 key={props._id}>
                <Address>{props.address}</Address>
                <Address>{props.name}</Address>
                <Items>
                    <ul>
                        <li>{props.items}</li>
                    </ul>
                </Items>
                {
                    !toggle? <Button onClick={()=>{pushDispatch(props._id)}}>Dispatch</Button>:<Buttons>Dispatched</Buttons>
                }
            </Orders1>
                ))
            }
         
            </Holder>
    </Container>
  )
}

export default Orders

const Holder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    /* background-color: yellow; */
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
const Button = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    transition: all 350ms;

    :hover{
        cursor: pointer;
        background-color: #DF9632;
        border: none;
        color: white;
    }
`
const Buttons = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    transition: all 350ms;
    background-color: red;

    :hover{
        cursor: pointer;
        background-color: #DF9632;
        border: none;
        color: white;
    }
`
const Container = styled.div`
    margin-top: 70px;
    display: flex;
    min-height: 100vh;
`