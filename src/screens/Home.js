import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Container } from "../components/Views";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "./../components/Card";
import { theme } from './../theme';
import { ItemsVertical } from "../components/NewItems";
import Carousel from 'react-native-reanimated-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { Cart } from './../Functions/Cart';


const array = [
  {
    id:1,
    name:"Leman Kültür Edirne",
    subname:"Ayşekadın",
    image:"https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
  },
]



// clearCart()

export function HomeScreen() {
  const dispatch = useDispatch()
  var cart = new Cart(dispatch);
  React.useLayoutEffect(() => {
    cart.updateState();
  })
  const width = Dimensions.get('window').width;

  var navigation = useNavigation();

  return (
      <Container>
      <View
        style={{ alignSelf: "flex-start",marginLeft:40,marginBottom: 20, marginTop:10}}
      >
        <Text style={{ fontSize: 25, color: "white", fontFamily:'McLaren-Regular' }}>Eat And Enjoy</Text>
        <Text style={{  fontSize: 25, color: "white", fontFamily:'McLaren-Regular' }}>Quality Desserts 🍰</Text>
      </View>
      <Card
        style={{
          width: 300,
          height: 300,
          backgroundColor: theme.background,
          alignSelf: "center",
        }}
        onPress={() => {
          navigation.navigate("CafeList")
        }}
      >
        <ImageBackground 
        source={{uri:"https://i.hizliresim.com/cat1xnc.png"}} //https://i.hizliresim.com/fupr7ul.png
        imageStyle={{
          borderRadius: 30,
        }}
        style={{ 
          flex: 1, 
          padding: 30,               
        }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{fontFamily:"FuzzyBubbles-Regular"}}>Sweetness</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={{ fontSize: 18, fontFamily:"FuzzyBubbles-Bold"}}>Check Menu {"-->"}</Text>
                </View>
              </View>
  
            </View>
          </View>
        </ImageBackground>
      </Card>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            marginLeft: 30,
            marginTop: 25,
            flexDirection:"row"
          }}
        >
        <Text style={{ fontFamily:"McLaren-Regular", color: "white", fontSize: 25}}>Favoriler</Text>
        </View>
        <Card
          style={{
            backgroundColor: "white",
            marginRight: 30,
            borderRadius: 30,
            width: 75,
            height: 40,
            alignContent: "center",
            justifyContent: "center",
            marginTop: 20,
            marginBottom:16
          }}
        >
          <MaterialIcons
            style={{ marginLeft: 28}}
            name="arrow-forward-ios"
            size={24}
            color="black"
          />
        </Card>
      </View>
      <View style={{width:"100%",height:200}}>
      <Carousel
          loop
          width={width}
          height={"100%"}
          autoPlay={true}
          data={array}
          scrollAnimationDuration={1000}
          //onSnapToItem={(index) => {currentIndex = index}}
          renderItem={({ item, index }) => (
              <View
                style={{
                    flex:1,  
                    justifyContent: 'center',
                    alignItems:"center"
                }}
              >
                <ItemsVertical name={item.name} subname={item.subname} image={item.image} id={item.id} width={width-50} height={180} favorite={true} />
              </View>
          )}
      />
      </View>
    </Container>
  )
}
