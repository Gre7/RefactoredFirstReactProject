import styled from "styled-components";
import СontrolledCheckbox from "../СontrolledCheckbox/СontrolledCheckbox";

export const StyledCard = styled.div`
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const StyledCheckboxesGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledControlledCheckbox = styled(СontrolledCheckbox)`
  margin-bottom: 8px;
`;
