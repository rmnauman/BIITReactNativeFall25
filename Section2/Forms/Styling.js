import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Styling = () => {
  return (
    <View>
      <View style={{ backgroundColor: 'blue', alignItems: 'center' }}>
        <Text style={{ color: 'yellow', fontSize: 30, }}>Assalam o Alaikum Wr Wb!</Text>
        <Text style={{ color: 'white', fontSize: 30, }}>Welcome To My Class</Text>
        <Text style={ss.t2}>Namaz Time</Text>
      </View>
      <View style={ss.v2}>
        <Text style={ss.t2}>Allah O Akbar</Text>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  v2: {
    backgroundColor: 'purple', width: '60%', height: '50%',
    margin: 10,
  },
  t2: { fontSize: 35, color: 'yellow', textAlign: 'center' },
});
export default Styling;
