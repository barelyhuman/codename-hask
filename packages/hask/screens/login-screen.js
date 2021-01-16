import React, {useState, useEffect, useCallback} from 'react';

import Button from 'components/src/button';
import TextInput from 'components/src/text-input';
import {Navigation} from 'react-native-navigation';
import {mainStack} from '../constants/navigation-stacks';
import {SafeAreaView, Text} from 'react-native';
import Padding from 'components/src/padding';
import Spacer from 'components/src/spacer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGECONSTANTS from '../constants/async-storage';

function LoginScreen({...props}) {
  const handleLoginPress = (e) => {
    AsyncStorage.setItem(STORAGECONSTANTS.AUTHTOKEN, 'sadsa');
    Navigation.setRoot(mainStack);
    Navigation.push(props.componentId, {
      component: {
        name: 'Chats',
      },
    });
  };

  return (
    <>
      <Padding all={2}>
        <TextInput autoCapitalize="none" placeholder="Enter Email" />
        <Spacer y={1} />
        <Button onPress={handleLoginPress}>Login</Button>
      </Padding>
    </>
  );
}

export default LoginScreen;

LoginScreen.options = {
  topBar: {
    title: {
      text: 'Login',
    },
  },
};
