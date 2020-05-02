import React from 'react';
import {View, Text} from 'react-native';
import {MyTabs} from './Navigation/TabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <MyTabs />
      </View>
    </NavigationContainer>
  );
};

export default App;
