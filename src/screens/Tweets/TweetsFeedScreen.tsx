/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../store/actions';
import {useNavigation} from '@react-navigation/native';
import {tweetsListSelector} from "../../store/tweets";
import {DataListView} from 'rn-mobile-components';
import {TweetWidget} from "../../containers/Tweets/TweetWidget";

export function TweetsFeedScreen() : React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getList = (opHash: string) =>  dispatch(actions.tweets.getFeed(opHash));

  const data = useSelector(tweetsListSelector);

  return (
      <DataListView data={data} getList={getList} renderItem={TweetWidget} onSelect={(id) => {}}/>
  );
};
