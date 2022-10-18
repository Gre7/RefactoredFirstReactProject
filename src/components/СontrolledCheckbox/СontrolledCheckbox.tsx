import {
  HiddenCheckbox,
  StyledCheckbox,
  StyledSpan,
  StyledIcon,
  CheckboxContainer
} from "./СontrolledCheckboxStyled";

import {
  СontrolledCheckboxProps,
  CheckboxSize
} from "./СontrolledCheckboxTypes";

const СontrolledCheckbox: React.FC<СontrolledCheckboxProps> = ({
  name,
  size = CheckboxSize.medium,
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
          <StyledIcon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </StyledIcon>
        </StyledCheckbox>
        {Boolean(label) && <StyledSpan>{label}</StyledSpan>}
      </CheckboxContainer>
    </label>
  );
};

export default СontrolledCheckbox;
