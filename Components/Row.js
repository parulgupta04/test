import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Row = ({item}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginBottom: 25,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name={item.icon}
            size={18}
            color={'#fff'}
            style={{marginRight: 25}}
          />
          <View>
            <Text style={{color: '#fff', fontSize: 18}}>{item.heading}</Text>
            <Text style={{color: '#fff', fontSize: 12}}>{item.date}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>
            {item.transactionAmount}
          </Text>
          <Text style={{color: '#fff', fontSize: 12}}>
            {item.remainingAmount}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Row;
