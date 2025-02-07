import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  text-align: center;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 150px;
  padding: 0px;
  width: 100%;
  background-color: #f9f9f9;
  gap: 10px;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 0%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const PhoneNumber = styled.p`
  margin: 5px 0 0;
  font-size: 16px;
  color: #555
  `;
  