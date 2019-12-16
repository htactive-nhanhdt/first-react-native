import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";


export default function CategoryListItem(props) {
  return (
    <View style={styles.container}>
<Text style={styles.title}> {props.title}</Text>
      <Image style={styles.categoryImg} source={props.src} />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImg: {
    width: 64,
    height: 64
  },
  title: {
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 8
  },
  container: {   
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#fff',   
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.1,  
    shadowOffset: { width: 0, height: 0},
    elevation:10,
    marginBottom: 16
  }
});
