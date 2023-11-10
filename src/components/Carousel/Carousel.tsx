import styled from "styled-components";
import { CarouselData } from "./CarouselData";
import CarouselItem from "./CarouselItem";
import { useState } from "react";

const CarouselWrap = styled.div``;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <CarouselWrap>
      {CarouselData.map((item) => {
        return <CarouselItem item={item} key={item.id} />;
      })}
    </CarouselWrap>
  );
}
