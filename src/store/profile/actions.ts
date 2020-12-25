/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {Profile, ProfileStatus} from '../../core/profile';
import {ProfileActions} from './index';
import AsyncStorage from "@react-native-community/async-storage";

// Get user profile from server
export const getProfile = (): ThunkAction<
  void,
  RootState,
  unknown,
  ProfileActions
> => async (dispatch) => {
  const profileStr = await AsyncStorage.getItem('profile');
  if (profileStr === null) {
    dispatch({
      type: 'PROFILE_SUCCESS',
      payload: {status: 'NEW', showDeletedTweets: true},
    });
    return;
  }
  dispatch({
    type: 'PROFILE_SUCCESS',
    payload: JSON.parse(profileStr),
  });
};

export const updateProfile = (
  profile: Profile,
): ThunkAction<void, RootState, unknown, ProfileActions> => async (
  dispatch,
) => {
  await AsyncStorage.setItem('profile', JSON.stringify(profile));
  dispatch({
    type: 'PROFILE_SUCCESS',
    payload: profile,
  });
};

export const updateStatus = (
  status: ProfileStatus,
): ThunkAction<void, RootState, unknown, ProfileActions> => async (
  dispatch,
  getState,
) => {
  const profile = getState().profile;
  profile.status = status;
  dispatch(updateProfile(profile));
};

export const setMessagesFilter = (
  show: boolean,
): ThunkAction<void, RootState, unknown, ProfileActions> => async (
  dispatch,
  getState,
) => {
  const profile = getState().profile;
  profile.showDeletedTweets = show;
  dispatch(updateProfile(profile));
};
