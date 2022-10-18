import React from "react";

export type ButtonProps = React.PropsWithChildren<{
  isDisabled?: boolean;
  clickHandler: () => void;
  className?: string;
}>;
