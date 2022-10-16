import React, { useState, useCallback } from "react";
import axios from "axios";

import API_KEY from "../../constants/apiKey";
import СontrolledCheckbox from "../СontrolledCheckbox/СontrolledCheckbox";
import Button from "../Button/Button";
import ImageContainer from "../ImageContainer/ImageContainer";
import {
  StyledCard,
  StyledCheckboxesGroup,
  StyledControlledCheckbox
} from "./CardStyled";

const Card = () => {
  const [disabledValue, setDisabledValue] = useState(false);
  const [enabledCheckedValue, setEnabledChecked] = useState(true);
  const [refreshCheckedValue, setRefreshChecked] = useState(false);

  const [imageUrl, changeImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/ao7.jpg"
  );

  const [isLoadingError, setIsLoadingError] = useState(false);

  const [intervalChangeImg, setIntervalChangeImg] = useState(null);

  const getImage = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search",
        {
          headers: {
            "x-api-key": API_KEY
          }
        }
      );
      const image = response.data[0].url;
      changeImageUrl(image);
      setIsLoadingError(false);
    } catch (e) {
      console.log(e);
      setIsLoadingError(true);
    }
  }, []);

  const setIntChangeImg = useCallback(() => {
    setIntervalChangeImg(setInterval(getImage, 3000));
  }, [getImage]);

  const stopIntChangeImg = useCallback(() => {
    setIntervalChangeImg(clearInterval(intervalChangeImg));
  }, [intervalChangeImg]);

  const handleChangeEnabledChecked = useCallback(
    ({ target: { checked } }) => {
      if (!checked) {
        setDisabledValue(true);
        setRefreshChecked(false);
        stopIntChangeImg();
      } else {
        setDisabledValue(false);
      }
      setEnabledChecked(checked);
    },
    [setDisabledValue, stopIntChangeImg]
  );

  const handleChangeRefreshChecked = useCallback(
    ({ target: { checked } }) => {
      setRefreshChecked(checked);
      if (checked) {
        setIntChangeImg();
      } else {
        stopIntChangeImg();
        changeImageUrl(imageUrl);
      }
    },
    [changeImageUrl, imageUrl, setIntChangeImg, stopIntChangeImg]
  );

  return (
    <StyledCard>
      <StyledCheckboxesGroup>
        <StyledControlledCheckbox
          label="Enabled"
          checked={enabledCheckedValue}
          onChange={handleChangeEnabledChecked}
        />
        <СontrolledCheckbox
          label="Auto-refresh"
          checked={refreshCheckedValue}
          onChange={handleChangeRefreshChecked}
          disabled={disabledValue}
        />
      </StyledCheckboxesGroup>
      <Button
        isDisabled={disabledValue}
        clickHandler={getImage}
        buttonTitle="Get Cat"
      />
      <div>
        <ImageContainer imageUrl={imageUrl} isLoadingError={isLoadingError} />
      </div>
    </StyledCard>
  );
};

export default Card;
