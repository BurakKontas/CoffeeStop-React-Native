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
    onPress() {
      console.log("Pressed");
    },
  },
  {
    id:1,
    name: "Leman Kültür Edirne",
    subname: "Ayşekadın",
    image:
      "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
    onPress() {
      console.log("Pressed");
    },
  },
  {
    id:1,
    name: "Leman Kültür Edirne",
    subname: "Ayşekadın",
    image:
      "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
    onPress() {
      console.log("Pressed");
    },
  },
  {
    id:1,
    name: "Leman Kültür Edirne",
    subname: "Ayşekadın",
    image:
      "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
    onPress() {
      console.log("Pressed");
    },
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
          height={220}
          autoPlay={true}
          data={array}
          mode={'parallax'}
          scrollAnimationDuration={1000}
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
      <View
        style={{
          alignSelf: "center",
          width: "95%",
          height: 100,
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("Tap");
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "50%",
                borderBottomLeftRadius: 30,
                borderTopLeftRadius: 30,
                height: 40,
                paddingLeft: 20,
                flexDirection: "row",
                justifyContent: "center",
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
                Ne Aramak İstersiniz
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: "white",
              height: 40,
              flexDirection: "row",
              flex: 1,
              borderBottomRightRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <Text
              style={{
                color: "grey",
                fontSize: 25,
                paddingLeft: 20,
                marginTop: 3,
              }}
            >
              |
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ marginHorizontal: 10 }}>Filtrele & Sırala</Text>
              <View>
                <Feather name="filter" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              height: 55,
              width: 65,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 55,
              width: 65,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 55,
              width: 65,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 55,
              width: 65,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          ></TouchableOpacity>
        </View>
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
                onPress={() => {
                  navigation.navigate("CafeDetails",{
                    cafeId:item.id,
                  })
                }}
                width={width - 30}
                height={180}
              ></ItemsVertical>
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
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
        <ItemsHorizontal
          name={"Leman Kültür Edirne"}
          subname={"Ayşekadın"}
          image={
            "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg"
          }
        ></ItemsHorizontal>
      </ScrollView>
    </Container>
  );
}
