import styled from "styled-components"
import iconMenu from "../images/icon-menu.svg"
import logo from "../images/logo.svg"
import cartIcon from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import NavbarLi from "./NavbarLi"

function Header({setCartAppear,cartAppear,addedAmount,setShowNavbar}){
    function showCart(){
        setCartAppear(!cartAppear);
        setShowNavbar(false);
    }

    function showNavbar(){
        setShowNavbar(true);
        setCartAppear(false);
    }

    return(
        <HeaderBox>
            <div style={{display:"flex", alignItems:"center"}}>
                <IconMenu onClick={showNavbar} src={iconMenu}></IconMenu>
                <Logo src={logo}></Logo>
                <UlDiv><NavbarLi /></UlDiv>
            </div>
            <div style={{position:'relative',display:"flex",alignItems:"center"}}>
                <Cart src={cartIcon} onClick={() => showCart()}></Cart>
                {addedAmount>0 ? <Notification>{addedAmount}</Notification>:null}
                <Avatar src={avatar}></Avatar>
            </div>
        </HeaderBox>
    )
}

export default Header






const HeaderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 87.2%;
    margin:20px 0;

    @media (min-width: 1440px){
        width: 100%;
        margin:0;
        padding: 28px 0 34px 0;
        border-bottom: 1px solid #E4E9F2;
        margin-bottom: 90px;
    }
    
`

const IconMenu = styled.img`
    width: 16px;
    margin-right: 16px;

    &:hover{
        cursor: pointer;
    }

    @media (min-width: 1440px){
        display: none;
    }
`
const Logo = styled.img`

`

const Cart = styled.img`
    &:hover{
        cursor: pointer;
    }
`

const Avatar = styled.img`
    width: 24px;
    margin-left: 22px;

    &:hover{
        cursor: pointer;
    }

    @media (min-width: 1440px){
        width: 50px;
        margin-left: 46px;
    }
`

const Notification =styled.div`
    width: 19px;
    height: 13px;
    position: absolute;
    background-color: #FF7E1B;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    top:-1px;
    left:8px;

    @media (min-width: 1440px){
        top:10px
    }
    
`


const UlDiv =styled.div`
    display: none;
    @media (min-width: 1440px){
        display: inline;
    }
`

