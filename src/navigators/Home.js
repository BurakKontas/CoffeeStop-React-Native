import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/Home';
import { CafeListScreen } from "../screens/CafeList";
import { theme } from './../theme';
import { HeaderLeftComponent } from '../components/HeaderLeft';
import { HeaderRightComponent } from '../components/HeaderRight';
import { CafeDetailsScreen } from '../screens/CafeDetails';

const Stack = createStackNavigator();

export function Home() {
  return(
    <Stack.Navigator
      screenOptions={{ 
          gestureEnabled:false, //ios da draweri açmaya çalışırken önceki ekrana gitmeyi engelliyor
          headerMode: "float",
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitle:"",
          headerLeft:(props) => <HeaderLeftComponent {...props} />,
          headerRight:(props) => <HeaderRightComponent {...props} />,
          headerTitleStyle:{
            color:"white"
          },
          headerBackgroundContainerStyle:{
            color:theme.background,
            borderColor:theme.background,
          },
        }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CafeList" component={CafeListScreen} />
      <Stack.Screen name="CafeDetails" component={CafeDetailsScreen} />
    </Stack.Navigator>
  );
}