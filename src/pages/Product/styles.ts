import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  padding-left: 340px;
`;

export const DefaultTitle = styled.h1`
  font-size: 28px;
  max-width: 750px;
  font-weight: bold;
  color: black;
  margin-bottom: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const MainImage = styled.img`
  width: 750px;
  height: 400px;
`;

export const ImagesCarousel = styled.img`
  width: 80px;
  height: 120px;
  cursor: pointer;
`;

export const ImagesCarouselContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
`;

export const PriceText = styled.span`
  font-size: 40px;
  font-weight: bold;
  color: #fa6338;
`;

export const DescriptionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

export const DescriptionText = styled.span`
  font-size: 20px;
  margin-bottom: 32px;
`;

export const CartButton = styled.button`
  width: 300px;
  height: 60px;
  background: transparent;
  border: 2px solid #fa6338;
  border-radius: 8px;
  margin-bottom: 64px;
  font-size: 40px;
  color: #fa6338;
  font-weight: bold;

  &:hover {
    border: 2px solid #ff8c42; 
    color: #ff8c42; 
    background-color: #fff0d1;
  }

  &:active {
    border: 2px solid #ff6f32;
    color: #ff6f32; 
    outline: none;
  }

  cursor: pointer
`;
