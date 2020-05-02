import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import useHome from './useHome';
import {commonStyle} from '../../Styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
import Row from '../../Components/Row';
import Modal from 'react-native-modal';

const HomeScreen = () => {
  const {
    styles,
    recentTransactionsArray,
    showmodal,
    onPress,
    onPressOk,
  } = useHome();

  const renderItem = ({item}, index) => <Row item={item} key={index} />;

  return (
    <View style={{backgroundColor: 'black', flex: 1, paddingHorizontal: 20}}>
      <Header />
      <View style={{backgroundColor: 'gray', height: 1}}></View>
      <View style={styles.ammontContainer}>
        <Text style={styles.text}>$31.32</Text>
        <Text style={styles.text2}>$31.32</Text>
      </View>
      <View
        style={{
          ...commonStyle.row,
        }}>
        <Button title={'Deposit'} onPress={onPress} />
        <View style={{width: 20}}></View>
        <Button title={'Withdraw'} onPress={onPress} />
      </View>
      <View
        style={{
          ...commonStyle.row,
          justifyContent: 'space-between',
          paddingVertical: 30,
        }}>
        <Text style={{color: 'gray', fontSize: 15}}>RECENT TRANSACTIONS</Text>
        <View
          style={{
            paddingHorizontal: 6,
            paddingVertical: 6,
            backgroundColor: 'gray',
            borderRadius: 12,
          }}>
          <Icon name={'sort-amount-asc'} size={10} color={'white'} />
        </View>
      </View>
      <FlatList data={recentTransactionsArray} renderItem={renderItem} />
      <Modal
        isVisible={showmodal}
        onBackButtonPress={onPressOk}
        onDismiss={onPressOk}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
          }}>
          <TextInput
            placeholder={'Enter value'}
            style={{
              paddingHorizontal: 8,
              borderRadius: 8,
              margin: 20,
              backgroundColor: '#BDC3C7',
            }}
            keyboardType={'number-pad'}
            onChangeText={value => {
              console.log('value', value);
            }}
          />
          <TouchableOpacity
            style={{margin: 20, alignSelf: 'flex-end'}}
            onPress={onPressOk}>
            <Text style={{fontSize: 20, padding: 20}}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
