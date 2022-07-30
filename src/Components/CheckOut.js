import React, {useState} from 'react'
import styled from 'styled-components'
import { useSelector } from "react-redux";
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const CheckOut = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const navigate = useNavigate()
    const showTotal = useSelector((state)=> state.reducer.total);
    const myData = useSelector((state) => state.reducer.cart);
    
    const handleSubmit = async () =>{
        try{
            const names = myData.map(val => { const name = val.name; return name}).toString()
            const QTYS = myData.map(val => {const QTY = val.QTY; return QTY}).toString()
            const Items = QTYS +" "+ names
            console.log(Items)
            await axios.post("http://localhost:4455/api/order", {name: name, email: email, address: address, items: Items})
            navigate("/User")
        }catch(error){
            console.log(error)
        }
    }

    
  return (
    <Container>
        <Form>
            <Input placeholder="name" value={name}
                onChange={(e) => {
              setName(e.target.value);
            }}
            />
            <Input placeholder="email" value={email}
                onChange={(e) => {
              setEmail(e.target.value);
            }}
            />
            <Input placeholder="delivery address" value={address}
                onChange={(e) => {
              setAddress(e.target.value);
            }}
            />
            <Div>Total Bill:  #{showTotal} </Div>
            <Button onClick={()=> handleSubmit()}> Check Out </Button>
        </Form>
    </Container>
  )
}

export default CheckOut

const Form = styled.div`
    width: 450px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-top: 100px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 5px;
`
const Input = styled.input`
    width: 300px;
    margin: 5px;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 3px;
    border-bottom: 1px solid black;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: poppins;
`

const Button = styled.div`
    width: 120px;
    height: 30px;
    margin-top: 20px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    border: 1px solid grey;
    cursor: pointer;
`
const Div = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
`
