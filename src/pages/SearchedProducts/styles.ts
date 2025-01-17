import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 32px;
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 230px;
    @media (max-width: 1366px) {
    padding-left: 60px;
  }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px 0;
    gap: 16px;
`

export const DefaultTitle = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: black;
`


export const FoundItemsTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: black;
`

export const ProductsCounter = styled.span`
    font-size: 16;
    font-weight: bold;
    color: black;
`

export const SelectInputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
`

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 64px;
`

export const SliderTitle = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
    color: black;
`
export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1300px;
    margin-bottom: 64px;
`