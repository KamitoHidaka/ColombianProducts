/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from "styled-components";
const ItemContainer = styled.div``;

type ItemProps = {
  item: any;
};

const CarouselItem = ({ item }: ItemProps) => {
  return (
    <ItemContainer>
      <img src={item.ImagePath} alt="" />
    </ItemContainer>
  );
};

export default CarouselItem;
