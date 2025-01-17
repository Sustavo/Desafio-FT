import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1250px;
  height: 290px;
  display: flex;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ProductImage = styled.img`
  width: 400px;
  height: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 32px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const BodyTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 750px;
`;

export const DefaultText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const IdText = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const BrandBlockCards = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const ShoppingCartContainer = styled.div`
    border: 1px solid black;
    padding: 8px 23px;
    border-radius: 8px;
    cursor: pointer;
`

export const ShoppingCartIcon = styled.img`
    width: 24px;
    height: 24px;
`
