/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../store/actions';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {SearchBar, Text} from 'react-native-elements';
import {accountsListSelector} from '../../store/accounts';
import {DataListView} from 'rn-mobile-components';
import AccountCard from '../../containers/Accounts/AccountCard';

export function AccountsListScreen() : React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  const getList = (opHash: string) =>
    dispatch(actions.accounts.getList(opHash));
  const data = useSelector(accountsListSelector);

  const filteredData =
    search === '' ? data : data.filter((elm) => elm.name.search(search) !== -1);

  const onSelect = (id: string) => navigation.navigate('AccountDetails', {id});

  if (data.length === 0) {
    return (
      <SafeAreaView>
        <Text>You have not added any account.</Text>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
        // lightTheme={true}
        round={true}
        inputContainerStyle={{backgroundColor: 'white'}}
        leftIconContainerStyle={{backgroundColor: 'white'}}
        rightIconContainerStyle={{backgroundColor: 'white'}}
        containerStyle={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 5,
        }}
        placeholderTextColor={'#g5g5g5'}
      />

      <DataListView
        data={filteredData}
        getList={getList}
        renderItem={AccountCard}
        onSelect={onSelect}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
