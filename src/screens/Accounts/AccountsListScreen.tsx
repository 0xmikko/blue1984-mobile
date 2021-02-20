/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../store/actions';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import {accountsListSelector} from '../../store/accounts';
import {DataListView} from 'rn-mobile-components';
import AccountCard from '../../containers/Accounts/AccountCard';
import SearchBar from 'react-native-search-bar';

export function AccountsListScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const getList = (opHash: string) => {
    dispatch(actions.accounts.getList(opHash));
  };
  const data = useSelector(accountsListSelector);

  const noAccountsFound = () =>
    search.length === 0 ? (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100%',
        }}>
        <Text>You have not added any account yet.</Text>
        <Text>Press '+' to add account</Text>
      </View>
    ) : (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          height: '100%',
        }}>
        <Text>Noting was found</Text>
        <Text>with this search request</Text>
      </View>
    );

  const filteredData =
    search === '' ? data : data.filter((elm) => elm.name.search(search) !== -1);

  const onSelect = (id: string) => navigation.navigate('AccountDetails', {id});

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        text={search}
        searchBarStyle={'minimal'}
      />

      <DataListView
        data={filteredData}
        getList={getList}
        renderItem={AccountCard}
        onSelect={onSelect}
        noItemsFound={noAccountsFound}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
