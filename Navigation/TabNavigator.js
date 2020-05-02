import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/HomeScreen';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black',
          width: 200,
          alignSelf: 'center',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Icon
              name="building-o"
              size={20}
              color={focused ? '#fff' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => (
            <Icon name="circle-o" size={20} color={focused ? '#fff' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({focused}) => (
            <Icon name="bars" size={20} color={focused ? '#fff' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <Icon name="user-o" size={20} color={focused ? '#fff' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
