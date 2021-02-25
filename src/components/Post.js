import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://res.cloudinary.com/sgarciacloud/image/upload/v1614154654/pexels-masha-raymers-4935657_zaxdhj.jpg',
            }}
          />
          <View style={styles.plusIcon}>
            <Entypo name="plus" size={15} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionContainer}>
          <MaterialCommunityIcons name="heart" size={35} color="white" />
          <Text style={styles.actionLabel}>328.7k</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionContainer}>
          <FontAwesome name="commenting" size={35} color="white" />
          <Text style={styles.actionLabel}>342</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionContainer}>
          <Fontisto name="share-a" size={35} color="white" />
          <Text style={styles.actionLabel}>Share</Text>
        </TouchableOpacity>
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
    paddingRight: 7,
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 22.5,
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 47 / 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  plusIcon: {
    width: 21,
    height: 21,
    borderRadius: 21,
    backgroundColor: '#EA4359',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -(21 / 2),
  },
  actionContainer: {
    alignItems: 'center',
    marginBottom: 22.5,
  },
  actionLabel: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5.27,
  },
});

export default Post;
