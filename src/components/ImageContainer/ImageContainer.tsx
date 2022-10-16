import React from "react";
import { StyledImage, StyledImageContainer } from "./ImageContainerStyled";

type ImageContainerProps = {
  imageUrl: string;
  isLoadingError: boolean;
};

const erroredSrc =
  // eslint-disable-next-line max-len
  "https://media.istockphoto.com/photos/concept-of-error-in-program-code-picture-id1308685498?b=1&k=20&m=1308685498&s=170667a&w=0&h=A4y81zJoYVHkIS9i9sC5njXDKJ5MNvRG3jfMzsEq5EI=";

const ImageContainer: React.FC<ImageContainerProps> = ({
  imageUrl,
  isLoadingError
}) => {
  const imageSrc = isLoadingError ? erroredSrc : imageUrl;
  return (
    <StyledImageContainer>
      <StyledImage src={imageSrc} alt="Cat" />
    </StyledImageContainer>
  );
};

export default ImageContainer;
