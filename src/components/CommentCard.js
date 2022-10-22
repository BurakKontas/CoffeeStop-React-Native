import React from "react"
import { TouchableOpacity, View, Text } from 'react-native';
import { theme } from './../theme';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export const CommentCard = ({ comment }) => {
    var splittedDate = comment.date.split("T");
    const date = {
        day:splittedDate[0].substring(0,2),
        month:splittedDate[0].substring(2,4),
        year:"20"+splittedDate[0].substring(4,6),
        hour:splittedDate[1].substring(0,2),
        minute:splittedDate[1].substring(2,4),
        second:splittedDate[1].substring(4,6),
    }

    return (
    <View style={{borderWidth:1,borderRadius:10,marginHorizontal:10,padding:10, backgroundColor:"white", marginBottom:10,justifyContent:"space-between"}}>
            <View style={{flexDirection:"row",justifyContent:"space-between", marginBottom:10}}>
                <View style={{flexDirection:"row"}}>
                <View style={{marginRight:10}}>
                    <FontAwesome name="comment" size={24} color="black" />
                </View>
                {[...Array(comment.rating)].map((x,i) => {
                    return <AntDesign name="star" size={24} color="yellow" />
                })}
                {[...Array(5-comment.rating)].map((x,i) => {
                    return <AntDesign name="star" size={24} color="grey" />
                })}
                </View>
                <View>
                    <Text>{date.day}/{date.month}/{date.year}</Text>
                </View>
            </View>
            <Text>{comment.comment}</Text>
    </View>
    );
}