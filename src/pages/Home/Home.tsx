import styled from "styled-components";
import ProductCard from "src/components/Products/ProductCard";
import "./Home.scss";
import Carousel from "src/components/Carousel/Carousel";
const HomeWrap = styled.div``;
const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
  padding: 1rem;
`;
export default function Home() {
  return (
    <HomeWrap>
      <Carousel />
      <ProductsWrap>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsWrap>
    </HomeWrap>
  );
}
