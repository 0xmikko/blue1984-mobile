/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import actions from '../../store/actions';
import {appSelector} from '../../store/app';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import {DataListView} from 'rn-mobile-components';
import {TweetCard} from './TweetCard';
import {useTweets} from "../../store/tweets/hook";

export interface FeedWidgetProps {
  accounts: Array<string>;
  title: string;
}

export function FeedWidget({
  accounts,
  title,
}: FeedWidgetProps): React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [offset, setOffset] = useState(0);
  const limit = 50;

  const data = useTweets();
  const {showDeletedTweets} = useSelector(appSelector);

  useEffect(() => {
    const titleDeletedSuffix = showDeletedTweets ? ': [DELETED]' : '';
    navigation.setOptions({headerTitle: title + titleDeletedSuffix});
  }, [showDeletedTweets]);

  useEffect(() => {
    getList("newacc");
  }, [accounts])

  const getList = (opHash: string) =>
    dispatch(actions.tweets.getFeed(accounts, opHash, 0, limit));

  const loadMore = (opHash: string) => {
    dispatch(
      actions.tweets.getFeed(accounts, opHash, offset + limit, limit, true),
    );
    setOffset(offset + limit);
  };

  const noAccountsFound = () => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
      }}>
      <Text>No tweets in your feed yet.</Text>
    </View>
  );

  return (
    <DataListView
      data={data}
      getList={getList}
      loadMore={loadMore}
      renderItem={TweetCard}
      noItemsFound={noAccountsFound}
      onSelect={(id) => {}}
    />
  );
}
