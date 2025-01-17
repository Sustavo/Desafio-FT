import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 420px;
    gap: 16px;
`

export const ProductImage = styled.img`
    width: 300px;
    height: 365px;
    border-radius: 4px;
    cursor: pointer;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 8px 0 0;
`

export const ProductTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
`

export const ProductPrice = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #FA6338;
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ShoppingCartIcon = styled.img`
    width: 20px;
    height: 20px;
` 

export const ShoppingCartContainer = styled.div`
    border: 1px solid black;
    padding: 4px 13px;
    border-radius: 8px;
    cursor: pointer;
`