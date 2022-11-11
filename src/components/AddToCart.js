import { useState } from "react";
import styled from "styled-components";
import minusIcon from "../images/icon-minus.svg"
import plusIcon from "../images/icon-plus.svg"
import whiteCart from "../images/white-cart.svg"



function AddToCart({setAddedAmount,addedAmount}) {
    const [amount,setAmount] = useState(0)
    function minus(){
        if(amount === 0){
            return
        }else{
            setAmount(amount -1);
        }
    }

    function plus(){
       setAmount(amount +1)
    }

    function addItems(){
        setAddedAmount(addedAmount + amount);
        setAmount(0);
    }

    return(
        <MainConteiner>
           <SelectAmount>
                <MinusIcon src={minusIcon} onClick={minus}></MinusIcon>
                <p>{amount}</p>
                <PlusIcon src={plusIcon} onClick={plus}></PlusIcon>
            </SelectAmount> 
            <AddToCartButton onClick={addItems}>
                <img src={whiteCart} alt=""></img>
                <p>Add to cart</p>
            </AddToCartButton >
        </MainConteiner>
    )
}

export default AddToCart


const MainConteiner = styled.div`
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;

    @media (min-width: 1440px){
        flex-direction: row;
        column-gap: 3%;
    }
`

const SelectAmount = styled.div`
    display: flex;
    justify-content: space-between;
    height: 56px;
    align-items: center;
    padding: 22px;
    box-sizing: border-box;
    background-color: #F6F8FD;
    border-radius: 10px;

    @media (min-width: 1440px){
        width: 40%;
    }
`

const MinusIcon = styled.img`
    &:hover{
        cursor: pointer;
    }
`

const PlusIcon = styled.img`
    &:hover{
        cursor: pointer;
    }
`

const AddToCartButton = styled.button`
    display: flex;
    height: 56px;
    width: 100%;
    align-items: center;
    justify-content: center;
    border:0;
    border-radius: 10px;
    box-shadow: 0px 20px 50px -20px hsla(26, 100%, 55%, 1);
    background-color: #FF7E1B;
    font-family: Kumbh Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: white;

    &:hover{
        cursor: pointer;
        background-color: #FFAB6A;
    }
    

    @media (min-width: 1440px){
        width: 57%;
    }

    >img{
        margin-right: 15px;
        
    }

`