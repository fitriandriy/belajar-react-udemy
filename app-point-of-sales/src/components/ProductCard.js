import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions/product";

const Card = styled.div`
  width: 17%;
  height: 12rem;
  cursor: pointer;
`
const Carding = styled.img`
  width: 100%;
  height: 50%;
`
const NamePrice = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProductCard = ({item}) => {
  const dispatch = useDispatch();
  const addToCard = (id) => {
    dispatch(addCart(id))
  }
  return(
    <Card onClick={() => addToCard(item.id)}>
      <Carding src={item.image} alt={item.name}></Carding>
      <NamePrice>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </NamePrice>
    </Card>
  )
}

export default ProductCard;