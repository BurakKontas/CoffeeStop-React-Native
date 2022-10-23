import React from "react";
import {
  Text,
  View
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getCart } from './../Functions/Cart';
import { useSelector } from 'react-redux';
import { CartList } from "../components/Cart";

export function CartScreen(props) {
  const navigation = useNavigation();
  var cartQuantity = useSelector((state) => state.cart.quantity);
  var cart = useSelector((state) => state.cart.cart);

  return (  
    <View style={{backgroundColor:"grey",flex:1}}>
      <CartList />
    </View>
  );
}

export function CartHeader(props) {
  return (
    <View>
      <Text style={{color:"white"}}>Test</Text>
    </View>
  )
}
