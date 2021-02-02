/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {Button} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {AccountsListScreen} from './AccountsListScreen';
import {AccountsDetailsScreen} from './AccountsDetailsScreen';
import {AccountsNewScreen} from './AccountsNewScreen';
import {showDeletedFilterModal} from '../../containers/Tweets/DeletedTweetsModal';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

export type AccountsStackParamList = {
  AccountDetailsScreen: {id: string};
};

export function AccountsStack(): React.ReactElement {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountsList"
        component={AccountsListScreen}
        options={{
          title: 'Accounts',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AccountNew')}
              icon={{
                name: 'add',
                size: 22,
              }}
              type="clear"
            />
          ),
        }}
      />
      <Stack.Screen
        name="AccountDetails"
        component={AccountsDetailsScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => showDeletedFilterModal(dispatch)}
              icon={{
                name: 'settings',
                size: 22,
                color: '#0674eb',
              }}
              type="clear"
            />
          ),
          title: 'Loading...',
        }}
      />
      <Stack.Screen
        name="AccountNew"
        component={AccountsNewScreen}
        initialParams={{id: 'new'}}
        options={{
          title: 'Add new account',
        }}
      />
    </Stack.Navigator>
  );
}
