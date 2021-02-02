/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Tweet} from '../../core/tweet';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {toHumanDate} from '../../utils/formaters';
import Hyperlink from 'react-native-hyperlink';

interface TweetWidgetProps {
  data: Tweet;
}

export function TweetCard({data}: TweetWidgetProps): React.ReactElement {
  let backColor = '#FFF';
  if (data.wasDeleted) backColor = '#fda7a7';

  const alert = () => {
    const combinedUrls = new Set<string>();
    data.urls.forEach((e) => combinedUrls.add(e));
    data.images.forEach((e) => combinedUrls.add(e));
    const linksButtons = Array.from(combinedUrls).map((url) => ({
      text: url,
      onPress: () => Linking.openURL(url),
    }));
    Alert.alert(
      'Open link',
      'Select link would you like to open',

      [
        ...linksButtons,
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View
      key={data.id}
      style={{...styles.container, backgroundColor: backColor}}>
      {/*{!data.isReplyTo ? (*/}
      {/*  <View style={styles.isReplyContainer}>*/}
      {/*    <View*/}
      {/*      style={{*/}
      {/*        flex: 0.23,*/}
      {/*        borderColor: 'red',*/}
      {/*        borderWidth: 0,*/}
      {/*        alignItems: 'flex-end',*/}
      {/*      }}>*/}
      {/*      <EvilIcons*/}
      {/*        name={'retweet'}*/}
      {/*        size={25}*/}
      {/*        color={'rgb(136, 153, 166)'}*/}
      {/*      />*/}
      {/*    </View>*/}
      {/*    <Text style={{flex: 0.5, color: 'rgb(136, 153, 166)'}}>*/}
      {/*      {data.isRetweet} Retweeted*/}
      {/*    </Text>*/}
      {/*  </View>*/}
      {/*) : (*/}
      {/*  true*/}
      {/*)}*/}
      <View style={styles.innerContainer}>
        <View style={styles.photoContainer}>
          <View style={styles.innerPhotoContainer}>
            <Image
              source={{uri: data.author?.profile_image_url}}
              style={styles.photo}
            />
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.userDetails}>
            <Text style={styles.userName}>
              {data.author?.name}
              <Text style={styles.userHandleAndTime}>
                {' @' + data.author?.username} · {toHumanDate(data.created_at)}
              </Text>
            </Text>
          </View>

          <View style={styles.tweetTextContainer}>
            <Hyperlink onPress={alert} linkStyle={{color: '#2980b9'}}>
              <Text style={styles.tweetText}>{data.text}</Text>
            </Hyperlink>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 0.5,
    flexDirection: 'column',
    backgroundColor: '#f4f5f5',
  },
  isReplyContainer: {
    flex: 1,
    borderColor: 'green',
    flexDirection: 'row',
    borderWidth: 0,
    height: 20,
    marginTop: 5,
  },
  innerContainer: {
    flex: 1,
    borderColor: 'green',
    flexDirection: 'row',
    borderWidth: 0,
    height: 'auto',
  },
  photoContainer: {
    flex: 0.18,
    borderColor: 'yellow',
    flexDirection: 'column',
    borderWidth: 0,
  },
  innerPhotoContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 15,
  },
  info: {
    flex: 0.82,
    borderColor: 'yellow',
    flexDirection: 'column',
    borderWidth: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingLeft: 10,
  },
  userDetails: {
    borderColor: 'blue',
    borderWidth: 0,
    marginTop: 10,
    marginBottom: 5,
  },
  userName: {color: '#020202', fontWeight: 'bold'},
  userHandleAndTime: {
    color: 'rgb(107,123,137)',
    marginLeft: 5,
    fontWeight: 'normal',
  },
  tweetTextContainer: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 0,
  },
  tweetText: {
    color: '#313131',
    paddingRight: 25,
    paddingBottom: 15,
  },
  tweetActionsContainer: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 0,
    marginTop: 5,
    flexDirection: 'row',
    paddingBottom: 5,
  },
  commentButton: {
    paddingLeft: 0,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  commentButtonIcon: {
    margin: 0,
    marginLeft: -4,
    borderColor: 'red',
    borderWidth: 0,
  },
  commentsCount: {
    position: 'absolute',
    left: 27,
    color: 'rgb(136, 153, 166)',
    marginLeft: -4,
  },
  retweetButton: {
    padding: 5,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  retweetButtonIcon: {
    position: 'absolute',
    left: 27,

    marginLeft: 3,
  },
  likeButton: {
    padding: 5,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
  likeButtonIcon: {
    position: 'absolute',
    left: 27,

    marginLeft: 3,
  },
  shareButton: {
    padding: 5,
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 0,
  },
});
