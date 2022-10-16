import React from "react";
import { StyledButton } from "./ButtonStyled";

type ButtonProps = {
  isDisabled: boolean;
  clickHandler: () => void;
  buttonTitle: string;
  className: string;
};

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  clickHandler,
  buttonTitle,
  className
}) => {
  return (
    <StyledButton
      className={className}
      disabled={isDisabled}
      onClick={clickHandler}
    >
      {buttonTitle}
    </StyledButton>
  );
};

export default Button;
