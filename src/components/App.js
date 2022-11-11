import { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Images from "./Images"
import Information from "./Information";
import Cart from "./Cart";
import Navbar from "./Navbar";
import ImgPreview from "./ImgPreview";



function App() {
  const [cartAppear,setCartAppear] = useState(false)
  const [addedAmount,setAddedAmount] = useState(0)
  const [showNavbar,setShowNavbar] = useState(false)
  const [showImgPreview,setShowImgPreview] = useState(false);
  const [selectedImgIndex,setSelectedImgIndex] = useState(0)
  const [mainImgIndex,setMainImgIndex]= useState(selectedImgIndex)
  
  return (
    <>
      <Header setShowNavbar={setShowNavbar} addedAmount={addedAmount} cartAppear={cartAppear} setCartAppear={setCartAppear}/>
      <Cart cartAppear={cartAppear} addedAmount={addedAmount} setAddedAmount={setAddedAmount} />
      <ImgPreview mainImgIndex={mainImgIndex} setMainImgIndex={setMainImgIndex} selectedImgIndex={selectedImgIndex} setSelectedImgIndex={setSelectedImgIndex}  showImgPreview={showImgPreview} setShowImgPreview={setShowImgPreview}/>
      <Navbar showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
      <Body>
        <Images setMainImgIndex={setMainImgIndex}  selectedImgIndex={selectedImgIndex} setSelectedImgIndex={setSelectedImgIndex} setShowImgPreview={setShowImgPreview}/>
        <Information addedAmount={addedAmount} setAddedAmount={setAddedAmount}/>
      </Body>
    </>
  );
}

export default App;


const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  width: 100%;

  @media (min-width: 1440px){
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    align-items: flex-start;
  }
  
`
