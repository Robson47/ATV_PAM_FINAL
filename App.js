import * as React from 'react';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import DrawerMenu from './drawerMenu/DrawerMenu';
import Feed from './screens/Feed';
import DetailBook from './screens/DetailBook';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ 
            title: "LOGIN", 
            headerTransparent: true,
            headerShown: false
          }}
        />

        <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{ 
            title: "CADASTRO",
            headerTransparent: true,
            headerShown: false
          }}
        />

        <Stack.Screen
          name="DrawerMenu"
          component={DrawerMenu}
          options={{
            title: "MENU",
            headerTransparent: true,
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
