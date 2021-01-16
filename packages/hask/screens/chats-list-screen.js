import React, {useState, useEffect, useCallback} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Button from 'components/src/button';
import {Navigation} from 'react-native-navigation';
import {mainStack} from '../constants/navigation-stacks';
import PageHeader from 'components/src/page-header';
import Padding from 'components/src/padding';

const USERS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Acronym Bot',
  },
];

const ListItem = (item) => {
  return (
    <TouchableOpacity
      onPress={() =>
        item.onPress({
          id: item.id,
          title: item.title,
        })
      }
      style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

function ChatListScreen({...props}) {
  const handleItemPress = (item) => {
    Navigation.push(props.componentId, {
      component: {
        name: 'ChatScreen',
        passProps: {
          chatUser: item,
        },
      },
    });
  };

  const renderItem = ({item}) => (
    <ListItem onPress={handleItemPress} title={item.title} id={item.id} />
  );
  return (
    <>
      <SafeAreaView>
        <Padding all={2}>
          <PageHeader title="Chats" />
        </Padding>
      </SafeAreaView>
      <Padding x={1}>
        <FlatList
          data={USERS}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}></FlatList>
      </Padding>
    </>
  );
}

export default ChatListScreen;

ChatListScreen.options = {
  topBar: {
    title: {
      text: 'Chats',
    },
    visible:false,
    height:0
  },
  bottomTab: {
    text: 'Chats',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 8 * 2.5,
    fontWeight: 'bold',
  },
});
