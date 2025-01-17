import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

export const DefaultTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;

export const SplitContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 16px;
  width: 333px;
  height: fit-content;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const ProductValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DefaultText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const TotalText = styled.span`
  font-size: 32px;
  font-weight: 600;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;

export const CheckboxText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const BuyButton = styled.button`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  background: transparent;
  border: 2px solid #fa6338;
  border-radius: 8px;
  font-size: 40px;
  color: #fa6338;
  font-weight: bold;
  margin-top: 40px;

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

  cursor: pointer;
`;
