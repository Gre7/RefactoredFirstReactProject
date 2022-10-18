import styled from "styled-components";

export const StyledIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  visibility: hidden;
`;

// eslint-disable-next-line
export const StyledCheckbox = styled.div<{
  checked: boolean;
  size: string;
  disabled?: boolean;
}>`
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: ${({ checked }) => (checked ? "#0b76ef" : "")};
  background: ${({ disabled }) => (disabled ? "#E9E9E9" : "")};
  border: 1px solid ${({ checked }) => (checked ? "#0b76ef" : "#adb5bd")};
  border-radius: 0.25em;
  transition: all 150ms;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};

  ${StyledIcon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

export const StyledSpan = styled.span`
  font-family: "Montserrat";
  margin-left: 8px;
`;
