import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Button } from "react-native";
const Calculator = () => {
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [result, setresult] = useState();
    function add() {
        let val3 = val1 + val2
        setresult = val3

    }
    function mul() {
        let mul = val1 * val2
        setresult = mul
    }
    function sub() {
        let sub = val1 - val2
        setresult = sub
    }
    return (<View style={ss.mview}>
        <View>
            <Text >Calculator</Text>
        </View >
        <View style={ss.view}>
            <Text>Number 1</Text>
            <TextInput onChangeText={setVal1}

            />
        </View>
        <View>
            <Text style={ss.txt}>Number 2</Text>
            <TextInput onChangeText={setVal2}

            />
            <View>
                <Text>result:{result} </Text>
            </View>
        </View>
        <View><Button title="ADD" onPress={add} />
        </View>
        <View><Button title="SUB" onPress={sub} />
        </View>
        <View><Button title="MULTI" onPress={mul} />
        </View>
    </View >);
}
export default Calculator;

const ss = StyleSheet.create({
    mview: {
        flex: 1,

        backgroundColor: 'rgba(166, 193, 233, 1)',
        padding: 10,
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    view: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black'
    }
});