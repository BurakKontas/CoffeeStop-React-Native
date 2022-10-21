import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  View
} from "react-native";
import { Container } from "../components/Views";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper";

export function SearchScreen() {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  
  return (
    <View style={{backgroundColor:"grey",flex:1}}>
      <Searchbar 
        placeholder="Ne Arıyorsun ?"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView>
        
      </ScrollView>
    </View>
  );
}
