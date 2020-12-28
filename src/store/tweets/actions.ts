/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {endpoint, TWEETS_PREFIX} from './';

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';
import {Action} from 'redux';
import {createAction} from 'redux-api-middleware';
import {
  getFullUrl,
  journaledOperation,
  LIST_FAILURE,
  LIST_LOADED,
  LIST_REQUEST,
  LIST_SUCCESS,
  LIST_UPDATE,
  LIST_UPDATING,
} from 'redux-data-connect';
import {BACKEND_ADDR} from '../../../config';

export const getFeed = (
  accounts: Array<string>,
  opHash: string,
  offset?: number,
  limit?: number,
  loadMore: boolean = false,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  const feedEndpoint = getFullUrl(endpoint , {
    host: BACKEND_ADDR,
    params: {
      offset,
      limit,
    },
  });

  const result = await dispatch(
    journaledOperation(
      createAction({
        endpoint: feedEndpoint,
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({accounts}),
        types: [
          TWEETS_PREFIX + (loadMore ? LIST_UPDATING : LIST_REQUEST),
          TWEETS_PREFIX + LIST_LOADED,
          TWEETS_PREFIX + LIST_FAILURE,
        ],
      }),
      opHash,
      loadMore,
    ),
  );

  dispatch({
    type: TWEETS_PREFIX + (loadMore ? LIST_UPDATE : LIST_SUCCESS),
    payload: result.payload.data,
  });
};
