/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import {Profile, ProfileStatus} from '../../core/profile';
import {RootState} from "../index";

export const endpoint = '/api/profile/';

export type ProfileActions =
  | {
      type: 'PROFILE_REQUEST' | 'PROFILE_SUCCESS' | 'PROFILE_FAILURE';
      payload?: Profile;
      error?: boolean;
    }
  | {type: 'PROFILE_UPDATE_STATUS'; status: ProfileStatus};

export const profileSelector = (state: RootState) => state.profile;
