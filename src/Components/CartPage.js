import React, { useEffect } from "react";
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux";
import { addProduct, addToCart, removeCart, changeItem, total } from "./Global/globState";
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.reducer.cart);
  const showTotal = useSelector((state)=> state.reducer.total)

  const getBread = async ()=>{
    try{
        const res = await axios.get('http://localhost:4455/api/')
        dispatch(addProduct(res.data.data));
    }catch(error){
        console.log(error)
    }
}

const payMethod =()=>{
  navigate("/Check")
}

useEffect(()=>{
    getBread()
    dispatch(total())
}, [myData])
  return (
    <Container>
      <Wrapper>
      <Divs>Total Price: #{showTotal}</Divs>
        <Items>
        
          {
            myData?.map((props)=>(
              <Cards>
            <Image src={`http://localhost:4455/${props.image}`} alt=""/>
            <Name>{props.name}</Name>
            <Buttons>
              <Math>
                <Add
                onClick={() => {
                      dispatch(addToCart(props));
                    }}
                >+</Add>
                <div>
                <Amount>{props.QTY}</Amount>
                </div>
                <Minus
                onClick={() => {
                  dispatch(changeItem(props));
                }}
                >-</Minus>
              </Math>
              <Remove
              onClick={() => {
                      dispatch(removeCart(props));
                    }}
              >Remove</Remove>
            </Buttons>
          </Cards>
            ))
          }
          
        </Items>
        <Clear
        onClick={() => {
                      payMethod();
                    }}
        >Pay</Clear>
      </Wrapper>
    </Container>
  )
}

export default CartPage

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  font-family: poppins;
`
const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Items = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Cards = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`
const Image = styled.img`
  width: 90%;
  height: 120px;
  background-color: black;
  border-radius: 3px;
  object-fit: cover;
`
const Name = styled.div`
  width: 90%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin: 5px 0;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Math = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`
const Add = styled.div`
  width: 30px;
  height: 30px;
  font-weight: 600;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  cursor: pointer;
`
const Minus = styled.div`
  width: 30px;
  height: 30px;
  font-weight: 600;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  cursor: pointer;
`
const Remove = styled.div`
margin-top: 20px;
  width: 120px;
  height: 30px;
  font-weight: 600;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  cursor: pointer;
`
const Clear = styled.div`
margin-top: 20px;
  width: 120px;
  height: 30px;
  font-weight: 600;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  cursor: pointer;
`
const Divs = styled.div`
    padding: 15px 20px;
    border-radius: 3px;
    background: #1069e1;
    color: white;
    font-size:25px;
    font-family: poppins;
    margin-bottom: 30px;
    font-weight: bold;
    margin: 100px 0;
    transition: all 350ms;
    transform: scale(1);
    border: 0;
    outline: none;
`
const Amount = styled.div``