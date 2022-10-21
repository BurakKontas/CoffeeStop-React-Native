import {  DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, Image, Button, Dimensions } from "react-native";

const loggedIn = false;


export const CustomDrawerContent = (props) => {
    return (
    <DrawerContentScrollView {...props}>
        <View style={{flexDirection:"column", minHeight:Dimensions.get("window").height-75}}>
            <View style={{ height:150,justifyContent:"center"}}>
            {
            (loggedIn) ? 
            null 
            : 
                <View style={{ justifyContent:"center",alignItems:"center" }}>
                    <Image 
                    source={{ uri:'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'}}
                    style={{width:100, height:100, borderRadius:50}}
                    />
                    <Text style={{ fontSize:17,marginLeft:-4, marginTop:10 }}>Misafir</Text>
                </View>
            }
            </View>
        {/* <DrawerItemList {...props} /> */}
        </View>
        <View style={{alignSelf:"flex-start",marginLeft:10}}>
                <Button title="Çıkış Yap" onPress={() => {props.navigation.navigate("Home")}} />
        </View>
    </DrawerContentScrollView>
    )
}