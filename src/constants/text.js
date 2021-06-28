import styled from "styled-components/native"
import { Text } from "react-native";

const sizes = {
    small: "20px",
    medium: "30px",
    large: "50px"
}

const getDefaults = () => `
font-family: Montserrat-Bold;
`

export const Title = styled.Text`
${({color}) => `color: ${color}`};
${({ size}) => `font-size: ${sizes[size]}`}
${() => getDefaults() };
`