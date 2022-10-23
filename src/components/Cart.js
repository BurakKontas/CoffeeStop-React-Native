import React, {useState} from "react"
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Pressable,
    Alert,
    Image,
    ScrollView
  } from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';

import { useSelector, useDispatch } from 'react-redux';
import { getCart, removeCart, updateState, addToCart, removeFromCart, Cart } from './../Functions/Cart';
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';
import { Modal, Portal, Provider } from "react-native-paper";
import { QR } from "./QRCode";

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

function order(data,price) {
  var obj = [];
  if(data === null) return null;
  data.forEach(data => {
    obj = [...obj,{
      name:data.name,
      quantity:data.quantity,
      price:data.price,
    }]
  });
  return [...obj,{totalPrice:price}]
}

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
    const price = useSelector((state) => state.cart.finalPrice)
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

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
    <Provider>
    <View style={{flex:1}}>
      <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{marginLeft:"2.5%",width:"95%",borderRadius:30,marginBottom:"25%",backgroundColor: 'white', padding: 20, height:"50%",alignItems:"center",justifyContent:"space-between"}}>
        <Text style={{fontSize:17,fontFamily:"FuzzyBubbles-Bold"}}>QR Kodu Kasada Okutunuz</Text>
        <QR data={order(data,price)} />
      </Modal>
      </Portal>
      <ScrollView
        nestedScrollEnabled={true}
        style={{flex:0.8}}
      >
      <SwipeableFlatList
          keyExtractor={extractItemKey}
          data={data}
          renderItem={({item}) => (
            <View>
              <Item item={item} />
            </View>
          )}
          maxSwipeDistance={80}
          renderQuickActions={({index, item}) => QuickActions(index, item)}
          shouldBounceOnMount={true}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </ScrollView>
      <View style={{flex:0.1,justifyContent:"space-evenly", alignItems:"center", backgroundColor:"lightgrey", flexDirection:"row"}}>
        <View
        style={{
          backgroundColor:"white",
          padding:10,
          borderRadius:20
        }}>
          <Text>Toplam Fiyat: ₺{price}</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor:"white",
            padding:10,
            borderRadius:20
          }}
          onPress={() => {
            showModal();
          }}
        >
          <Text>Satın Al</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Provider>

    );
}