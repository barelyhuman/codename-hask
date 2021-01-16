import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, SafeAreaView, Text, TextInput} from 'react-native';

import Button from 'components/src/button';
import {Navigation} from 'react-native-navigation';
import {mainStack} from '../constants/navigation-stacks';
import PageHeader from 'components/src/page-header';
import Padding from 'components/src/padding';

function SettingsScreen({...props}) {
  return (
    <>
      <SafeAreaView>
        <Padding all={2}>
          <PageHeader title="Settings" />
        </Padding>
      </SafeAreaView>
      <Padding all={2}>
        <Text>Still under development</Text>
      </Padding>
    </>
  );
}

export default SettingsScreen;

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Login',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};
