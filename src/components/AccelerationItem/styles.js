import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#000",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 35,
  },
  title: {
    fontSize: 16,
    margin: 15,
    color: "#7800ff",
  },
  white: {
    color: "#fff",
  }
})

export default styles;