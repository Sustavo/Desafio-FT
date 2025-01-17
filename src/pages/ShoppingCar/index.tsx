import Header from "../../components/Header";
import ProductCardLarge from "../../components/ProductCardLarge";
import { BodyContainer, BuyButton, CheckboxContainer, CheckboxInput, CheckboxText, DefaultText, DefaultTitle, LeftContainer, MainContainer, ProductValueContainer, RightContainer, SplitContainer, TotalText } from "./styles";

export default function ShoppingCar() {
    return (
        <>
            <Header />
            <MainContainer>
                <BodyContainer>
                    <DefaultTitle>Carrinho</DefaultTitle>
                    <SplitContainer>
                        <LeftContainer>
                            <ProductCardLarge />
                            <ProductCardLarge />
                            <ProductCardLarge />
                            <ProductCardLarge />
                            <ProductCardLarge />
                        </LeftContainer>
                        <RightContainer>
                            <ProductValueContainer>
                                <DefaultText>Produtos</DefaultText>
                                <DefaultText>R$ 1802,10</DefaultText>
                            </ProductValueContainer>
                            <ProductValueContainer>
                                <DefaultText>Descontos em produtos</DefaultText>
                                <DefaultText style={{ color: "#9E9E9E" }}>R$ -152,10</DefaultText>
                            </ProductValueContainer>
                            <ProductValueContainer style={{ marginTop: 40 }}>
                                <TotalText>Total</TotalText>
                                <DefaultText style={{ fontSize: 20 }}>R$ 1650,00</DefaultText>
                            </ProductValueContainer>
                            <CheckboxContainer>
                                <CheckboxInput type="checkbox" />
                                <CheckboxText>Aceito os termos de serviço</CheckboxText>
                            </CheckboxContainer>
                            <BuyButton>Comprar</BuyButton>
                        </RightContainer>
                    </SplitContainer>
                </BodyContainer>
            </MainContainer>
        </>
    )
}