import * as React from 'react';
import { Text, Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native'; 
import { Divider, Modal, Portal } from 'react-native-paper';
import { Cart } from './../Functions/Cart';
import { useDispatch } from 'react-redux';

export const ProductModal = ({ product, visible, onDismiss }) => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const dispatch = useDispatch();
    const cart = new Cart(dispatch)
    if(product !== null)
        return (
                <Portal>
                    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={{backgroundColor: 'white', paddingHorizontal: 5,paddingVertical:5,flexDirection:"column",borderRadius:20}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        {(product.img !== null) ? <Image source={{uri:product.img}} style={{width:width/3,height:width/3,borderRadius:30,marginRight:10}}/> : null}
                        {(product.img !== null) ? <View style={{borderRadius:1,width:1,height:"100%",backgroundColor:"grey"}} /> : null}
                        <View style={{justifyContent:"space-evenly",height:width/3,marginLeft:10}}>
                            <Text style={{fontFamily:"Lato-Bold",fontSize:17,marginBottom:5}}>{product.name}</Text>
                            <View style={{height:1.1,width:((product.img !== null) ? "80%" : width-30),backgroundColor:"grey"}} />
                            <Text style={{color:"grey",width:width/1.70}}>{product.description}</Text>
                            <View style={{height:1.1,width:((product.img !== null) ? "80%" : width-30),backgroundColor:"grey"}} />
                            <Text style={{fontFamily:"PlusJakartaSans-SemiBold", fontSize:17, color:"darkblue"}}>₺{product.price}</Text>
                            <View>
                                <TouchableOpacity style={{alignSelf:"flex-end",width:((product.img !== null) ? "45%" : "30%")}}
                                    onPress={() => {
                                        cart.addToCart({id:product.id,quantity:1})
                                    }}
                                >
                                    <Text style={{fontFamily:"FuzzyBubbles-Bold"}}>Sepete Ekle</Text> 
                                    {/* Sepette ise bu yazıyı adet ile değiştir + - koy */}
                                </TouchableOpacity>
                            </View>
                        </View>
                        </View>
                    </Modal>
                </Portal>
        )
    else 
        return null
}