/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */
import {Account} from "../../core/accounts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import actions from "../actions";
import {accountsListSelector} from "./index";

export function useAccounts() : Array<Account>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.accounts.getList("get"));
  }, []);
  return useSelector(accountsListSelector);
}
