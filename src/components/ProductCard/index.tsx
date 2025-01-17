import { DataContainer, MainContainer, PriceContainer, ProductImage, ProductPrice, ProductTitle, ShoppingCartContainer, ShoppingCartIcon } from "./styles";
import Fogao from "../../assets/Products/fogão.jpg"
import ShoppingCartAdd from "../../assets/SVG/shopping-cart-add.svg"

export default function ProductCard() {
    return (
        <MainContainer>
            <ProductImage src={Fogao} />
            <DataContainer>
                <ProductTitle>Fogão 4 bocas casas bahia o melhor...</ProductTitle>
                <PriceContainer>
                    <ProductPrice>R$ 1550,32</ProductPrice>
                    <ShoppingCartContainer>
                        <ShoppingCartIcon src={ShoppingCartAdd} />
                    </ShoppingCartContainer>
                </PriceContainer>
            </DataContainer>

        </MainContainer>
    )
}