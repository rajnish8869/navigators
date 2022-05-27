import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC';
import ScreenD from '../screens/ScreenD';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="screenA">
      <Stack.Screen name="screenA" component={ScreenA} />
      <Stack.Screen name="screenB" component={ScreenB} />
    </Stack.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="screenC">
      <Drawer.Screen name="screenC" component={ScreenC} />
      <Drawer.Screen name="screenD" component={ScreenD} />
      <Drawer.Screen name="stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

