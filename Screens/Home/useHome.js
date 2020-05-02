import React, {useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {commonStyle} from '../../Styles/Styles';

const useHome = () => {
  const [showmodal, setShowmodal] = useState(false);
  const styles = useMemo(
    () =>
      StyleSheet.create({
        ammontContainer: {
          ...commonStyle.center,
          paddingVertical: 35,
        },
        text: {
          color: '#fff',
          fontSize: 25,
        },
        text2: {
          color: '#fff',
          fontSize: 18,
        },
      }),
    [],
  );

  const recentTransactionsArray = [
    {
      icon: 'long-arrow-up',
      heading: 'Withdrew',
      date: 'Mar 1, 2020',
      transactionAmount: '-$900.00',
      remainingAmount: '$31.32',
    },
    {
      icon: 'percent',
      heading: 'Trade Fee',
      date: 'BCH-USD - Mar1,2020',
      transactionAmount: '$0.00',
      remainingAmount: '$931.32',
    },
    {
      icon: 'arrows-v',
      heading: 'Buy',
      date: 'BCH-USD - Mar1,2020',
      transactionAmount: '$0.00',
      remainingAmount: '$931.32',
    },
    {
      icon: 'percent',
      heading: 'Trade Fee',
      date: 'BCH-USD - Mar1,2020',
      transactionAmount: '$4.17',
      remainingAmount: '$931.32',
    },
    {
      icon: 'arrows-v',
      heading: 'Buy',
      date: 'BCH-USD - Mar1,2020',
      transactionAmount: '$835.11',
      remainingAmount: '$931.32',
    },
  ];
  const onPress = () => {
    setShowmodal(true);
  };
  const onPressOk = () => {
    setShowmodal(false);
  };

  return {styles, recentTransactionsArray, showmodal, onPress, onPressOk};
};

export default useHome;
