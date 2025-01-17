import Header from "../../components/Header";
import { BodyContainer, CartButton, DefaultTitle, DescriptionText, DescriptionTitle, ImageContainer, ImagesCarousel, ImagesCarouselContainer, MainContainer, MainImage, PriceText } from "./styles";
import Fogao from "../../assets/Products/fogão.jpg"

export default function Product() {
    return (
        <MainContainer>
            <Header />
            <BodyContainer>
                <DefaultTitle>Fogão 4 bocas casas bahia o melhor que tem</DefaultTitle>
                <ImageContainer>
                    <MainImage src={Fogao} />
                    <ImagesCarouselContainer>
                        <ImagesCarousel src={Fogao} />
                        <ImagesCarousel src={Fogao} />
                        <ImagesCarousel src={Fogao} />
                        <ImagesCarousel src={Fogao} />
                        <ImagesCarousel src={Fogao} />
                    </ImagesCarouselContainer>
                </ImageContainer>
                <PriceText>R$ 1500,10</PriceText>
                <DescriptionTitle>Descrição</DescriptionTitle>
                <DescriptionText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quos, quae explicabo suscipit nemo sit iusto veritatis accusantium eaque repudiandae deleniti, earum doloremque cum, eveniet commodi ut est nihil facere.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quos, quae explicabo suscipit nemo sit iusto veritatis accusantium eaque repudiandae deleniti, earum doloremque cum, eveniet commodi ut est nihil facere.</DescriptionText>
                <CartButton>+ Carrinho</CartButton>
            </BodyContainer>



        </MainContainer>
    )
}