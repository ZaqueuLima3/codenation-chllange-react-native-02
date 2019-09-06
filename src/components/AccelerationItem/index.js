import React from 'react';
import moment from 'moment';
import { View, Text, Image, FlatList, Animated, Easing, ActivityIndicator} from 'react-native';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt'

import styles from './styles';

export default function AccelerationItem({ data, opacity }) {
  const dataFormatted = format(
    parseISO(data.birthday),
    "dd'/'MM'/'yyyy",
    {
      locale: pt,
    }
  );
  
  return (
	  <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          className="profile-image" 
          style={styles.image} 
          source={{ uri: data.picture }} 
        />
        <Text className="profile-name" style={styles.title}>{data.name}</Text>
      </View>

      <Animated.View className='contact-content' style={{ opacity, ...styles.content }}>
        <Text className="contact-label" style={styles.white} >Linkedin:</Text>
        <Text className="contact-value" style={styles.white} >{data.linkedin}</Text>
        
        <Text className="contact-label" style={{ ...styles.white, marginTop: 20 }} >Github:</Text>
        <Text className="contact-value" style={styles.white} >{data.github}</Text>
      </Animated.View>

      <Animated.View className='contact-content' style={{ opacity, ...styles.content }}>
        <Text className="contact-label" style={styles.white} >E-mail:</Text>
        <Text className="contact-value" style={styles.white} >{data.email}</Text>
        
        <Text className="contact-label" style={{ ...styles.white, marginTop: 20 }} >Celular:</Text>
        <Text className="contact-value" style={styles.white} >{data.phone}</Text>
        
        <Text className="contact-label" style={{ ...styles.white, marginTop: 20 }} >Data de Nascimento:</Text>
        <Text className="contact-value" style={styles.white} >{dataFormatted}</Text>
        
        <Text className="contact-label" style={{ ...styles.white, marginTop: 20 }} >Sexo:</Text>
        <Text className="contact-value" style={styles.white} >{data.gender ? "Masculino" : "Feminino"}</Text>

        <Text className="contact-label" style={{ ...styles.white, marginTop: 20 }} >Idiomas:</Text>
        {data.language.map(language => <Text className="contact-language" key={language} style={styles.white} >{language}</Text>)}
        

      </Animated.View>
    </View>
  );
}
