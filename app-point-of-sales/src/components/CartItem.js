import React from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { inc, dec, remove } from "../store/actions/product";

const Cart = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 3rem:
  padding: 0 0.3rem;
  margin: 0.5rem auto;
  background: white;
  box-shadow: 1px 1px 10px 1px #ccc;
`

const CounterContainer = styled.div`
  display: flex;
  width: 30%;
  text-align: center;
`

const ItemName = styled.div`
  width: 40%;
  padding-left: 0.5rem;
  
`

const CounterTotal = styled.div`
  margin: 0 0.3rem;
`

const Price = styled.div`
  width: 30%;
  text-align: center;
`

const CartItem = ({item}) => {
  const dispatch = useDispatch()
  const [ count, setCount ] = useState(1)
  const increment = (id) => {
    setCount(count + 1)
    dispatch(inc(id))
  }
  const decrement = (id) => {
    if (count === 1) {
      dispatch(remove(id))
    } else {
      setCount(count - 1)
      dispatch(dec(id))
    }
  }
  return (
    <Cart>
      <ItemName>{item.name}</ItemName>
      <CounterContainer>
        <Counter inc= {() => {increment(item.id)}}></Counter>
          <CounterTotal>{count}</CounterTotal>
        <Counter dec= {() => {decrement(item.id)}}></Counter>
      </CounterContainer>
      <Price>{item.price}</Price>
    </Cart>
  )
}

export default CartItem
