import styled from "styled-components";
import closeIcon from "../images/icon-close.svg"
import NavbarLi from "./NavbarLi";


function Navbar({showNavbar,setShowNavbar}){

    function closeNavbar(){
        setShowNavbar(false);
    }

    if(!showNavbar){
        return
    }else{
        return(
            <NavbarDiv>
                <img onClick={closeNavbar} src={closeIcon} alt=""></img>
                <NavbarLi />
            </NavbarDiv>
        )
    }
}

export default Navbar


const NavbarDiv = styled.div`
    width: 250px;
    height: 100vh;
    background-color: white;
    position: absolute;
    z-index: 1;
    left:0;
    padding: 24px;
    box-sizing: border-box;
  `