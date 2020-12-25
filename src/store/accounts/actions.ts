/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { ACCOUNTS_PREFIX, endpoint } from "./";
import AsyncStorage from "@react-native-community/async-storage";
import {
  createDataLoaderDetailActions,
  journaledOperation,
  LIST_FAILURE,
  LIST_REQUEST,
  LIST_SUCCESS,
  UPLOAD_FAILURE,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
} from "redux-data-connect";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../index";
import { Action } from "redux";
import { getFullAPIAddress } from "../../utils/api";
import { createAction } from "redux-api-middleware";
import { updateStatus } from "dlt-operations";

export const addNewAccount = (
  id: string,
  hash: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  const action = await dispatch(
    journaledOperation(
      createAction({
        endpoint,
        method: "POST",
        body: JSON.stringify({ id }),
        headers: {'Content-Type': 'application/json'},
        types: [
          ACCOUNTS_PREFIX + UPLOAD_REQUEST,
          ACCOUNTS_PREFIX + UPLOAD_SUCCESS,
          ACCOUNTS_PREFIX + UPLOAD_FAILURE,
        ],
      }),
      hash
    )
  );

  if (action !== undefined && !action.error) {
    const savedAccounts = await getAccountsFromStorage();
    let accountsList = new Set([action.payload.id, ...savedAccounts]);

    await AsyncStorage.setItem(
      "accounts",
      JSON.stringify(Array.from(accountsList.values()))
    );
  }

  dispatch(getList(hash));
};

export const getList = (
  hash: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  const accounts = await getAccountsFromStorage();

  const action = await dispatch(
    journaledOperation(
      createAction({
        endpoint: getFullAPIAddress(endpoint + "list/"),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accounts }),
        types: [
          ACCOUNTS_PREFIX + LIST_REQUEST,
          ACCOUNTS_PREFIX + LIST_SUCCESS,
          ACCOUNTS_PREFIX + LIST_FAILURE,
        ],
      }),
      hash
    )
  );

  return action;
};

export const getAccountsFromStorage = async (): Promise<string[]> => {
  let accountsList: string[] = [];
  //localStorage.clear();
  const savedAccountsStr = await AsyncStorage.getItem("accounts");

  if (savedAccountsStr !== null) {
    const savedAccounts: string[] = JSON.parse(savedAccountsStr);
    accountsList = savedAccounts;
  }
  return accountsList;
};

export const getDetails = createDataLoaderDetailActions(
  endpoint + ":id/",
  ACCOUNTS_PREFIX
);

export const removeAccount = (
  id: string,
  hash?: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  const savedAccounts = await getAccountsFromStorage();
  const accountsList = savedAccounts.filter((e) => e !== id);
  await AsyncStorage.setItem("accounts", JSON.stringify(accountsList));
  dispatch(updateStatus(hash || "0", "STATUS.SUCCESS"));
};
