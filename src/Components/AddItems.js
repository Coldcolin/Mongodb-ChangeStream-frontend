import React, {useState, useEffect} from 'react'
import styled from "styled-components"

const AddItems = () => {
  return (
    <Container>
        <Form>
            <Circle></Circle>
            <Add htmlFor="load">Choose Image</Add>
            <Image type="file" id="load"/>
            <Input placeholder="name"/>
            <Input placeholder="Price"/>
            <Input placeholder="description"/>
            <Button> Add </Button>
        </Form>
    </Container>
  )
}

export default AddItems

const Form = styled.form`
    width: 450px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
const Circle = styled.div`
    width: 150px;
    height: 150px;
    background-color: black;
    border-radius: 100%;
    margin-bottom: 20px;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Add = styled.label`
    border-radius: 3px;
    background-color: grey;
    padding: 3px 5px;
    color: white;
    margin-bottom: 10px;
`
const Button = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 20px;
    font-size: 18px;
`

const Image = styled.input`
    display: none;
`