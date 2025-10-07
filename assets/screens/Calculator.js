import React, { useState } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";

const Calculator = () => {

    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("5");
    const [ans, setAns] = useState("");

    const add = () => {
        setAns(parseInt(v1) + parseInt(v2));
        Keyboard.dismiss();
    }

    const subtract = () => {
        setAns(v1 - v2);
    }
    return (
        <View style={ss.mainView}>
            <View style={ss.cView}>
                <Text style={ss.txt}>Calculator</Text>
            </View>
            <View style={ss.vInp}>
                <TextInput
                    onChangeText={setV1}
                    value={v1}
                    placeholder="Enter Value 1"
                    keyboardType='number-pad'
                    style={ss.txtInp}></TextInput>
            </View>
            <View style={ss.vInp}>
                <TextInput
                    onChangeText={setV2}
                    placeholder="Enter Value 2"
                    keyboardType="number-pad"
                    style={ss.txtInp}></TextInput>
            </View>
            <View style={ss.vAnswer}>
                <Text style={ss.txt}>Answer ={ans}</Text>
            </View>
            <View style={ss.vBtn}>
                <Button title='ADD'
                    onPress={add}
                ></Button>
            </View>
            <View style={ss.vBtn}>
                <Button
                    onPress={subtract}
                    title='Subtract'></Button>
            </View>
        </View>
    );
}
const ss = StyleSheet.create({
    mainView: {
        padding: 20,
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(161, 231, 253, 1))',
    },
    cView: {
        width: '50%',
        backgroundColor: 'yellow',
        margin: 20,
        padding: 20,
        borderRadius: 10,
        alignItems: "center"
    },
    txt: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    vInp: {
        margin: 20,
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 15,
    },
    txtInp: {
        fontSize: 24,
    },
    vAnswer: {
        width: '80%',
        alignItems: 'center',
    },
    vBtn: {
        margin: 20,
        width: '60%',
    }
});
export default Calculator;