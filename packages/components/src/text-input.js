import React from 'react';
import { StyleSheet, TextInput as _TextInput } from 'react-native';

function TextInput({ ...props }) {
  return (
    <>
      <_TextInput style={styles.input} {...props} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 42,
    borderWidth: 2,
    paddingHorizontal: 8 * 2,
    borderRadius: 4,
    borderColor: 'rgba(12,12,13,0.1)',
  },
});

export default TextInput;
