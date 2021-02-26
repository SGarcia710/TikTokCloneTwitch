import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Post, HomeTabs} from '../components';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle="light-content" />
      <HomeTabs />
      <Post />
    </View>
  );
};

export default HomeScreen;
