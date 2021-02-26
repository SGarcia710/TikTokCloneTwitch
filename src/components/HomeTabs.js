import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeTabs = () => {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState(1);
  const tab1value = useRef(new Animated.Value(1)).current;
  const tab2value = useRef(new Animated.Value(1.15)).current;

  const handleOnPressIn = useCallback((index) => {
    setSelectedTab(index);
    Animated.spring(index === 0 ? tab1value : tab2value, {
      toValue: 1.25,
      delay: 0,
      useNativeDriver: true,
    }).start();
    Animated.spring(index === 0 ? tab2value : tab1value, {
      toValue: 0.8,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleOnPressOut = useCallback((index) => {
    setSelectedTab(index);
    Animated.spring(index === 0 ? tab1value : tab2value, {
      toValue: 1.15,
      delay: 0,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
    Animated.spring(index === 0 ? tab2value : tab1value, {
      toValue: 1,
      delay: 0,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  }, []);
  return (
    <View
      style={[
        styles.container,
        {
          top: 13 + insets.top,
        },
      ]}>
      <TouchableWithoutFeedback
        onPressIn={() => handleOnPressIn(0)}
        onPressOut={() => handleOnPressOut(0)}>
        <Animated.Text
          style={[
            styles.tabText,
            {
              fontWeight: selectedTab === 0 ? '800' : '600',
              transform: [
                {
                  scale: tab1value,
                },
              ],
            },
          ]}>
          Following
        </Animated.Text>
      </TouchableWithoutFeedback>
      <Text
        style={[
          styles.tabText,
          {marginHorizontal: 12.5, opacity: 0.4, fontWeight: 'bold'},
        ]}>
        |
      </Text>
      <TouchableWithoutFeedback
        onPressIn={() => handleOnPressIn(1)}
        onPressOut={() => handleOnPressOut(1)}>
        <Animated.Text
          style={[
            styles.tabText,
            {
              fontWeight: selectedTab === 1 ? '800' : '600',
              transform: [
                {
                  scale: tab2value,
                },
              ],
            },
          ]}>
          For You
        </Animated.Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 3,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeTabs;
