/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {showDeletedFilterModal} from '../../containers/Tweets/DeletedTweetsModal';
import {useDispatch} from 'react-redux';
import { TweetsFeedScreen } from './TweetsFeedScreen';
const Stack = createStackNavigator();

export function FeedStack() : React.ReactElement {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={TweetsFeedScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => showDeletedFilterModal(dispatch)}
              icon={{
                name: 'settings',
                size: 22,
                  color: "#0674eb"
              }}
              type="clear"
            />
          ),
        }}
      />

    </Stack.Navigator>
  );
};
