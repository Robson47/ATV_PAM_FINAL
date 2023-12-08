import * as React from 'react';
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import Menu from './drawerMenu/DrawerMenu';

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
          name="Home"
          component={Menu}
          options={{
            title: "Inicio",
            headerTransparent: true,
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
