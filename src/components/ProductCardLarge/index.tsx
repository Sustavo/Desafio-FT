import { BodyTitleContainer, BottomContainer, BrandBlockCards, DataContainer, DefaultText, IdText, MainContainer, ProductImage, ShoppingCartContainer, ShoppingCartIcon, TitleContainer } from "./styles";
import Fogao from "../../assets/Products/fogão.jpg"
import ShoppingCartAdd from "../../assets/SVG/shopping-cart-add.svg"

import BrandBlock from "../BrandBlock";

export default function ProductCardLarge() {
    return (
        <MainContainer>
            <ProductImage src={Fogao} />
            <DataContainer>
                <TitleContainer>
                    <BodyTitleContainer>
                        <DefaultText>Fogão 4 bocas casas bahia o melhor que tem</DefaultText>
                        <IdText>id: WATE9DX9E4YSRJSY</IdText>
                    </BodyTitleContainer>
                    <DefaultText>R$ 600,70</DefaultText>
                </TitleContainer>
                <BottomContainer>
                    <BrandBlockCards>
                        <BrandBlock title="Vestido" />
                        <BrandBlock title="Casamento" />
                        <BrandBlock title="Fashion" />
                    </BrandBlockCards>
                    <ShoppingCartContainer>
                        <ShoppingCartIcon src={ShoppingCartAdd} />
                    </ShoppingCartContainer>
                </BottomContainer>
            </DataContainer>
        </MainContainer>
    )
}