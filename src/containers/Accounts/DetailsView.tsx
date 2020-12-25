/*
 * Copyright (c) 2020. Mikael Lazarev
 */

import React from 'react';

import {Account} from '../../core/accounts';
// import {TotalBar} from '../Bonds/TotalBar';

import {InfoTab} from './InfoTab';

interface AccountDetailsProps {
  data: Account;
}

export function DetailsView({data}: AccountDetailsProps): React.ReactElement {
  return <InfoTab data={data} />;
}
