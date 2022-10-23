import React from "react"
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { updateCartQuantity } from "../redux/reducers/cart";
import { updateState } from "../Functions/Cart";
import { Cart } from './../Functions/Cart';

export const HeaderRightComponent = (props) => {
    var cartQuantity = useSelector((state) => state.cart.quantity);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const cart = new Cart(dispatch)
    React.useLayoutEffect(() => {
        cart.updateState();
    })
    return (
        <View>
            <TouchableOpacity style={{flexDirection:"row", borderWidth:2, borderColor:"grey", padding:7, borderRadius:30, marginTop:-5}}
                onPress={() => {
                    navigation.navigate("Cart");
                }}
            >  
                {(cartQuantity !== 0) ?
                <View style={{marginLeft:5,marginTop:7,zIndex:1,position:"absolute",height:20,width:20,backgroundColor:"#ff5468",borderRadius:100,alignItems:"center",opacity:0.875}}>
                    <Text>{cartQuantity}</Text>
                </View>
                : null}
                <View style={{marginTop:4,marginLeft:10}}>
                    <FontAwesome5 name="shopping-cart" size={24} color="white" />
                </View>
                <Image 
                    source={{ uri:'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'}}
                    style={{width:30,height:30, borderRadius:50,marginLeft:15, marginRight:15}}
                />
            </TouchableOpacity>
        </View>
    )
}