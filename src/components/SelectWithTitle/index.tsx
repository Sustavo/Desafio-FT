import { MainContainer, Select, Title } from "./styles";

interface SelectWithTitleProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    title: string;
    children: React.ReactNode;
}
export default function SelectWithTitle({title, children, ...props}: SelectWithTitleProps) {
    return (
        <MainContainer>
            <Title>{title}</Title>
            <Select {...props}>{children}</Select>
        </MainContainer>

    )
}