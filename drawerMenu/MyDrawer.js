import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Feed from '../screens/Feed';
import Category from '../screens/Category';
import Menu from '../screens/Menu';


const Drawer = createDrawerNavigator();

const bgDrawer = '#1c1b1c';
const bgItemDrawer = '#8c00ff'; 

export default function MyDrawer() {
    return (
        <Drawer.Navigator>            
            <Drawer.Screen
                name='Menu'
                component={Menu}
                options={{
                    title: 'Home',
                    headerTransparent: true,
                    headerShown: true,
                    headerBackgroundContainerStyle: { backgroundColor: '#780bb3' },
                    headerTitleStyle: { color: 'white' },
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: bgDrawer, },
                    drawerItemStyle: { backgroundColor: bgItemDrawer }
                }}
            />

            <Drawer.Screen
                name='Feed'
                component={Feed}
                options={{
                    title: 'Feed',
                    headerShown: false,
                    headerTransparent: true,
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: bgDrawer },
                    drawerItemStyle: { backgroundColor: bgItemDrawer },
                }}
            />

            <Drawer.Screen
                name='Categorias'
                component={Category}
                options={{
                    title: 'Categorias',
                    headerTransparent: true,
                    headerShown: false,
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: bgDrawer },
                    drawerItemStyle: { backgroundColor: bgItemDrawer }
                }}
            />
        </Drawer.Navigator>
    );
}