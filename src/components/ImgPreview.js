import styled from "styled-components";
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import whiteXIcon from "../images/white-close-icon.svg"
import previusIcon from "../images/icon-previous.svg"
import nextIcon from "../images/icon-next.svg"

function ImgPreview({mainImgIndex,setMainImgIndex,selectedImgIndex,setSelectedImgIndex,showImgPreview,setShowImgPreview}){
   const imgs = [image1,image2,image3,image4]
    
   function chooseImage(index){
        setMainImgIndex(index)
   }

    function previousImg(){
        if(mainImgIndex === 0){
            setMainImgIndex(3);
        }else{
            setMainImgIndex(mainImgIndex - 1);
        }
    }

    function nextImg(){
        if(mainImgIndex === 3){
            setMainImgIndex(0);
        }else{
            setMainImgIndex(mainImgIndex + 1);
        }
    }

    function close(){
        setShowImgPreview(false);
        setSelectedImgIndex(mainImgIndex);
    }

    return(
        <WholePage style={showImgPreview ? {display:"flex"}:{display:"none"}}>
            <MainImage>
                <Image src={imgs[mainImgIndex]}></Image>
                <CloseIcon onClick={close} src={whiteXIcon}></CloseIcon>
                <PreviousIconDiv onClick={previousImg}>
                <PreviousIcon src={previusIcon}></PreviousIcon>
            </PreviousIconDiv>
            <NextIconDiv onClick={nextImg}>
                <NextIcon src={nextIcon}></NextIcon>
            </NextIconDiv>
            </MainImage>
            <ImgNavbar>
                {imgs.map((img,index) => {
                    return <Img onClick={() => chooseImage(index)} style={index === mainImgIndex ? {opacity:"0.5", border:" 2px solid #FF7E1B"}:null} src={img} key={index} id={index}></Img>
                })}
            </ImgNavbar>
        </WholePage>
    )
}

export default ImgPreview


const WholePage = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(1,1,1,0.7);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
`


const ImgNavbar = styled.div`
    display: none;
    

    @media (min-width: 1440px){
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        width: 550px;
        
    }
`
const MainImage = styled.div`
    width: 550px;
    height: 550px;
    position: relative;
`

const Image =styled.img`
    width: 550px;
    border-radius: 10px;
`

const Img = styled.img`
    width: 88px;
    border-radius: 18px;


    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`
const CloseIcon = styled.img`
    position: absolute;
    width: 30px;
    height: 30px;
    top:-50px;
    right: 0px;
    &:hover{
        cursor: pointer;
    }
`

const NextIconDiv = styled.div`
    width:56px;
    height: 56px;
    position: absolute;
    top: 50%;
    right:0;
    transform: translate(50%,-50%);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover{
        cursor: pointer;
    }
   
`

const PreviousIconDiv = styled.div`
    width:56px;
    height: 56px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%,-50%);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover{
        cursor: pointer;
    }

    
`

const NextIcon = styled.img`
    transform: translate(20%,0);
    width: 8px;
    height: 16px;
`
const PreviousIcon = styled.img`
    transform: translate(-20%,0);
    width: 8px;
    height: 16px;
`