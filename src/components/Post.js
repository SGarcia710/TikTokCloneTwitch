import React, {useRef, useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TextTicker from 'react-native-text-ticker';

const Post = ({
  liked,
  commentsCount,
  description,
  likesCount,
  song,
  user,
  videoUrl,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [paused, setPaused] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);
  const [likes, setLikes] = useState(likesCount);

  const animateDisc = useCallback(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  useEffect(() => {
    animateDisc();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          setPaused(!paused);
        }}>
        <Video
          paused={paused}
          style={styles.video}
          resizeMode="cover"
          source={{
            uri: videoUrl,
          }}
          repeat
        />
      </TouchableWithoutFeedback>

      <View style={styles.sideContainer}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatarUrl,
            }}
          />
          <View style={styles.plusIcon}>
            <Entypo name="plus" size={15} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (isLiked) {
              setLikes(likes - 1);
            } else {
              setLikes(likes + 1);
            }
            setIsLiked(!isLiked);
          }}
          style={styles.actionContainer}>
          <MaterialCommunityIcons
            name="heart"
            size={35}
            color={isLiked === true ? '#EA4359' : 'white'}
          />
          <Text style={styles.actionLabel}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionContainer}>
          <FontAwesome name="commenting" size={35} color="white" />
          <Text style={styles.actionLabel}>{commentsCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionContainer}>
          <Fontisto name="share-a" size={35} color="white" />
          <Text style={styles.actionLabel}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.username}>@{user.username}</Text>
          <Text style={styles.description}>{description}</Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 165}}>
            <Foundation
              style={{marginRight: 9}}
              name="music"
              size={15}
              color="#fff"
            />
            <TextTicker
              style={styles.songName}
              duration={3000}
              loop
              bounce={false}
              easing={Easing.linear}
              repeatSpacer={15}
              useNativeDriver={true}>
              {song.name}
            </TextTicker>
          </View>
        </View>
        <Animated.View
          style={[
            styles.songCoverContainer,
            {
              transform: [{rotate: spin}],
            },
          ]}>
          <Image source={require('../assets/images/disc.png')} />
          <Image
            style={styles.songConverImage}
            source={{
              uri: song.coverUrl,
            }}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
    borderRadius: 21 / 2,
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
  songCoverContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  songConverImage: {
    width: 27,
    height: 27,
    borderRadius: 27 / 2,
    position: 'absolute',
  },
});

export default Post;
