import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Video from 'react-native-video';
import Foundation from 'react-native-vector-icons/Foundation';
const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        resizeMode="cover"
        source={{
          uri:
            'https://res.cloudinary.com/sgarciacloud/video/upload/v1614154462/pexels-kira-schwarz-6868682_x2krnp.mp4',
        }}
        repeat
      />
      <View style={styles.sideContainer}>
        <View>
          <Image
            source={{
              uri:
                'https://res.cloudinary.com/sgarciacloud/image/upload/v1614154654/pexels-masha-raymers-4935657_zaxdhj.jpg',
            }}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.username}>@sgarcia</Text>
        <Text style={styles.description}>Hello there</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Foundation name="music" size={15} color="#fff" />
          <Text style={styles.songName}>Phoenix - 1901</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  sideContainer: {
    alignSelf: 'flex-end',
  },
  bottomContainer: {
    width: '100%',
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  username: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    fontWeight: '300',
    color: '#fff',
    marginBottom: 7,
  },
  songName: {
    fontSize: 15,
    fontWeight: '300',
    color: '#fff',
    marginLeft: 9,
  },
});

export default Post;
