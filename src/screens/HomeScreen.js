import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  // console.log(props.navigation)
  return <View>
    <Text style={styles.text}>HomeScreen!!!!!!</Text>
    <Button 
    onPress = {()=>{props.navigation.navigate("Components")}}
    title="Go to Compmemts Demo"/>
    <Button 
    onPress = {()=>{props.navigation.navigate("List")}}
    title="Go to List Demo"/>
    <TouchableOpacity onPress={()=>{props.navigation.navigate("List")}}>
      <Text>Go tp List Demo</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
