/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { Tweet } from "../../core/tweet";
import { TWEETS_PREFIX } from "./";
import {createDataLoaderReducer} from "redux-data-connect";

export default createDataLoaderReducer<Tweet>(TWEETS_PREFIX);
