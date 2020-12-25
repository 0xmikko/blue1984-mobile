/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './SplashScreen';

const Stack = createStackNavigator();

export function WelcomeStack(): React.ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
