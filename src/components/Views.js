import React from "react";
import { ScrollView, View } from "react-native";

import { theme } from '../theme';

export const Container = ({ children, style }) => {
    return (
        <ScrollView style={[style,{backgroundColor:theme.background}]}>
            {children}
        </ScrollView>
    )
}

export const Stuck = ({ children, style }) => {
    return (
        <View style={[style,{backgroundColor:theme.background}]}>
            {children}
        </View>
    )
}

export const Center = ({ style, children}) => {
    return (
        <ScrollView style= {[style,{
                flex: 1,
                backgroundColor: theme.background,
                justifyContent:"center",
                alignItems:"center",
            }]}>
            {children}
        </ScrollView>
    )
}