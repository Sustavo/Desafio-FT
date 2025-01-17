import { CounterText, HeaderIcon, IconCounterContainer, LeftContainer, LogoForesToken, MainContainer, RightContainer } from "./styles";
import Logo from "../../assets/Logo.png"
import User from "../../assets/SVG/fi-rr-user.svg"
import ShoppingCart from "../../assets/SVG/fi-rr-shopping-cart.svg"
import Heart from "../../assets/SVG/fi-rr-heart.svg"
import SearcherInput from "../SearcherInput";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <MainContainer>
            <LeftContainer>
                <LogoForesToken src={Logo} onClick={() => navigate(`/`)} />
                <SearcherInput />
            </LeftContainer>
            <RightContainer>
                <HeaderIcon src={User} />
                <IconCounterContainer>
                    <HeaderIcon src={ShoppingCart} onClick={() => navigate(`/shoppingCar`)} />
                    <CounterText>0</CounterText>
                </IconCounterContainer>
                <IconCounterContainer>
                    <HeaderIcon src={Heart} />
                    <CounterText>0</CounterText>
                </IconCounterContainer>
            </RightContainer>
        </MainContainer>
    )
}