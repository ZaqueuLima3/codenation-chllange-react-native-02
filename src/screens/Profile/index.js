import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing, ActivityIndicator} from 'react-native';

import styles from './styles';

import Header from '../../components/Header';
import AccelerationItem from '../../components/AccelerationItem';

const profile = {
  "picture": "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm",
  "email": "rafaelfuzifaru@gmail.com",
  "first_name": "Rafael",
  "last_name": "Fuzifaru Cianci",
  "phone": "(48) 99120-3585",
  "gender": 1,
  "birthday": "1993-04-27T00:00:00-03:00",
  "linkedin": "https://www.linkedin.com/in/rafaelcianci",
  "github": "http://github.com/rafacianci",
  "address": {
    "Street": "",
    "ZipCode": "",
    "Number": "",
    "ComplementaryAddress": ""
  },
  "language": ["Português - PT", "Inglês - EN", "Japonês - JA"],
  "name": "Rafael Fuzifaru Cianci"
}

export default class Profile extends React.PureComponent {
    constructor(props) {
      super(props);

      this.animatedValue = new Animated.Value(0);
    }

    state = {
      loading: true,
    }

    componentDidMount() {

      setTimeout(() => {
        this.setState({ loading: false })
      }, 600)
    }

    componentDidUpdate(){
      this.animate();
    }

    animate = () => {
      this.animatedValue.setValue(0)
      Animated.timing(
        this.animatedValue,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear
        }
      ).start()
    }

    render(){
      const opacity = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      });

      const { loading } = this.state;
      return (
        <View>
          <Header />
          <View style={styles.container}>
            {!loading ? 
              <AccelerationItem data={profile} opacity={opacity} />
            :
              <ActivityIndicator size={20} color="#333" />
            }
          </View>
        </View>
      );
  }
}
