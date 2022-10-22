import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native'; 
import { Divider } from 'react-native-elements';
import { Modal, Searchbar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { CommentCard } from './CommentCard';

const data = {
    menu:{
      submenus:[
        {
          name:"submenu1",
          array : 
          [
            {
              id:1,
              name:"Test1",
              description:"Description Description Description Description Description Description",
              price:"10.00",
              isPromo:false,
              img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
            },
            {
              id:2,
              name:"Test2",
              description:"Description",
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
              id:3,
              name:"Test3",
              description:"Description",
              price:"10.00",
              isPromo:false,
              img:null,
            },
            {
              id:4,
              name:"Test4",
              description:"Description",
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
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:4,
        date:"201022T235411",
        comment:"Nice"
      },
      {
        rating:1,
        date:"201022T233211",
        comment:"The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst The Worst "
      },
    ],
    about:{
      fullAddress:"1. Murat, Zübeyde Hanım Cd. 1. Sokak D:no3, 22030 Edirne Merkez/Edirne",
      opening:"08:00",
      closing:"01:00",
    }
  }

export function createTabs(width,height,setProduct,showModal) {
    return ( 
      [
        {
          component() { //menu
            return <View>
            <View style={{marginBottom:15,marginHorizontal:5}}>
            {/* <Searchbar placeholder='Ne Arıyorsun ?'  /> */}
            </View>
            {data.menu.submenus.map((menu,index) => {
              return (
                <View key={menu.name}>
                <View style={{width:"100%"}}>
                  <Text style={{marginLeft:10, marginVertical:5, color:"grey"}}>{menu.name}</Text>
                  <Divider color='black' style={{borderWidth:0.5}}/>
                </View>
                  <ScrollView>
                    {menu.array.map((product,index) => {
                      return (
                        <TouchableOpacity key={product.id} onPress={(() => {setProduct(product);showModal()})}>
                        <View style={{flexDirection:"row",width:"100%", backgroundColor:"grey"}}>
                          <View style={{ backgroundColor:"#FFF",height:"100%",width:"100%",flexDirection:"column",padding:15}}>
                            <Text style={{fontFamily:"Lato-Bold",fontSize:17,marginBottom:5}}>{product.name}</Text>
                            <Text style={{color:"grey"}}>{product.description}</Text>
                            <Text style={{fontFamily:"PlusJakartaSans-SemiBold", fontSize:17, color:"darkblue"}}>₺{product.price}</Text>
                          </View>
                        </View>
                      <Divider color='black' style={{borderWidth:0.5}}/>
                      </TouchableOpacity>
                      )
                    })}
                  </ScrollView>
                </View>
              )
            })}
            </View>
          }
        },
        {
          component() { //comments
            return <View style={{backgroundColor:"lightgrey",flex:1, minHeight:height-105}}>
              <ScrollView>
                <Text style={{marginVertical:10,marginLeft:10,color:"grey"}}>Yorumlar</Text>
                {data.comments.map((comment, index) => {
                  return <CommentCard comment={comment} />
                })}
              </ScrollView>
            </View>
          }
        },
        {
        component() { //about
          return <View>
            <Text style={{marginVertical:10,marginLeft:10,color:"grey"}}>Açık Adres</Text>
            <View style={{borderWidth:1,borderRadius:10,marginHorizontal:10,padding:10, backgroundColor:"white", justifyContent:"space-between"}}>
              <Text>{data.about.fullAddress}</Text>
            </View>
              <Text style={{marginVertical:10,marginLeft:10,color:"grey"}}>Açılış/Kapanış</Text>
              <View style={{borderWidth:1,borderRadius:10,marginHorizontal:10,padding:10, backgroundColor:"white", marginBottom:10,justifyContent:"space-between"}}>
              <Text>{data.about.opening}/{data.about.closing}</Text>
            </View>
          </View>
          }
        }, 
      ]
    )
  }