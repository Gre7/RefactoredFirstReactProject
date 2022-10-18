export enum CheckboxSize {
  small = "12px",
  medium = "16px",
  large = "20px"
}

export type СontrolledCheckboxProps = {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  size?: CheckboxSize;
};
