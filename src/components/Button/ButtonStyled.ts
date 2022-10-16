import styled from "styled-components";

export const StyledButton = styled.button`
  text-decoration: none;
  display: inline-block;
  color: white;
  border: none;
  padding: 12px 36px;
  max-width: 150px;
  width: 100%;
  margin: 16px 20px 8px 20px;
  border-radius: 8px;
  font-family: "Montserrat", sans-serif;
  background: #2868b0;
  cursor: pointer;
  &:disabled {
    opacity: 60%;
    cursor: inherit;
  }
`;
