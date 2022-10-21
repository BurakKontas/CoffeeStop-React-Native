import React from "react";
import { View, Image, ImageBackground, Text, TouchableOpacity, Dimensions } from "react-native";
import { Card } from "./Card";
import { AntDesign } from '@expo/vector-icons'; 

export const ItemsVertical = ({ image, name, subname, onPress, favorite=false, width = 300, height=180, }) => {
    const [isFav, setIsFav] = React.useState(favorite);

    return (
        <Card style={{
            width:width,
            height:height,
            borderRadius:20,
            backgroundColor:"white",
            paddingTop:0,
            marginHorizontal:12,
        }}
        onPress={onPress}
        >
            <ImageBackground
              source={{uri:image}}
              style={{
                width:"100%",
                height:"100%",
                resizeMode:"cover",
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                alignItems:"center",
              }}
              imageStyle={{
                marginBottom:40,
                borderRadius:20,
              }}
            >
            <View style={{justifyContent:"flex-end",width:"100%", flexDirection:"row", marginRight:30,marginTop:10, flex:0.2}}>
            <TouchableOpacity style={{paddingHorizontal:10,paddingTop:5}}  onPress={() => {setIsFav(!isFav)}} >
              <AntDesign name="heart" size={24} color={isFav ? "red" : "white"}/>
            </TouchableOpacity>
            </View>
            <View style={{flex:0.8, justifyContent:"flex-end", width:"100%"}}>
              <View style={{backgroundColor:"white",width:"100%",justifyContent:"center",alignItems:"center",borderBottomLeftRadius:20,borderBottomRightRadius:20, alignSelf:"flex-end"}}>
                  <Text style={{fontFamily:"Lato-Bold",marginTop:5}}>{name}</Text>
                  <Text style={{fontFamily:"Lato-Regular", fontSize:12, color:"gray", marginBottom:5}}>{subname}</Text>
              </View>
            </View>
            </ImageBackground>
        </Card>
    )
}

export const ItemsHorizontal = ({ image, name, subname, onPress, favorite=false, width = null, height=220, }) => {
  const [isFav, setIsFav] = React.useState(favorite);
  const widthDimensions = Dimensions.get('window').width;

  return (
      <Card style={{
          width:(width === null) ? widthDimensions-50 : width,
          height:height,
          borderRadius:20,
          backgroundColor:"white",
          paddingTop:0,
          alignSelf:"center",
          marginVertical:20
      }}
      onPress={onPress}
      >
          <ImageBackground
            source={{uri:image}}
            style={{
              width:"100%",
              height:"100%",
              resizeMode:"cover",
              borderTopLeftRadius:20,
              borderTopRightRadius:20,
              alignItems:"center",
            }}
            imageStyle={{
              marginBottom:40,
              borderRadius:20,
            }}
          >
          <View style={{justifyContent:"flex-end",width:"100%", flexDirection:"row", marginRight:30,marginTop:10, flex:0.2}}>
          <TouchableOpacity style={{paddingHorizontal:10,paddingTop:5}}  onPress={() => {setIsFav(!isFav)}} >
            <AntDesign name="heart" size={24} color={isFav ? "red" : "white"}/>
          </TouchableOpacity>
          </View>
          <View style={{flex:0.8, justifyContent:"flex-end", width:"100%"}}>
            <View style={{backgroundColor:"white",width:"100%",justifyContent:"center",alignItems:"center",borderBottomLeftRadius:20,borderBottomRightRadius:20, alignSelf:"flex-end"}}>
                <Text style={{fontFamily:"Lato-Bold",marginTop:5}}>{name}</Text>
                <Text style={{fontFamily:"Lato-Regular", fontSize:12, color:"gray", marginBottom:5}}>{subname}</Text>
            </View>
          </View>
          </ImageBackground>
      </Card>
  )
}

export const ItemWithoutText = ({ image, favorite=false, width = 300, height=180, onPress }) => {
  const [isFav, setIsFav] = React.useState(favorite);

  return (
      <Card style={{
          width:width,
          height:height,
          backgroundColor:"white",
          paddingTop:0,
      }}
      onPress={onPress}
      >
          <ImageBackground
            source={{uri:image}}
            style={{
              width:"100%",
              height:"100%",
              resizeMode:"cover",
              alignItems:"center",
            }}
          >
          <View style={{justifyContent:"flex-end",width:"100%", flexDirection:"row", marginRight:30,marginTop:10, flex:0.2}}>
          <TouchableOpacity style={{paddingHorizontal:10,paddingTop:5}}  onPress={() => {setIsFav(!isFav)}} >
            <AntDesign name="heart" size={24} color={isFav ? "red" : "white"}/>
          </TouchableOpacity>
          </View>
          </ImageBackground>
      </Card>
  )
}