/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React from 'react';
import {useSelector} from 'react-redux';
import {accountsListSelector} from "../../store/accounts";
import {FeedWidget} from "../../containers/Tweets/FeedWidget";

export function FeedScreen(): React.ReactElement {

  const accounts = useSelector(accountsListSelector);
  const accountsId = accounts.map(a => a.id);

  return (
    <FeedWidget accounts={accountsId} title={"Feed"} />
  );
}
