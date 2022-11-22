/*Custom Text*/
import React from 'react';
import {Text } from 'react-native';
import styles from './Mytext.style';

const Mytext = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};

export default Mytext;