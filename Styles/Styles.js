import React, {useMemo} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const DeviceWidth = Dimensions.get('screen').width;

export const commonStyle = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    color: 'red',
    width: DeviceWidth / 2.5,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
