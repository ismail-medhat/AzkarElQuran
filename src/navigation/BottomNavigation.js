import React, {Children} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Image, Text} from 'react-native';
import { QuranIndexScreen,AzkarIndexScreen,PraisesIndexScreen,NotificationIndexScreen,PrayerIndexScreen } from '../screens';

import {Colors, Fonts, ScaleHeight, ScaleWidth} from '../constants/foundation';
import {IMAGES} from '../constants/Images';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="PrayerIndex"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyles,
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      })}>
      <Tab.Screen
        name="QuranIndex"
        component={QuranIndexScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? Fonts.cairo_bold : Fonts.cairo_medium,
                fontSize: ScaleHeight(10),
              }}>
              {'المصحف'}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.quran}
              resizeMode="contain"
              style={{width: ScaleWidth(27), height: ScaleWidth(27)}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AzkarIndex"
        component={AzkarIndexScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? Fonts.cairo_bold : Fonts.cairo_medium,
                fontSize: ScaleHeight(10),
              }}>
              {'أذكارى'}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.openHands}
              resizeMode="contain"
              style={{width: ScaleWidth(27), height: ScaleWidth(27)}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PrayerIndex"
        component={PrayerIndexScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
                borderRadius: ScaleWidth(40),
                width: ScaleWidth(70),
                height: ScaleWidth(70),
                position: 'relative',
                top: ScaleHeight(-10),
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.black,
                  borderRadius: ScaleWidth(30),
                  width: ScaleWidth(50),
                  height: ScaleWidth(50),
                }}>
                <Image
                  source={IMAGES.mosque}
                  resizeMode="contain"
                  style={{width: ScaleWidth(40), height: ScaleWidth(40)}}
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PraisesIndex"
        component={PraisesIndexScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? Fonts.cairo_bold : Fonts.cairo_medium,
                fontSize: ScaleHeight(10),
              }}>
              {'تسابيح'}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.beads}
              resizeMode="contain"
              style={{width: ScaleWidth(30), height: ScaleWidth(30)}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="NotificationIndex"
        component={NotificationIndexScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: focused ? Fonts.cairo_bold : Fonts.cairo_medium,
                fontSize: ScaleHeight(10),
              }}>
              {'الاشعارات'}
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.notification}
              resizeMode="contain"
              style={{width: ScaleWidth(25), height: ScaleWidth(25)}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  imgStyle: {width: ScaleWidth(5), height: ScaleWidth(5)},
  tabBarStyles: {
    backgroundColor: Colors.white,
    height: ScaleHeight('11%'),
    paddingTop: ScaleHeight(3),
    width: ScaleWidth('100%'),
    borderTopColor: Colors.white,
    borderTopWidth: ScaleWidth(1),
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.43,
    shadowRadius: 16.51,
    elevation: 15,
  },
});
