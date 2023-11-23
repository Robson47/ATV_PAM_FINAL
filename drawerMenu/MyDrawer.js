import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Feed from '../screens/Feed';
import TelaDrawer1 from '../TelaDrawer1';
import TelaDrawer2 from '../TelaDrawer2';
import TelaDrawer3 from '../TelaDrawer3';

const Drawer = createDrawerNavigator();

const bgDrawer = '#1c1b1c';
const bgItemDrawer = '#8c00ff'; 

export default function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Feed'
                component={Feed}
                options={{
                    title: 'Feed',
                    headerBackgroundContainerStyle: { backgroundColor: '#780bb3' },
                    headerTitleStyle: { color: 'white' },
                    headerTransparent: true,
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: bgDrawer },
                    drawerItemStyle: { backgroundColor: bgItemDrawer },
                }}
            />

            <Drawer.Screen
                name='Tela1'
                component={TelaDrawer1}
                options={{
                    title: 'Tela 1',
                    headerTransparent: true,
                    headerShown: false,
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: bgDrawer },
                    drawerItemStyle: { backgroundColor: bgItemDrawer }
                }}
            />

            <Drawer.Screen
                name='Tela2'
                component={TelaDrawer2}
                options={{
                    title: 'Tela 2',
                    headerTransparent: true,
                    headerShown: false,
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: bgDrawer, },
                    drawerItemStyle: { backgroundColor: bgItemDrawer }
                }}
            />

            <Drawer.Screen
                name='Tela3'
                component={TelaDrawer3}
                options={{
                    title: 'Tela 3',
                    headerTransparent: true,
                    headerShown: false,
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: bgDrawer, },
                    drawerItemStyle: { backgroundColor: bgItemDrawer }
                }}
            />
        </Drawer.Navigator>
    );
}