import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {commonStyle} from '../Styles/Styles';

const Header = () => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          ...commonStyle.center,
          height: 90,
          flexDirection: 'row',
        },
        headingView: {
          ...commonStyle.center,
          flex: 1,
          flexDirection: 'row',
        },
        iconView: {
          paddingHorizontal: 5,
          paddingVertical: 3,
          backgroundColor: '#fff',
          borderRadius: 10,
          marginRight: 8,
        },
        text: {color: '#fff', fontSize: 18},
      }),
    [],
  );
  return (
    <View style={styles.container}>
      <Icon name="angle-left" size={35} color={'#fff'} />
      <View style={styles.headingView}>
        <View style={styles.iconView}>
          <Icon name={'dollar'} size={10} color={'black'} />
        </View>
        <Text style={styles.text}>US Dollar</Text>
      </View>
    </View>
  );
};

export default Header;
