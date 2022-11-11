import styled from "styled-components";
import cartImg from "../images/image-product-1-thumbnail.jpg"
import deleteIcon from "../images/icon-delete.svg"



function Cart({cartAppear,addedAmount,setAddedAmount}){

    function deleteCartItems(){
        setAddedAmount(0);
    }
    if(!cartAppear){
        return
    }else if(addedAmount > 0){
    return(
        <CartDiv>
            <CartHeader>Cart</CartHeader>
            <CartContext>
                <CartImg src={cartImg}></CartImg>
                <div>
                <ItemName>Fall Limited Edition Sneakers</ItemName>
                <Costs>$125 x {addedAmount} <span>${addedAmount*125}</span></Costs>
                </div>
                <DeleteIcon onClick={deleteCartItems} src={deleteIcon}></DeleteIcon>
            </CartContext>
            <CheckOutButton>Checkout</CheckOutButton>
        </CartDiv>
    )}else{
        return(
            <CartDiv>
                <CartHeader>Cart</CartHeader>
                <EmptyDiv>Your cart is empty.</EmptyDiv>
            </CartDiv>
        )
    }
}

export default Cart

const CartDiv = styled.div`
    width: 96%;
    background-color: white;
    position: absolute;
    top:76px;
    z-index: 1;
    border-radius:10px;
    padding: 24px;
    box-sizing: border-box;
    box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5031);


    @media (min-width: 1440px){
        max-width: 360px;
        right: 120px;
        top:100px;
    }

`

const CartHeader = styled.div`
    font-family: Kumbh Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #1D2026;
    border-bottom: 1px solid #E4E9F2;
    padding-bottom: 27px;
    

`

const CartContext = styled.div`
    margin:24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CartImg = styled.img`
    width: 50px;
    border-radius: 4px;
`

const ItemName = styled.span`
    font-family: Kumbh Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    color: #69707D;

`

const Costs = styled.p`
    font-family: Kumbh Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    color: #69707D;

    >span{
       font-weight : 700;
       color: #1D2026;
    }

`

const DeleteIcon = styled.img`
    &:hover{
        cursor: pointer;
    }
`

const CheckOutButton = styled.button`
    width:100%;
    height: 56px;
    background-color: #FF7E1B;
    font-family: Kumbh Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color:white;
    border: 0;
    border-radius: 10px;

    


`

const EmptyDiv = styled.div`
    font-family: Kumbh Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    color: #69707D;
    height: 156px;
    display: flex;
    align-items: center;
    justify-content: center;

`