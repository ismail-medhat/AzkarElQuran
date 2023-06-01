import React, {useRef, useEffect} from 'react';
import {Image, View, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LogoSvg} from '../../Assets/svg';

import styles from './styles';
import {IMAGES} from '../../constants/Images';
import { ScaleWidth } from '../../constants/foundation';

const SplashScreen = ({navigation}) => {
  const handleImageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomNavigator');
    }, 3000);
  });

  return (
    <View  style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animatable.View
        ref={handleImageRef}
        animation={'fadeInUpBig'}
        useNativeDriver={true}>
        <Image
          source={IMAGES.splashLogo}
          resizeMode="contain"
          style={{width: ScaleWidth(150), height: ScaleWidth(150)}}
        />
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
