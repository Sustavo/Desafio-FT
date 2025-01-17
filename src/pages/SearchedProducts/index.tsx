import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { BodyContainer, DefaultTitle, FoundItemsTitle, MainContainer, ProductsContainer, ProductsCounter, SelectInputContainer, SliderContainer, SliderTitle, TitleContainer } from "./styles";
import { OPTIONS_PER_PAGE, OPTIONS_SORTED_BY } from "./options";
import { useState } from "react";
import SelectWithTitle from "../../components/SelectWithTitle";
import ProductCardLarge from "../../components/ProductCardLarge";
import SliderItems from "../../components/SliderItems";

export default function SearchedProducts() {
    const { searchQuery } = useParams();
    const [selectedSort, setSelectedSort] = useState("product_name");
    const [perPageValue, setPerPageValue] = useState(10);

    return (
        <MainContainer>
            <Header />
            <BodyContainer>
                <TitleContainer>
                    <DefaultTitle>Ofertas de {searchQuery}</DefaultTitle>
                    <ProductsCounter>1 - 25 de 242 resultados</ProductsCounter>
                </TitleContainer>
                <SelectInputContainer>
                    <SelectWithTitle
                        title="Ordenar Por"
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setSelectedSort(event.target.value)}
                        value={selectedSort}>
                        {OPTIONS_SORTED_BY.map(({ text, value }) => (
                            <option key={value} value={value}>
                                {text}
                            </option>
                        ))}
                    </SelectWithTitle>
                    <SelectWithTitle
                        title="Ordenar Por"
                        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPerPageValue(Number(event.target.value))}
                        value={perPageValue}>
                        {OPTIONS_PER_PAGE.map(({ value }) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </SelectWithTitle>
                </SelectInputContainer>
                <FoundItemsTitle>Encontramos 235 produtos</FoundItemsTitle>
                <ProductsContainer>
                    <ProductCardLarge />
                    <ProductCardLarge />
                    <ProductCardLarge />
                    <ProductCardLarge />
                    <ProductCardLarge />
                </ProductsContainer>
                <SliderContainer>
                    <SliderTitle>Você pode Gostar</SliderTitle>
                    <SliderItems />
                </SliderContainer>
            </BodyContainer>
        </MainContainer >
    )
}