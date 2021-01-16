import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Spacer({percent, ...props}) {
  const spacingMultiplier = 8;

  const toPercentage = (value) => {
    if (percent) {
      return value + '%';
    }
    return value;
  };

  const style = StyleSheet.create({
    spacer: {
      height: 1,
      width: 1,
      marginLeft: props.x ? toPercentage(spacingMultiplier * props.x) : null,
      marginTop: props.y ? toPercentage(spacingMultiplier * props.y) : null,
    },
  });

  return <View style={style.spacer} />;
}