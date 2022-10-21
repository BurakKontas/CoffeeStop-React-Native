import React from "react"
import { View, Text, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

export const HeaderLeftComponent = (props) => {
    var canGoBack = props.canGoBack;
    var navigation = useNavigation();
    return (
        <View>
            {(canGoBack) ? 
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}  style={{marginLeft:20, flexDirection:"row"}}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={{color:"white",fontSize:18, marginLeft:10, fontFamily:"McLaren-Regular"}}>Geri</Text>
            </TouchableOpacity>
            <Text style={{color:"white", fontFamily:"McLaren-Regular", marginLeft:65, fontSize:18}}>Edirne</Text>
            </View>
            :
            <View style={{marginLeft:20, flexDirection:"row"}}>
            <Fontisto name="coffeescript" size={24} color="white" />
            <Text style={{color:"white", fontFamily:"McLaren-Regular", marginLeft:10, fontSize:18}}>CoffeeStop</Text>
            </View>
            }
        </View>
    )
}