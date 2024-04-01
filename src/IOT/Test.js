import React from 'react'
import styled from "styled-components";
import logo from '../assets/Hij5.png';


export const ContentBox = styled.div`
  padding-top: 50px;
  padding-left: 50px;
  background-color: #aebbc3;
  //background-color: #e7e9eb;
  //border-radius: 20px;
  border-bottom : 8px solid ${(devries) => devries.bordercolor};
  transition: 3.5s;
  text-align: left;
  width : 100%;
  max-width : 2600px;
  height : 100%;
  max-height : 130px;

  h2 {
  text-align: left;
  font-size: 8px;
  color: ${(devries) => devries.bordercolor};
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Montagu Slab', serif;
  font-style: italic;
  width : 100px;
  display: inline; 
  margin:10;
}

h3 {
  text-align: left;
  font-size: 14px;
  color: ${(devries) => devries.bordercolor2};
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Montagu Slab', serif;
  font-style: italic;
  width : 100px;
  display: inline; 
  margin:10;
}

`;
const hij5red = "#e6262f"
const gold = "#A67C37";
const white = "#FEF6E6";
export default function Test() {
  return (
    <>
    <ContentBox bordercolor={hij5red} bordercolor2={white}>

      <img src={logo} width="170" height="90" />

    </ContentBox>
      </>
  )
}





