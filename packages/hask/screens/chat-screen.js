import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import acronym from 'acronym';
import {Navigation} from 'react-native-navigation';

const ChatScreen = ({...props}) => {
  const [messages, setMessages] = useState([]);
  const [addReply, setAddReply] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        title: {text: props.chatUser.title},
      },
    });
  }, []);

  useEffect(() => {
    if (addReply) {
      setIsTyping(true);
      const head = messages[0];
      const randomMessage = acronym(head.text);
      setTimeout(() => {
        setMessages([
          {
            _id: messages.length + 1,
            text: randomMessage,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: props.chatUser.title,
            },
          },
          ...messages,
        ]);
        setIsTyping(false);
      }, 0);
      setAddReply(false);
    }
  }, [messages]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => {
      setAddReply(true);
      return GiftedChat.append(previousMessages, messages);
    });
  }, []);

  return (
    <GiftedChat
      isTyping={isTyping}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default ChatScreen;

ChatScreen.options = {
  topBar: {
    title: {
      text: '...',
    },
  },
};
