import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Feed from '../screens/Feed';
import TelaDrawer1 from '../TelaDrawer1';
import TelaDrawer2 from '../TelaDrawer2';
import TelaDrawer3 from '../TelaDrawer3';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='FeedBook'
                component={FeedBook}
                options={{
                    title: 'Feed de Livros',
                    headerBackgroundContainerStyle: { backgroundColor: '#012a75' },
                    headerTitleStyle: { color: 'white' },
                    headerTransparent: true,
                    drawerLabelStyle: { color: 'white' },
                    drawerStyle: { backgroundColor: '#012a75' },
                    drawerItemStyle: { backgroundColor: '#0440b0' }
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
                    drawerStyle: { backgroundColor: '#012a75' },
                    drawerItemStyle: { backgroundColor: '#0440b0' }
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
                    drawerStyle: { backgroundColor: '#012a75', },
                    drawerItemStyle: { backgroundColor: '#0440b0' }
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
                    drawerStyle: { backgroundColor: '#012a75', },
                    drawerItemStyle: { backgroundColor: '#0440b0' }
                }}
            />
        </Drawer.Navigator>
    );
}