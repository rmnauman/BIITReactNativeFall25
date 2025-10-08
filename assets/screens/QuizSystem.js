import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { fileMapCacheDirectory } from "../../metro.config";

const QuizSystem = () => {
    const [ques, setQues] = useState(
        {
            q: "What is Capital of Pakistan:",
            o1: "Lahore",
            o2: "Islamabad",
            o3: "Rawalpindi",
            o4: "Karachi",
            sol: "op2",
        }
    )
    const [op, setOp] = useState('op1');
    const [score, setScore] = useState(0)
    const checkAnswer = () => {
        console.log(op + '\n' + ques.sol)
        if (op == ques.sol) {

            setScore(score + 10)
        }
    }
    return (
        <View>
            <View style={{
                backgroundColor: 'orange',
                padding: 20, padding: 10,
            }}>
                <Text style={[ss.txt, { fontSize: 40, textAlign: 'center' }]}>Quiz 1</Text>
            </View>
            <View>
                <Text style={ss.txt}> Q1: {ques.q} </Text>
            </View>
            <View style={ss.vRadios}>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        status={op == "op1" ? 'checked' : 'unchecked'}
                        onPress={() => { setOp('op1') }}
                    />
                    <Text style={ss.txt}> {ques.o1}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        status={op == "op2" ? 'checked' : 'unchecked'}
                        onPress={() => { setOp('op2') }}
                    />
                    <Text style={ss.txt}> {ques.o2}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        status={op == "op3" ? 'checked' : 'unchecked'}
                        onPress={() => { setOp('op3') }}
                    />
                    <Text style={ss.txt}> {ques.o3}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        status={op == "op4" ? 'checked' : 'unchecked'}
                        onPress={() => { setOp('op4') }}
                    />
                    <Text style={ss.txt}> {ques.o4}</Text>
                </View>
            </View>
            <View style={{ width: '70%', alignSelf: 'center' }}>
                <Button title='Submit'
                    onPress={checkAnswer}
                />
            </View>
            <View style={ss.vRadios}>
                <Text style={ss.txt}>Total Questions: 1</Text>
                <Text style={ss.txt}>Correct Answers: 1</Text>
                <Text style={ss.txt}>Score:{score}</Text>
            </View>
        </View>
    );
}
const ss = StyleSheet.create({
    txt: { fontSize: 25, color: 'black' },
    vRadios: {
        borderColor: 'green',
        borderWidth: 2,
        margin: 20,
        padding: 20,
        borderRadius: 20,
    }
});
export default QuizSystem;