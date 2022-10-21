import React from "react"
import { TouchableOpacity, Text, Dimensions, View } from 'react-native';


export const TabNavButton = ({ onPress, title, activeTitle }) => {
    const width = Dimensions.get('window').width;
    return (
        <View>
        <TouchableOpacity onPress={onPress} style={{alignItems:"center",borderBottomColor:(activeTitle == title) ? "black" : "red",borderBottomWidth:3,borderLeftWidth:(title != "Menü") ? 1 : 0, height:"100%", justifyContent:"center", backgroundColor:"grey",width:width/3}}>
            <Text style={{fontFamily:"McLaren-Regular"}}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}