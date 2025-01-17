import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #d9d9d9;
  background: red;

  .slick-prev::before,
  .slick-next::before {
    font-size: 32px;
    color: blue; 
  }
`;

export const ArrowIcon = styled.img`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;
