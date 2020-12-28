/*
 * Copyright (c) 2020. Mikael Lazarev
 */
import React, {useState} from 'react';
import {Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {AccountCreateDTO} from '../../core/accounts';

import actions from '../../store/actions';
import {useNavigation} from '@react-navigation/native';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {operationSelector} from 'dlt-operations';
import {DataFormView} from 'rn-mobile-components';
import {FormView} from '../../containers/Accounts/FormView';

export function AccountsNewScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hash, setHash] = useState('0');

  const operation = useSelector(operationSelector(hash));

  const data: AccountCreateDTO = {
    id: '',
  };

  const onSubmit = (values: AccountCreateDTO) => {
    const newHash = Date.now().toString();
    setHash(newHash);

    // Emit data
    dispatch(actions.accounts.addNewAccount(values.id, newHash));
  };

  const onSuccess = () => {
    navigation.navigate('AccountsList');
  };

  const onFailure = () => {
    setHash('0');
    Alert.alert(
      'Cant add account',
      operation.error || 'Network error',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#687882',
          marginTop: 55,
          marginBottom: 15,
        }}>
        Enter a valid Twitter account
      </Text>
      <DataFormView
        data={data}
        onSubmit={onSubmit}
        dataIsLoaded={true}
        saveOperation={operation}
        component={FormView}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  button: {
    width: '80%',
    paddingTop: 50,
  },
  button2: {
    paddingTop: 20,
  },
});
