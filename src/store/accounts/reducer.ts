/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import { Account } from "../../core/accounts";
import { ACCOUNTS_PREFIX } from "./";
import {createDataLoaderReducer} from "redux-data-connect";

export default createDataLoaderReducer<Account>(ACCOUNTS_PREFIX);
