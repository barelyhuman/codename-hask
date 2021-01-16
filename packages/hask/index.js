/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import ChatScreen from './screens/chat-screen';
import LoginScreen from './screens/login-screen';
import SettingsScreen from './screens/settings-screen';
import {loginStack, mainStack} from './constants/navigation-stacks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGECONSTANTS from './constants/async-storage';
import ChatListScreen from './screens/chats-list-screen';

Navigation.registerComponent('ChatScreen', () => ChatScreen);
Navigation.registerComponent('Login', () => LoginScreen);
Navigation.registerComponent('Chats', () => ChatListScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#000',
  },
  topBar: {
    title: {
      color: '#fff',
    },
    backButton: {
      color: '#fff',
    },
    background: {
      color: '#000',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  (async () => {
    const loggedIn = await isLoggedIn();
    Navigation.setRoot(!loggedIn ? loginStack : mainStack);
  })();
});

async function isLoggedIn() {
  const item = await AsyncStorage.getItem(STORAGECONSTANTS.AUTHTOKEN);
  if (item && item.length) {
    return true;
  }
  return false;
}
