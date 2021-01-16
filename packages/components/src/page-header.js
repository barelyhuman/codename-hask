import React from 'react';
import { Text, StyleSheet } from 'react-native';

function PageHeader({ title }) {
  return (
    <>
      <Text style={styles.headerText}>{title}</Text>
    </>
  );
}

export default PageHeader;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 8*5,
    fontWeight: '600',
  },
});
