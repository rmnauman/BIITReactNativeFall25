import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { RadioButton } from "react-native-paper";

const QuizSystem = () => {
    const [prod, setProd] = useState('fries')
    const [qty, setQty] = useState('')
    const calBill = () => {
        let tb = 0;
        tb += prod == 'fries' ? qty * 200 : 0;
        tb += prod == 'burger' ? qty * 500 : 0;
        tb += prod == 'drink' ? qty * 100 : 0;
        Alert.alert('Total Bill = ' + tb)
        //tb += prod == 'fries' ? qty * 200 : prod == 'burger' ? qty * 500 : qty * 100;


    }
    return (
        <View style={{ flex: 1, }}>
            <View>
                <Text> Pappu Burger Wala</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        status={prod == 'fries' ? 'checked' : 'unchecked'}
                        onPress={() => { setProd('fries') }}
                    />
                    <Text style={{ fontSize: 25, }}> Fries (200)</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        status={prod == 'burger' ? 'checked' : 'unchecked'}
                        onPress={() => { setProd('burger') }}
                    />
                    <Text style={{ fontSize: 25, }}> Burger (500)</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        status={prod == 'drink' ? 'checked' : 'unchecked'}
                        onPress={() => { setProd('drink') }}
                    />
                    <Text style={{ fontSize: 25, }}>Drink (100)</Text>
                </View>
            </View>
            <View>
                <TextInput
                    style={{
                        fontSize: 25, borderWidth: 2,
                        borderColor: 'green', borderRadius: 10,
                    }}
                    placeholder="Enter Quantity"
                    onChangeText={setQty} />
            </View>
            <View>
                <Button title='Calculate' onPress={calBill}></Button>
            </View>
        </View>
    );
}
export default QuizSystem;