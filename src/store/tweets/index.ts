/*
 * Copyright (c) 2020. Mikael Lazarev
 */
// HYPOTHESES
import {RootState} from "../index";

export const TWEETS_PREFIX = 'TWEETS@@';
export const endpoint = '/api/accounts/feed/';

export const tweetsListSelector = (state: RootState) => (state.tweets.List);
