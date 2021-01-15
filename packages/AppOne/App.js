import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

import Button from 'components/src/button';
import useInterval from 'lib/src/hooks/use-interval';
import isLoggedIn from 'lib/src/guards/is-logged-in';

const App = () => {
  
  const [timer, setTimer] = useState(0);

  const {clear} = useInterval(() => {
    setTimer(timer + 1);
  }, 2000);

  return (
    <>
      <SafeAreaView>
        <Text>{timer}</Text>
        <Button onPress={clear}> Stop Timer </Button>
      </SafeAreaView>
    </>
  );
};

export default App;
