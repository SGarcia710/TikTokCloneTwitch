import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Post} from '../components';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <StatusBar barStyle="light-content" />
      <Post />
    </View>
  );
};

export default HomeScreen;
