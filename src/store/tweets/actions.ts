/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import {endpoint, TWEETS_PREFIX} from "./";

import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {Action} from "redux";
import {createAction} from "redux-api-middleware";
import {getFullAPIAddress} from "../../utils/api";
import {getAccountsFromStorage} from "../accounts/actions";
import {journaledOperation, LIST_FAILURE, LIST_REQUEST, LIST_SUCCESS,} from "redux-data-connect";

export const getFeed = (
  hash: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  const accounts = await getAccountsFromStorage();

  return await dispatch(
    journaledOperation(
      createAction({
        endpoint: getFullAPIAddress(endpoint),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accounts }),
        types: [
          TWEETS_PREFIX + LIST_REQUEST,
          TWEETS_PREFIX + LIST_SUCCESS,
          TWEETS_PREFIX + LIST_FAILURE,
        ],
      })
    , hash)
  );
};
