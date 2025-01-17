import { IconContainer, IconSearch, MainContainer, SearchInput, Separador } from "./styles";
import Search from "../../assets/SVG/search.svg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearcherInput() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim()) {
            navigate(`/searchedProducts/${searchQuery}`);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <MainContainer>
            <SearchInput
                value={searchQuery} 
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua busca..."
            />
            <IconContainer>
                <Separador />
                <IconSearch src={Search} onClick={handleSearch} />
            </IconContainer>
        </MainContainer>
    )
}