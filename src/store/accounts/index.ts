/*
 * Copyright (c) 2020. Mikael Lazarev
 */
// HYPOTHESES
import { RootState } from "../index";
import {getFullUrl} from "redux-data-connect";
import {BACKEND_ADDR} from "../../config";

export const ACCOUNTS_PREFIX = "ACCOUNTS@@";
export const endpoint = getFullUrl("/api/accounts/", {host: BACKEND_ADDR});

export const accountDetailsSelector = (id: string) => (state: RootState) =>
  state.accounts.Details[id];

export const accountsListSelector = (state: RootState) => state.accounts.List;
