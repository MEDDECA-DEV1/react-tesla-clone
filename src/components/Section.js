import React from 'react'
import styled, { keyframes } from 'styled-components'
function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{ title || "" }</h1>
        {
          description && 
          <p>{ description || "" }</p>
        }
      </ItemText>
      <Buttons>
        <ButtonGroup>
          {
            leftBtnText && 
              <LeftButton>
                { leftBtnText || ""}
              </LeftButton>
          }

          {
            rightBtnText && 
            <RightButton>
              { rightBtnText || ""}
            </RightButton>
          }
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/> 
      </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
  width:100vw;
  height:100vh;
  background-color:orange;
  background-image : url('/images/model-s.jpg');
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  background-image :${ props => 'url("/images/'+props.bgImage+'")' } ;
  p{
    text-transform:capitalize
  }
 `;
const ItemText = styled.div`
  padding-top:15vh;
  text-align:center;  
`;
const Buttons = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonGroup = styled.div`
  display:flex;
  margin-bottom:30px;
  max-width:100vw;
  @media(max-width:768px) {
    flex-direction:column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 23, 0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;
`;

const RightButton = styled(LeftButton)`
  background-color:white;
  opacity:0.65;
  color:black;  
`;

const animateDown = keyframes({
  '0%':{
    transform:' translateY(0)'
  },
  '20%':{
    transform:' translateY(0)'
  },
  '80%':{
    transform:' translateY(0)'
  },
  '100%':{
    transform:' translateY(0)'
  },
  '40%':{
    transform:' translateY(5px)'
  },
  '60%':{
    transform:' translateY(3px)'
  }
})
const DownArrow = styled.img`
  height:40px;
  margin-bottom:5px;
  animation:${animateDown} infinite 1.5s;
  overflow-x:hidden;
`;

