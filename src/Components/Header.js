import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios"


const socket = io("http://localhost:4455");
const Header = () => {
    const myCart = useSelector((state) => state.reducer.cart);
    // const [adaminNoty, setAdminNoty] = useState(0)
    // const [dispatchNoty, setDispatchNoty] = useState(0)
    // const [userNoty, setUserNoty] = useState(0)
    const [data, setData] = useState([])

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
        socket.on("order", (newData) => {
        //   setAdminNoty(data.length)
        //   setUserNoty(data.length)
          getData()
        });
        socket.on("dispatch", (newData) => {
            // setDispatchNoty(data.length)
          getData()
        });
      }, []);
  return (
    <Container>
        <Wrapper>
            <Logo to="/">Breadoo</Logo>
            <Holder>
            <Cart to="/Admin">Admin </Cart>
            <Cart to="/User">User </Cart>
            <Cart to="/Dispatcher">Dispatcher </Cart>
            <Cart to="/Cart">Cart <span>({myCart.length})</span></Cart>
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #99420F;
    color: white;
    font-family: poppins;
    z-index: 10;
    position: fixed;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled(NavLink)`
    margin: 20px;
    font-size: 40px;
    font-weight: 600;
    text-decoration: none;
    color: white;
`
const Holder = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Cart = styled(NavLink)`
    margin: 30px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: white;
    position: relative;

    :isActive{
        background-color: black;
    }

    span{
        font-size: 12px;
        position: absolute;
        margin: 2px;
    }
`
