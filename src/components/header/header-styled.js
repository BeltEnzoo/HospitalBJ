import styled from "styled-components";


export const HeaderWrapper = styled.header`
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`

   background-color: #e61c1c;
   padding: 10px;
   border-radius: 5px;
   display: flex;
   gap: 20px;

   a{
    color: white;
    text-transform: uppercase;
    text-decoration: none;
   }

  a:hover {
    text-decoration: underline;
  }
`;