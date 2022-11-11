import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

import { ICatItem } from "../../models/models";
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
  const [enabledChekedValue, setEnabledChekedValue] = useState(true);
  const [refreshCheckedValue, setRefreshChecked] = useState(false);

  const [imageUrl, changeImageUrl] = useState(
    "https://cdn2.thecatapi.com/images/ao7.jpg"
  );

  const [isLoadingError, setIsLoadingError] = useState(false);

  const [intervalChangeImg, setIntervalChangeImg] = useState<
    ReturnType<typeof setInterval>
  >();

  const getImage = async () => {
    try {
      const response: AxiosResponse<ICatItem[]> = await axios.get(
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
  };

  const setIntChangeImg = () => {
    setIntervalChangeImg(setInterval(getImage, 5000));
  };

  const stopIntChangeImg = () => {
    clearInterval(intervalChangeImg);
  };

  const handleChangeEnabledChecked = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;

    setEnabledChekedValue((prev) => !prev);

    if (!checked) {
      setRefreshChecked(false);
      stopIntChangeImg();
    }
  };

  const handleChangeRefreshChecked = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const checked = e.target.checked;

    setRefreshChecked(checked);

    if (checked) {
      setIntChangeImg();
    } else {
      stopIntChangeImg();
    }
  };

  return (
    <StyledCard>
      <StyledCheckboxesGroup>
        <StyledControlledCheckbox
          label="Enabled"
          checked={enabledChekedValue}
          onChange={handleChangeEnabledChecked}
        />
        <СontrolledCheckbox
          label="Auto-refresh"
          checked={refreshCheckedValue}
          onChange={handleChangeRefreshChecked}
          disabled={!enabledChekedValue}
        />
      </StyledCheckboxesGroup>
      <Button isDisabled={!enabledChekedValue} clickHandler={getImage}>
        Get Cat
      </Button>
      <div>
        <ImageContainer imageUrl={imageUrl} isLoadingError={isLoadingError} />
      </div>
    </StyledCard>
  );
};

export default Card;
