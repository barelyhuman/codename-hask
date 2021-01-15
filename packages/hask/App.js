import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import acronym from 'acronym';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [addReply, setAddReply] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (addReply) {
      setIsTyping(true);
      const head = messages[0];
      console.log({head});
      const randomMessage = acronym(head.text);
      setTimeout(() => {
        setMessages([
          {
            _id: messages.length + 1,
            text: randomMessage,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Reaper',
              avatar: 'https://reaper.im/wallpapers/reaper-light.png',
            },
          },
          ...messages,
        ]);
        setIsTyping(false);
      }, 2000);
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

export default App;
