import styled from "styled-components/native"
import { 
    View
} from "react-native"

const sizes = {
    small: 5,
    medium: 10,
    large: 20
}

const getVariant = (position, size) => `margin-${position}: ${sizes[size]}`
export const Spacer  = styled.View`
${({position="top", size="small"}) => getVariant(position, size)}
`

