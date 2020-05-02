import React, {useMemo} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {commonStyle} from '../Styles/Styles';
const DeviceWidth = Dimensions.get('screen').width;

const Button = ({title, onPress}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          ...commonStyle.center,
          height: 50,
          width: DeviceWidth / 2.5,
          flexDirection: 'row',
          borderRadius: 8,
          backgroundColor: '#fff',
        },
        text: {fontSize: 18, color: 'black'},
      }),
    [],
  );
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
