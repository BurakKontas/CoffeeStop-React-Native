import React from "react";

//navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//theme
import { ThemeProvider } from "styled-components/native"
import { theme } from "./src/theme";

//navigators
import { Home } from "./src/navigators/Home";
const Drawer = createDrawerNavigator();

//icons
import { Ionicons } from '@expo/vector-icons'
import { CustomDrawerContent } from "./src/navigators/CustomDrawerContent";

//fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import store from './src/redux/store'
import { Provider } from 'react-redux'

export default function App() {
  const [fontsLoaded] = useFonts({
    'FuzzyBubbles-Bold': require('./src/assets/fonts/FuzzyBubbles-Bold.ttf'),
    'FuzzyBubbles-Regular': require('./src/assets/fonts/FuzzyBubbles-Regular.ttf'),
    'PlusJakartaSans-Bold': require('./src/assets/fonts/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-SemiBold': require('./src/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'PlusJakartaSans-Regular': require('./src/assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Italic': require('./src/assets/fonts/PlusJakartaSans-Italic.ttf'),
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf'),
    'McLaren-Regular': require('./src/assets/fonts/McLaren-Regular.ttf'),
  });

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer onReady={onLayoutRootView}>
          <Drawer.Navigator initialRouteName="Main"
          screenOptions={{
            headerStyle:{
              backgroundColor:theme.background,
            },
            headerShown: false,
            headerTransparent: true,
            headerTintColor:theme.text.header,
            drawerActiveBackgroundColor:theme.background,
            drawerActiveTintColor:theme.text.main,
            drawerStyle:{
              backgroundColor:theme.drawer.background
            },
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />} >
            <Drawer.Screen name="DrawerHome" component={Home} 
            options={{
              drawerLabel:"Ana Ekran",
              drawerIcon: ({color, size}) => <Ionicons name={"home"} color={color} size={size} />
              }} 
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
