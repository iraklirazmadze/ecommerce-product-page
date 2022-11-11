import styled from "styled-components"
import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
import img1 from "../images/image-product-1-thumbnail.jpg"
import img2 from "../images/image-product-2-thumbnail.jpg"
import img3 from "../images/image-product-3-thumbnail.jpg"
import img4 from "../images/image-product-4-thumbnail.jpg"
import previusIcon from "../images/icon-previous.svg"
import nextIcon from "../images/icon-next.svg"


function Images({setMainImgIndex,selectedImgIndex,setSelectedImgIndex,setShowImgPreview}){
    const images =[image1,image2,image3,image4];
    const imgs = [img1,img2,img3,img4];

    let targetImg = images[selectedImgIndex];
    function previousImg(){
        if(selectedImgIndex === 0){
            setSelectedImgIndex(3);
        }else{
            setSelectedImgIndex(selectedImgIndex - 1);
        }
    }

    function nextImg(){
        if(selectedImgIndex === 3){
            setSelectedImgIndex(0);
        }else{
            setSelectedImgIndex(selectedImgIndex + 1);
        }
    }

    function chooseImage(index){
        setShowImgPreview(true);
        setMainImgIndex(index);
    }

   

    return(
        <MainImageSection>
            <div style={{position:"relative"}}>
            <Image src={targetImg}></Image>
            <PreviousIconDiv onClick={previousImg}>
                <PreviousIcon src={previusIcon}></PreviousIcon>
            </PreviousIconDiv>
            <NextIconDiv onClick={nextImg}>
                <NextIcon src={nextIcon}></NextIcon>
            </NextIconDiv>
            </div>
            <ImgNavbar>
                {imgs.map((img,index) => {
                    return <Img onClick={() => chooseImage(index)} style={index == selectedImgIndex ? {opacity:"0.5", border:" 2px solid #FF7E1B"}:null} src={img} key={index} id={index}></Img>
                })}
            </ImgNavbar>
        </MainImageSection>
    )
}

export default Images


const MainImageSection = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px){
        width: 45%;
        max-width: 445px;
    }
`

const Image = styled.img`
    width:100%;

    @media (min-width: 1440px){
        border-radius: 15px;
    }
    
    
`

const NextIconDiv = styled.div`
    width:40px;
    height: 40px;
    position: absolute;
    top: 50%;
    right:16px;
    transform: translate(0,-50%);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    @media (min-width: 1440px){
        display: none;
    }
`

const PreviousIconDiv = styled.div`
    width:40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translate(0,-50%);
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    @media (min-width: 1440px){
        display: none;
    }
`

const NextIcon = styled.img`
    transform: translate(20%,0);
    width: 6px;
    height: 11.5px;
`
const PreviousIcon = styled.img`
    transform: translate(-20%,0);
    width: 6px;
    height: 11.5px;
`

const ImgNavbar = styled.div`
    display: none;
    

    @media (min-width: 1440px){
        display: flex;
        justify-content: space-between;
        margin-top: 32px;
        
    }
`

const Img = styled.img`
    width: 88px;
    border-radius: 18px;


    &:hover{
        cursor: pointer;
        opacity: 0.7;
    }
`
