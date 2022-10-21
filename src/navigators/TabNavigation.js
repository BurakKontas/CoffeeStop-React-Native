import * as React from 'react';
import { Text, View, ScrollView, Dimensions, Image } from 'react-native'; 
import { Divider } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import Carousel from "react-native-reanimated-carousel";
import { TabNavButton } from '../components/TabNavButton';
import { TouchableOpacity } from 'react-native';
import { createTabs } from '../components/ItemDetailsTabs';


function changeTab(goto,ref) {
  ref.current.scrollTo({index:goto});
}


export default function TabNavigation({ setProduct, showModal }) {
  const [activeTitle, setActiveTitle] = React.useState("Menü")
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const carouselRef = React.useRef()
  const menuRef = React.useRef()

  return (
        <View>
        <View style={{width:"100%", height:50, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
        <TabNavButton onPress={() => {changeTab(0,carouselRef);setActiveTitle("Menü")}} title={"Menü"} activeTitle={activeTitle} />
        <TabNavButton onPress={() => {changeTab(1,carouselRef);setActiveTitle("Yorumlar")}} title={"Yorumlar"} activeTitle={activeTitle} />
        <TabNavButton onPress={() => {changeTab(2,carouselRef);setActiveTitle("Hakkında")}} title={"Hakkında"} activeTitle={activeTitle} />
        </View>
        <Carousel
          ref={carouselRef}
          loop
          width={width}
          height={height-105}
          autoPlay={false}
          data={createTabs(width,height,setProduct,showModal)}
          snapEnabled={false}
          enabled={false}
          //onSnapToItem={(index) => {currentIndex = index}}
          renderItem={({ item, index }) => (
            <ScrollView 
            nestedScrollEnabled={true}
            style={{width:"100%",flex:1}} 
            ref={menuRef} 
            >
            <item.component />
            </ScrollView>
          )}
        />
        </View>
  );
}
