import React from "react";

import { StyledButton } from "./ButtonStyled";
import { ButtonProps } from "./ButtonTypes";

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  clickHandler,
  children,
  className
}) => {
  return (
    <StyledButton
      className={className}
      disabled={isDisabled}
      onClick={clickHandler}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
