import { IconContainer, MainContainer, RedText, Separator, ShopIcon, TruckIcon } from "./styles";
import Shop from "../../assets/SVG/fi-rr-shop.svg"
import Truck from "../../assets/SVG/shopping-truck.svg"
import Rollback from "../../assets/SVG/Rollback Box.svg"

export default function Banner() {
    return (
        <MainContainer>
            <IconContainer>
                <ShopIcon src={Shop} />
                <RedText>Venda na ForesToken</RedText>
            </IconContainer>
            <Separator/>
            <IconContainer>
                <TruckIcon src={Truck} />
                <RedText>Frete Gratis</RedText>
            </IconContainer>
            <Separator/>
            <IconContainer>
                <ShopIcon src={Rollback} />
                <RedText>Devolução Grátis</RedText>
            </IconContainer>
        </MainContainer>
    )
}