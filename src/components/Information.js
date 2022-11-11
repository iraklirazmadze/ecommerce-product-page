import styled from "styled-components";
import AddToCart from "./AddToCart";


function Information ({setAddedAmount,addedAmount}){

    return(
        <InformationDiv>
            <span>SNEAKER COMPANY</span>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <Costs>
                <CostAndDiscount>
                    <Cost>$125.00</Cost>
                    <Discount>50%</Discount>
                </CostAndDiscount>
                <OldCost>$250.00</OldCost>
            </Costs>
            <AddToCart addedAmount={addedAmount} setAddedAmount={setAddedAmount}/>
        </InformationDiv>
    )
}

export default Information


const InformationDiv = styled.div`
    width: 87.2%;
    display: flex;
    flex-direction: column;
    margin-bottom: 88px;

    @media (min-width: 1440px){
        width: 45%;
        margin:60px 0 0 0;
    }

    span{
        font-family: Kumbh Sans;
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 1.8461538553237915px;
        text-align: left;
        color: #FF7E1B; 

        @media (min-width: 1440px){}
    }

    >h1{
        font-family: Kumbh Sans;
        font-size: 28px;
        font-weight: 700;
        line-height: 32px;
        letter-spacing: 0px;
        text-align: left;
        margin-top: 20px;

        @media (min-width: 1440px){
            font-size: 44px;
            line-height: 48px;
        }
    }

    >p{
        font-family: Kumbh Sans;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0px;
        text-align: left;
        color:#69707D;
        margin-top: 15px;
    }

`

const Costs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 28px;

    @media (min-width: 1440px){
        flex-direction: column;
    }
`

const CostAndDiscount = styled.div`
    display: flex;
    align-items: center;
`

const Cost = styled.h1`
    font-family: Kumbh Sans;
font-size: 28px;
font-weight: 700;
line-height: 35px;
letter-spacing: 0px;
text-align: left;


`
const Discount = styled.span`
    width:51px;
    height: 27px;
    background-color: #FFEEE2;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    
`

const OldCost = styled.p`
    font-family: Kumbh Sans;
font-size: 16px;
font-weight: 700;
line-height: 26px;
letter-spacing: 0px;
text-align: left;
color: #B6BCC8;
text-decoration: line-through;
display: flex;
align-items: center;
`

