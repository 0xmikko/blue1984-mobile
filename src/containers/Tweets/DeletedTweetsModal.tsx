/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Alert} from 'react-native';
import {ThunkDispatch} from 'redux-thunk';
import actions from '../../store/actions';

export const showDeletedFilterModal = (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  Alert.alert(
    'Tweets filter',
    '',

    [
      {
        text: 'Show all messages',
        onPress: () => dispatch(actions.profile.setMessagesFilter(false)),
      },
      {
        text: 'Show deleted messages only',
        onPress: () => dispatch(actions.profile.setMessagesFilter(true)),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};
