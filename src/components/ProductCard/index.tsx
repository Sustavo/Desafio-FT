import { DataContainer, MainContainer, PriceContainer, ProductImage, ProductPrice, ProductTitle, ShoppingCartContainer, ShoppingCartIcon } from "./styles";
import Fogao from "../../assets/Products/fogão.jpg"
import ShoppingCartAdd from "../../assets/SVG/shopping-cart-add.svg"
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/product/13`)
    }
    return (
        <MainContainer>
            <ProductImage src={Fogao} onClick={handleNavigate} />
            <DataContainer>
                <ProductTitle onClick={handleNavigate}>Fogão 4 bocas casas bahia o melhor...</ProductTitle>
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