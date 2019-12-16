import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategoryListItem from "./component/CategoryListItem"

import CatImg from "./assets/cat.png";
import SatanImg from "./assets/satan.png";
import BatImg from "./assets/bat.png";

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title="Cat" src={CatImg}/>
      <CategoryListItem title="Satan" src={SatanImg}/>
      <CategoryListItem title="Bat" src={BatImg}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft:16,
    paddingRight:16
  },
});
