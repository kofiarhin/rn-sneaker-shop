import styled from "styled-components/native"
import { 
    View,
    Dimensions
} from "react-native"

const { width, height } = Dimensions.get("window")

const sizes = {
    small: 5,
    medium: 10,
    large: 20
}

const getVariant = (position, size) => `margin-${position}: ${sizes[size]}`
const Spacer  = styled.View`
${({position="top", size="small"}) => getVariant(position, size)}
`

export {
     sizes,
     width,
     height,
     Spacer
}

