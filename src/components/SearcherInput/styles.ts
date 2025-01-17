import styled from "styled-components";

export const MainContainer = styled.div`
  width: 800px;
  height: 40px;
  border-radius: 8px;
  padding: 0 8px;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    border: 1px solid black;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: black;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const IconSearch = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const Separador = styled.div`
    width: 1px;
    height: 16px;
    background: #D9D9D9;
`;
