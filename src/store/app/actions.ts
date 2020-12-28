/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {App, AppStatus} from '../../core/app';
import {AppActions} from './index';
import AsyncStorage from "@react-native-community/async-storage";

// Get user app from server
export const getApp = (): ThunkAction<
  void,
  RootState,
  unknown,
  AppActions
> => async (dispatch) => {
  const appStr = await AsyncStorage.getItem('app');
  if (appStr === null) {
    await dispatch({
      type: 'APP_SUCCESS',
      payload: {status: 'NEW', showDeletedTweets: false},
    });
    return;
  }
  await dispatch({
    type: 'APP_SUCCESS',
    payload: JSON.parse(appStr),
  });
};

export const updateApp = (
  app: App,
): ThunkAction<void, RootState, unknown, AppActions> => async (
  dispatch,
) => {
  await AsyncStorage.setItem('app', JSON.stringify(app));
  dispatch({
    type: 'APP_SUCCESS',
    payload: app,
  });
};

export const updateStatus = (
  status: AppStatus,
): ThunkAction<void, RootState, unknown, AppActions> => async (
  dispatch,
  getState,
) => {
  const app = getState().app;
  app.status = status;
  dispatch(updateApp(app));
};

export const setMessagesFilter = (
  show: boolean,
): ThunkAction<void, RootState, unknown, AppActions> => async (
  dispatch,
  getState,
) => {
  const app = getState().app;
  app.showDeletedTweets = show;
  dispatch(updateApp(app));
};
