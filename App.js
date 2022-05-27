import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigator from './src/navigators/StackNavigator';
import DrawerNavigator from './src/navigators/DrawerNavigator';
import TabNavigator from './src/navigators/TabNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <DrawerNavigator /> */}
        <TabNavigator/>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
