import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {ScaleWidth} from '../../constants/foundation';
import styles from './styles';

const Header = ({title, navigation, rightIcon, leftIcon, style, textStyle}) => {
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {rightIcon ? (
        <Feather name="chevron-right" size={ScaleWidth(25)} />
      ) : (
        <View style={{width: ScaleWidth(25)}} />
      )}
      <Text style={[styles.title, textStyle]}>{title}</Text>
      {leftIcon ? (
        <Feather name="chevron-right" size={ScaleWidth(25)} />
      ) : (
        <View style={{width: ScaleWidth(25)}} />
      )}
    </TouchableOpacity>
  );
};

export default Header;
