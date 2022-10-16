import {
  HiddenCheckbox,
  StyledCheckbox,
  StyledSpan,
  Icon,
  CheckboxContainer
} from "./СontrolledCheckboxStyled";

type СontrolledCheckboxProps = {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  size?: string;
};

const СontrolledCheckbox: React.FC<СontrolledCheckboxProps> = ({
  name,
  size = "16px",
  label,
  disabled,
  onChange,
  className,
  checked
}) => {
  return (
    <label>
      <CheckboxContainer className={className}>
        <HiddenCheckbox
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <StyledCheckbox checked={checked} size={size} disabled={disabled}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        {Boolean(label) && <StyledSpan>{label}</StyledSpan>}
      </CheckboxContainer>
    </label>
  );
};

export default СontrolledCheckbox;
