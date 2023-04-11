import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

const breakpointCols = { 524: 1, 768: 2, 1440: 3, 1980: 4 };

const ImageGrid = ({ searchName }) => {
  // This is for testing purposes, no fetching logic yet
  const items = Array(50).fill({});
  const heightArray = [584, 372, 238, 292, 278];

  const photoItems = items
    .map(item => {
      let newItem = { ...item };
      if (!newItem.customHeight) {
        const imageHeight =
          heightArray[Math.floor(Math.random() * heightArray.length)];
        newItem.customHeight = imageHeight;
      }
      return newItem;
    })
    .map((item, index) => (
      <PhotoWrapper
        key={index}
        style={{ height: `${item.customHeight}px` }}
      ></PhotoWrapper>
    ));

  return (
    <Grid breakpointCols={breakpointCols} columnClassName='grid-column'>
      {photoItems}
    </Grid>
  );
};

const Grid = styled(Masonry)`
  display: flex;
  margin-left: -1.5rem;

  & > div {
    margin-bottom: 1.5rem;
  }

  & .grid-column {
    margin-left: 1.5rem;
  }
`;

const PhotoWrapper = styled.div`
  background-color: #616162;
  border-radius: var(--radius);
  margin-bottom: 24px;
`;

export default ImageGrid;
