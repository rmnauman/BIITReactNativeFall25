import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () => {

    const [count, setCount] = useState(0);
    let increment = () => {
        // let newCount = count + 1;
        // setCount(newCount)
        setCount(count + 1);
        console.log(count)
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(249, 234, 234, 1)' }}>
            <View style={ss.wv}>
                <Text style={[ss.txt, { color: 'white' }]}>Welcome</Text>
            </View>
            <Button title='ADD' onPress={increment} />
            <View style={ss.cv}>
                <Text style={ss.txt}>Counter: {count}</Text>
            </View>


        </View>
    );
}
const ss = StyleSheet.create({
    wv: {
        alignSelf: 'center',
        padding: 30,
        margin: 30,
        width: '70%',
        backgroundColor: 'purple',
    },
    cv: {
        backgroundColor: 'yellow',
        margin: 30,
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',

    },
});

export default Counter;


