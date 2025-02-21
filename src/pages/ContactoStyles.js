// src/styles/ContactoStyles.js
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;

  h1 {
    text-align: center;
  }

  h2 {
    margin-top: 20px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  background-color: #0077b6;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005f8c;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  color: #0077b6;
  transition: color 0.3s ease;

  &:hover {
    color: #005f8c;
  }

  svg {
    cursor: pointer;
  }
`;

