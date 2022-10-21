import styled from "styled-components/native";
import { View, Text } from "react-native";

export const Title = styled(Text)`
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.theme.main};
`;