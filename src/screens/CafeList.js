import React from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Container } from "../components/Views";
import { ItemsHorizontal, ItemsVertical } from "../components/NewItems";
import Carousel from "react-native-reanimated-carousel";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/native";

const array = [
  {
    id:1,
    name: "Leman Kültür Edirne",
    subname: "Ayşekadın",
    image:
      "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
  },
  {
    id:1,
    name: "Leman Kültür Edirne",
    subname: "Ayşekadın",
    image:
      "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
  },
  {
    id:1,
    name: "Leman Kültür Edirne",
    subname: "Ayşekadın",
    image:
      "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
  },
  {
    id:1,
    name: "Leman Kültür Edirne",
    subname: "Ayşekadın",
    image:
      "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
  },
];

export function CafeListScreen() {
  const width = Dimensions.get("window").width;

  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ width: "100%", height: 200 }}>
        <Carousel
          loop
          width={width}
          height={210}
          autoPlay={true}
          data={array}
          mode={'parallax'}
          pagingEnabled={true}
          scrollAnimationDuration={1000}
          modeConfig={{parallaxScrollingOffset:50,parallaxScrollingScale:0.9,parallaxAdjacentItemScale:0.7}}
          //onSnapToItem={(index) => {currentIndex = index}}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  flex: 1,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>Reklam {index}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

        <View style={{ flexDirection: "row", marginVertical:20, alignSelf:"center" }}>
          <TouchableWithoutFeedback
            onPress={() => {
              toggleOverlay();
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "100%",
                borderRadius: 30,
                height: 40,
                paddingLeft: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome name="search" size={24} color="black" />
              <Text
                style={{
                  color: "black",
                  fontFamily: "McLaren-Regular",
                  marginLeft: 5,
                  fontSize: 13,
                  marginTop: 3,
                  paddingRight: 7.5,
                }}
              >
                Ne Aramak İstersiniz ?
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      <Text
        style={{
          color: "white",
          fontFamily: "McLaren-Regular",
          marginLeft: 25,
          fontSize: 18,
          marginTop: 5,
        }}
      >
        Kampanyalı Kafeler
      </Text>
      <View style={{ width: "100%", height: 200 }}>
        <Carousel
          loop
          width={width}
          height={"100%"}
          autoPlay={true}
          data={array}
          scrollAnimationDuration={1250}
          //onSnapToItem={(index) => {currentIndex = index}}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ItemsVertical
                name={item.name}
                subname={item.subname}
                image={item.image}
                id={item.id}
                width={width - 30}
                height={180}
              />
            </View>
          )}
        />
      </View>
      <Text
        style={{
          color: "white",
          fontFamily: "McLaren-Regular",
          marginLeft: 25,
          fontSize: 18,
          marginTop: 5,
        }}
      >
        Kafeler
      </Text>
      <ScrollView
        style={{
          marginHorizontal: 0,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {array.map((item, i) => {
          return <ItemsHorizontal 
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            subname={item.subname}
          />
        })}
      </ScrollView>
    </Container>
  );
}
