/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

import actions from '../../store/actions';
import {AccountsStackParamList} from './AccountsStack';
import {RouteProp, useRoute} from '@react-navigation/native';
import {accountDetailsSelector} from '../../store/accounts';
import {DataDetailsView} from 'rn-mobile-components';
import {DetailsView} from '../../containers/Accounts/DetailsView';

type ContactDetailsScreenRouteProp = RouteProp<
  AccountsStackParamList,
  'AccountDetailsScreen'
>;

export function AccountsDetailsScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const route = useRoute<ContactDetailsScreenRouteProp>();
  const {id} = route.params;

  console.log('ID', id);

  const getDetails = (opHash: string) =>
    dispatch(actions.accounts.getDetails(id, opHash));

  const data = useSelector(accountDetailsSelector(id));

  return (
    <DataDetailsView
      data={data}
      getDetails={getDetails}
      renderItem={DetailsView}
    />
  );
}
