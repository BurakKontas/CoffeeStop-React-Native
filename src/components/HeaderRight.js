import React from "react"
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export const HeaderRightComponent = (props) => {
    return (
        <View>
            <TouchableOpacity style={{flexDirection:"row", borderWidth:2, borderColor:"grey", padding:7, borderRadius:30, marginTop:-5}}>
                <View style={{marginTop:4,marginLeft:10}}>
                    <FontAwesome5 name="shopping-basket" size={24} color="white" />
                </View>
                <Image 
                    source={{ uri:'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'}}
                    style={{width:30,height:30, borderRadius:50,marginLeft:15, marginRight:15}}
                />
            </TouchableOpacity>
        </View>
    )
}