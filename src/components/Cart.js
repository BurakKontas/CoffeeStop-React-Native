import React, {useState} from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Pressable,
    Alert,
    Image
  } from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';

import { useSelector, useDispatch } from 'react-redux';
import { getCart, removeCart, updateState, addToCart, removeFromCart, Cart } from './../Functions/Cart';

const darkColors = {
    background: '#121212',
    primary: '#BB86FC',
    primary2: '#3700b3',
    secondary: '#03DAC6',
    onBackground: '#FFFFFF',
    error: '#CF6679',
};
  
const extractItemKey = item => {
    return item.id.toString();
};

const Item = ({ item }) => {
    return (
        <View style={{
            backgroundColor: '#121212',
            miHheight: 80,
            flexDirection: 'row',
            padding: 10,
        }}>
        {(item.img !== null) ? 
        <Image 
        source={{uri:item.img}}
        style={{width:80,height:"100%"}}
        /> : null}
        <View style={{flexDirection:"column", marginLeft:15, minWidth:"70%"}}>
          <Text style={{color:"white",fontWeight:"bold"}}>{item.name}</Text>
          <Text style={{color:"white", width:"50%"}}>{item.description}</Text>
          <View>
            <Text style={{color:"red"}}>₺{(item.price*item.quantity).toFixed(2)} ({item.quantity})</Text>
          </View>
        </View>
        </View>
    );
  };

async function updateCartState(setData,cart) {
  await cart.getCart().then(r => {
    setData(r)
  })
  cart.updateState();
}

function renderItemSeparator() {
  return <View style={{backgroundColor:"red",height:1,opacity:0.5}} />;
}


export const CartList = () => {
    const [data, setData] = React.useState(null);
    const dispatch = useDispatch()
    var cart = new Cart(dispatch)
    React.useLayoutEffect(() => {
      updateCartState(setData,cart)
    },[setData,dispatch])
    const QuickActions = (index, qaItem) => {
        return (
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
            <View style={{
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              <Pressable onPress={() => {
                cart.removeFromCart(qaItem.id).then(() => {
                  updateCartState(setData,cart)
                })
                
              }}>
                <Text style={{
                    color: darkColors.error,
                    fontWeight: 'bold',
                }}>Delete</Text>
              </Pressable>
            </View>
          </View>
        );
    };

    return (
        <SwipeableFlatList
        keyExtractor={extractItemKey}
        data={data}
        renderItem={({item}) => (
          <Item item={item} />
        )}
        maxSwipeDistance={80}
        renderQuickActions={({index, item}) => QuickActions(index, item)}
        shouldBounceOnMount={true}
        ItemSeparatorComponent={renderItemSeparator}
      />
    );
}