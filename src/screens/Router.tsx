/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React, {useEffect} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {AccountsStack} from './Accounts/AccountsStack';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../store/actions';
import {WelcomeStack} from './Welcome/WelcomeStack';
import {FeedStack} from './Feed/FeedStack';
import {appSelector} from '../store/app';

const Tab = createBottomTabNavigator();

const tabIcons: Record<string, string> = {
  Feed: 'ios-chatbubbles',
  Accounts: 'ios-people' ,
};

export const Router = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.profile.getApp());
  }, []);

  const {status} = useSelector(appSelector);

  switch (status) {
    default:
    case 'NEW':
      return <WelcomeStack />;

    case 'READY':
      return (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              const iconName = tabIcons[route.name] || '';

              // You can return any component that you like here!
              return (
                <Icon
                  name={iconName}
                  size={size}
                  color={color}
                  type={'ionicon'}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#0176f4',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Feed" component={FeedStack} />
          <Tab.Screen name="Accounts" component={AccountsStack} />
        </Tab.Navigator>
      );
  }
};
