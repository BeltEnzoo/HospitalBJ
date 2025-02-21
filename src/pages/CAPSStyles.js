// src/styles/CAPSStyles.js
import styled from 'styled-components';

export const CAPSContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const Th = styled.th`
  background: #0077b6;
  color: white;
  padding: 10px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 14px;
  }
`;

export const TableRow = styled.tr`
  display: table-row;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 10px;
  }
`;

export const CardContainer = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Card = styled.div`
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #0077b6;
`;

export const CardTitle = styled.h3`
  margin: 0 0 5px 0;
  color: #0077b6;
`;

export const CardText = styled.p`
  margin: 2px 0;
  font-size: 14px;
`;

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  background: wheat;
  border-radius: 5%;
`;

export const Title2 = styled.h1`
  color: crimson;
`;
