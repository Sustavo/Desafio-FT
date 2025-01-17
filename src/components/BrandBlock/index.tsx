import { DefaultText, MainContainer } from "./styles";

interface BrandBlockProps {
    title: string;
}

export default function BrandBlock({ title }: BrandBlockProps) {
    return (
        <MainContainer>
            <DefaultText>{title}</DefaultText>
        </MainContainer>
    )
}