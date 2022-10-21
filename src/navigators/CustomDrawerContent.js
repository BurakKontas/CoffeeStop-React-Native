import {  DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, Image, Button, Dimensions, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { Divider } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const loggedIn = false;


export const CustomDrawerContent = (props) => {
    return (
    <DrawerContentScrollView {...props}>
    <View style={{flex:1,flexDirection:"column",justifyContent:"space-between",height:Dimensions.get("window").height-110,marginTop:90}}>
    <View>
        <View style={{ height:150,justifyContent:"center"}}>
            {
            (loggedIn) ? 
            null 
            : 
                <TouchableOpacity 
                style={{ justifyContent:"center",alignItems:"center" }}
                onPress={() => {props.navigation.navigate("Profile"),{
                    userID:"12345",//buraya userid gelicek unique react-native-device-info
                }}}
                >
                    <Image 
                    source={{ uri:'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'}}
                    style={{width:100, height:100, borderRadius:50}}
                    />
                    <Text style={{ fontSize:17,marginLeft:-4, marginTop:10 }}>Misafir</Text>
                </TouchableOpacity>
            }
            <Divider style={{marginVertical:10}} width={2} />

            <TouchableOpacity 
            style={{flexDirection:"row",marginLeft:10}}
            onPress={() => {props.navigation.navigate("DrawerHome")}}
            >
                <Ionicons name="home" size={24} color="black" />
                <Text style={{ fontSize:17, marginLeft:10 }}>Anasayfa</Text>
            </TouchableOpacity>

            <Divider style={{marginVertical:10}} width={2} />

            <TouchableOpacity 
            style={{flexDirection:"row",marginLeft:10}}
            onPress={() => {props.navigation.navigate("SearchScreen")}}
            >
                <Ionicons name="search-sharp" size={24} color="black" />
                <Text style={{ fontSize:17, marginLeft:10 }}>Arama</Text>
            </TouchableOpacity>

            <Divider style={{marginVertical:10}} width={2} />

            <TouchableOpacity 
            style={{flexDirection:"row",marginLeft:10}}
            onPress={() => {props.navigation.navigate("Favorites")}}
            >
                <Ionicons name="heart" size={24} color="black" />
                <Text style={{ fontSize:17, marginLeft:10 }}>Favoriler</Text>
            </TouchableOpacity>

            <Divider style={{marginVertical:10}} width={2} />

            <TouchableOpacity 
            style={{flexDirection:"row",marginLeft:10}}
            onPress={() => {props.navigation.navigate("History")}}
            >
                <FontAwesome5 name="history" size={24} color="black" />
                <Text style={{ fontSize:17, marginLeft:10 }}>Geçmiş</Text>
            </TouchableOpacity>

            <Divider style={{marginVertical:10}} width={2} />
        </View>
    </View>
    {/* Dükkan butotnları buranın üstüne eklenecek */}
    <View></View>
    <View>
        <Divider style={{marginVertical:10}} width={2} />

        <TouchableOpacity 
        style={{flexDirection:"row",marginLeft:20}}
        onPress={() => {props.navigation.navigate("Info")}}
        >
            {/* Light ise theme şu olsun vs */}
            <FontAwesome5 name="info" size={24} color="black" /> 
            <Text style={{ fontSize:17, marginLeft:20 }}>Uygulama Bilgisi</Text>
        </TouchableOpacity>

        <Divider style={{marginVertical:10}} width={2} />

        <TouchableOpacity 
        style={{flexDirection:"row",marginLeft:10}}
        onPress={() => {console.log("Theme")}}
        >
            {/* Light ise theme şu olsun vs */}
            <FontAwesome5 name="cloud-moon" size={24} color="black" /> 
            <Text style={{ fontSize:17, marginLeft:10 }}>Tema Değiştir</Text>
        </TouchableOpacity>

        <Divider style={{marginVertical:10}} width={2} />

        <TouchableOpacity style={{flexDirection:"row",marginLeft:10}}
        onPress={() => {props.navigation.navigate("DrawerHome")}}
        >
            <Feather name="log-in" size={24} color="black" />
            <Text style={{ fontSize:17, marginLeft:10 }}>Giriş Yap</Text>
        </TouchableOpacity>

        <Divider style={{marginVertical:10}} width={2} />
    </View>
    
    </View>
    </DrawerContentScrollView>
    )
}
