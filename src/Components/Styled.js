import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: aliceblue;
@media (max-width:360) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

export const Box = styled.div`
padding-top: 10px;
display: flex;
justify-content: center;
align-items: center;
`
Box.Input = styled.input`
padding: 10px 20px;
width: 400px;
border: none;
outline: none;
background-color: transparent;
font-size: 22px;
border-bottom: 2px solid yellowgreen;
&:focus {
    border: 1px solid #616161;
    border-radius: 8px;
}
@media (max-width:360px) {
    width: 250px;
    font-size: 18px;
    padding: 7px 10px;
}
`

export const Text = styled.div`
`
Text.City = styled.h1`
font-size: 35px;
text-align: center;
padding: 15px;
color:#92E718;
@media (max-width:360px) {
    font-size: 28px;
    padding: 10px;
}
`

export const Item = styled.div`
width: 100%;
padding: 40px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:360px) {
    padding: 30px;
}
`

Item.Box = styled.div`
width: 270px;
height: 300px;
background-color: aliceblue;
box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.3);
border-radius: 8px;
@media (max-width:360px) {
    width: 250px;
    height: 280px;
}
`
Item.City = styled.h1`
font-size: 30px;
text-align: center;
padding:10px 0 5px;
color:#26321C;
@media (max-width:360px) {
    font-size: 24px;
    padding: 7px 0 5px;
}
`
Item.ImgBox = styled.div`
display: flex;
justify-content: center;
`

Item.Img = styled.img`
margin: 0;

`
Item.Deg = styled.h1`
color:#26321C;
font-size: 30px;
font-weight: bold;
text-align: center;
@media (max-width:360px) {
    font-size: 22px;
}
`
Item.Sky = styled.h1`
font-size: 18px;
color: #26321C;
text-align: center;
`

Item.DegText = styled.h1`
font-size: 20px;
color:#26321C;
text-align: center;
padding: 10px;
`