import styled from "styled-components";


function NavbarLi(){
    
    return(
        <Ul>
            <Li>Collections</Li>
            <Li>Men</Li>
            <Li>Women</Li>
            <Li>About</Li>
            <Li>Contact</Li>
        </Ul>
    )
}

export default NavbarLi


const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 54px;

    @media (min-width: 1440px){
        flex-direction: row;
        margin:0 0 0 55px;
        column-gap: 32px;
    }
`

const Li = styled.li`
    font-family: Kumbh Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    color: #1D2026;
    &:hover{
        cursor: pointer;
        color: #1D2026;
    }

    @media (min-width: 1440px){
        color:#69707D;
    }

`