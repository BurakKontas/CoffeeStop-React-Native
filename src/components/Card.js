import React from "react"
import { TouchableOpacity } from 'react-native';
import { theme } from './../theme';


export const Card = ( { children, onPress, style } ) => {
    return (
    <TouchableOpacity
        style={style}
        onPress={onPress}
        >
        {children}
    </TouchableOpacity>
    );
}