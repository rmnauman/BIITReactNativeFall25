import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text, } from "react-native";

const SalCalculator = () => {

    const [count, setCount] = useState(0);
    const [sal, setSal] = useState(0);
    const [toDisplay, setToDisplay] = useState('')

    const calSalary = () => {
        let tax = sal * 0.17;
        let fs = sal - tax;
        let str = 'Final Salary = ' + fs;
        setToDisplay(str)

    }
    const handleCount = () => {
        // ye wala function flanay button main use ho raha
        // ye count ki walue ko barha raha hay
        setCount(count + 1);
    }

    return (
        <View>
            <View>
                <Text style={ss.txt}>Sal Calcuation (17%)</Text>
            </View>
            <View>
                <TextInput placeholder="Enter Salary"
                    onChangeText={setSal}
                    style={ss.txtInp}>

                </TextInput>
            </View>
            <View>
                <Button title='Calculate' onPress={calSalary}></Button>
            </View>
            <View>
                <Text style={ss.txt}>{toDisplay}</Text>
            </View>
        </View>
    );
}
const ss = StyleSheet.create({
    txt: {
        fontSize: 30,
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'pink'
    },
    txtInp: {
        borderWidth: 2,
        backgroundColor: 'rgba(238, 236, 236, 1)',
        margin: 10,
        fontSize: 30,
    },
});
export default SalCalculator;





