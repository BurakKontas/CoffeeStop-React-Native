import React from 'react';
import { Dimensions } from 'react-native';

// {"fontScale": 1, "height": 753.4545454545455, "scale": 2.75, "width": 392.72727272727275}

const dimensions = {
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height
}

export const width = (width) => {
    return dimensions.width*width/393
}

export const height = (height) => {
    return dimensions.height*height/753
}
