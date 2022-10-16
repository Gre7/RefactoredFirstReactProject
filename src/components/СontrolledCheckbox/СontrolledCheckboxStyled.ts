import styled from "styled-components";

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
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
`;

// eslint-disable-next-line
export const StyledCheckbox = styled.div<{
  checked: boolean;
  size: string;
  disabled: boolean;
}>`
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: ${(props) => (props.checked ? "#0b76ef" : "")};
  background: ${({ disabled }) => (disabled ? "#E9E9E9" : "")};
  border: 1px solid ${(props) => (props.checked ? "#0b76ef" : "#adb5bd")};
  border-radius: 0.25em;
  transition: all 150ms;
  cursor: ${({ disabled }) => (disabled ? "" : "pointer")};

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const StyledSpan = styled.span`
  font-family: "Montserrat";
  margin-left: 8px;
`;
