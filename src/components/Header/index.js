import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

export default function Header() {
  return (
    <View >
      <View style={styles.statusBar} />
      <View style={styles.header}>
        <Image 
          className="header-image"
          style={styles.image} 
          source={{ uri: "https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png" }} 
        />
      </View>
    </View>
  );
}
