import React from "react"
import { View, Text, Dimensions, useWindowDimensions, ScrollView, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { ItemWithoutText } from "../components/NewItems";
import { Container } from "../components/Views";
import { SafeAreaView } from "react-native";

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import TabNavigation from "../navigators/TabNavigation";
import { ProductModal } from "../components/ProductModal";
import { Provider } from "react-native-paper";
 
const array = [
    {
        id:1,
        name: "Leman Kültür Edirne",
        subname: "Ayşekadın",
        image:
          "https://cdn.nerde.co/LeMan%20Kultur%20Edirne%201.jpg-1531488685.jpeg",
      }
]

export const CafeDetailsScreen = ({ route, navigation }) => {
    const { cafeId }= route.params;
    const cafe = array.find(arr => arr.id === cafeId);
    const width = Dimensions.get('window').width;
    const [visible, setVisible] = React.useState(false);
    const [product, setProduct] = React.useState(null)

    const showModal = () => setVisible(true);
    const hideModal = () => {
      setVisible(false);
      setProduct(null);
    }

    return (
        <Provider>
        <ScrollView>
        <ProductModal visible={visible} onDismiss={hideModal} product={product} />
        <ItemWithoutText
        image={cafe.image}
        width={width}
        height={180}
        />
        <View style={{paddingTop:10,borderTopLeftRadius:20,borderTopRightRadius:20,marginTop:-20,backgroundColor:"#424141",width:width, paddingLeft:10}}>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{ fontSize: 23, color: "white", fontFamily:'PlusJakartaSans-Regular'}}>{cafe.name}</Text>
            <View style={{flexDirection:"row",marginRight:15,marginTop:7.5, }}>
              <View style={{marginTop:0,marginRight:4}}>
                <AntDesign name="star" size={20} color="yellow" />
              </View>
              <Text style={{ fontSize: 14, color: "yellow", fontFamily:'PlusJakartaSans-Regular'}}>4.9</Text>
              <Text style={{ fontSize: 14, color: "grey", fontFamily:'PlusJakartaSans-Regular'}}>{"   "}(+500)</Text>
            </View>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:30}}>
            <Text style={{ fontSize: 20, color: "grey", fontFamily:'PlusJakartaSans-Regular'}}>{cafe.subname}</Text>
            <Text style={{ fontSize: 14, color: "grey", fontFamily:'PlusJakartaSans-Regular', marginTop:6,marginRight:15}}>Kapanış: 02:00</Text>
          </View>
          </View>
          <TabNavigation setProduct={setProduct} showModal={showModal} />
        </ScrollView>
          </Provider>
    )
}