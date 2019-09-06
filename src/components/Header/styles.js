import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#7800ff",
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: "center",
  },
})

export default styles;