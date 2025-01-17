import Banner from "../../components/Banner";
import Header from "../../components/Header";
import SliderItems from "../../components/SliderItems";
import { MainContainer, SliderContainer, SliderTitle } from "./styles";
export default function Initial() {
    return (
        <MainContainer>
            <Header />
            <Banner />
            <SliderContainer>
                <SliderTitle>Mais Procurados</SliderTitle>
                <SliderItems />
            </SliderContainer>
            <SliderContainer>
                <SliderTitle>Mais Procurados Em SmartPhones</SliderTitle>
                <SliderItems />
            </SliderContainer>
            <SliderContainer>
                <SliderTitle>Mais Procurados Em Calçados</SliderTitle>
                <SliderItems />
            </SliderContainer>
        </MainContainer>
    )
}