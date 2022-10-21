import * as React from 'react';
import { Text, View, ScrollView, Dimensions, TouchableOpacity, Button } from 'react-native'; 
import Carousel from "react-native-reanimated-carousel";
import { TabNavButton } from '../components/TabNavButton';

var data = {
  menu:{
    submenus:[
      {
        name:"submenu1",
        array : 
        [
          {
            name:"Test1",
            description:"Description",
            ingredients:"3 kilo çimento",
            price:"10.00",
            isPromo:false,
            img:null,
          },
          {
            name:"Test2",
            description:"Description",
            ingredients:"3 kilo çimento",
            price:"10.00",
            isPromo:false,
            img:null,
          }
        ],
      },
      {
        name:"submenu2",
        array : 
        [
          {
            name:"Test3",
            description:"Description",
            ingredients:"3 kilo çimento",
            price:"10.00",
            isPromo:false,
            img:null,
          },
          {
            name:"Test4",
            description:"Description",
            ingredients:"3 kilo çimento",
            price:"10.00",
            isPromo:false,
            img:null,
          }
        ],
      },
    ]
  },
  comments:[
    {
      rating:5,
      date:"201022T235211",
      comment:"Priceless"
    },
    {
      rating:3,
      date:"201022T215211",
      comment:"Meh"
    },
    {
      rating:4,
      date:"201022T235411",
      comment:"Nice"
    },
    {
      rating:1,
      date:"201022T233211",
      comment:"The Worst"
    },
  ],
  about:{
    fullAddress:"",
    opening:"",
    closing:"",
  }
}

function createTabs(data) {
  return ( 
    [
      {
        component() {
          return <View>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
            <Text>Menu</Text>
          </View>
        }
      },
      {
        component() {
          return <Text>Comments</Text>
        }
      },
      {
      component() {
        return <Text>About</Text>
        }
      }, 
    ]
  )
}

var currentIndex = 1;

function changeTab(goto,ref) {
  if(goto > currentIndex) {
    ref.current.next({count:goto-currentIndex});
  } else {
    ref.current.prev({count:currentIndex-goto});
  }
  currentIndex = goto;

}


export default function TabNavigation() {
  const [activeTitle, setActiveTitle] = React.useState("Menü")
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const carouselRef = React.useRef()
  const menuRef = React.useRef()

  return (
        <View>
        <View style={{width:"100%", height:50, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
        <TabNavButton onPress={() => {changeTab(1,carouselRef);setActiveTitle("Menü")}} title={"Menü"} activeTitle={activeTitle} />
        <TabNavButton onPress={() => {changeTab(2,carouselRef);setActiveTitle("Yorumlar")}} title={"Yorumlar"} activeTitle={activeTitle} />
        <TabNavButton onPress={() => {changeTab(3,carouselRef);setActiveTitle("Hakkında")}} title={"Hakkında"} activeTitle={activeTitle} />
        </View>
        <Carousel
          ref={carouselRef}
          loop
          width={width}
          height={height-105}
          autoPlay={false}
          data={createTabs()}
          snapEnabled={false}
          enabled={false}
          //onSnapToItem={(index) => {currentIndex = index}}
          renderItem={({ item, index }) => (
            <ScrollView 
            nestedScrollEnabled={true}
            style={{width:"100%",flex:1}} 
            ref={menuRef} 
            >
            {[...new Array(500).keys()].map((a,i) => {
              return <Text key={i}>{i}</Text>
            })}
            </ScrollView>
          )}
        />
        </View>
  );
}
