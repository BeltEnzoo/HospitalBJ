import styled from "styled-components";

export const ConteinerTramitesPersonales = styled.div`
/* background-color: */
height: auto;
text-align: center;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
margin: 0px 0px;
`
export const TitleTramitesPersonales = styled.h1`
  color: white;
  background-color: green;
  padding: 10px;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: 100px;
`
export const DescripcionTramitesPersonales = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px 0px;
  text-align: center;
`
export const CardTramitesPersonales = styled.div`
  height: auto;
  width: auto;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;


export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-size: 20px;
  text-decoration: none;
`;
export const TitleLink = styled.a`
  text-decoration: none;
  color: #333;
  &:hover{
    color: green;
  }
`;