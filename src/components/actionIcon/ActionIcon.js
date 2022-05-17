import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const ActionIcon = ({icon,style,onpress}) => {
    return (
      <TouchableOpacity 
        onPress={onpress}>
        <Image
          source={icon}
          resizeMode="contain"
          style={[styles.iconstyle, style]}
        />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  iconstyle: {
    width: 25,
    height: 25,
  }

})

