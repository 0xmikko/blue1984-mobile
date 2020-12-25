/*
 * Copyright (c) 2020. Mikael Lazarev
 */

export enum STATUS {
  UPDATE_NEEDED = 'STATUS: UPDATE_NEEDED',
  ACTIVE = 'STATUS: ACTIVE',
  LOADING = '@@status/LOADING',
  UPDATING = '@@status/UPDATING',
  SUCCESS = '@@status/SUCCESS',
  FAILURE = '@@status/FAILURE',
}

