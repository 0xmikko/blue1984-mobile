/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React from 'react';
import {FeedWidget} from "../../containers/Tweets/FeedWidget";
import {useAccounts} from "../../store/accounts/hook";

export function FeedScreen(): React.ReactElement {

  const accounts = useAccounts();
  const accountsId = accounts.map(a => a.id);

  return (
    <FeedWidget accounts={accountsId} title={"Feed"} />
  );
}
