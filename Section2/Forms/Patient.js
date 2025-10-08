import React, { useState } from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

const Patient = () => {
    const [gender, setGender] = useState('FeMale')
    const [flavour, setFlavour] = useState('o');
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <RadioButton
                    onPress={() => { setGender('Male') }}
                    status={gender == 'Male' ? 'checked' : 'unchecked'}
                />
                <Text style={{ fontSize: 30, color: 'black' }}> Male</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <RadioButton
                    onPress={() => { setGender('FeMale') }}
                    status={gender == 'FeMale' ? 'checked' : 'unchecked'}
                />
                <Text style={{ fontSize: 30, color: 'black' }}> FeMale</Text>
            </View>
            <View style={{ margin: 10, }}>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        onPress={() => { setFlavour('v') }}
                        status={flavour == 'v' ? 'checked' : 'unchecked'}
                    />
                    <Text style={{ fontSize: 30, color: 'black' }}> Vanilla</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        onPress={() => { setFlavour('s') }}
                        status={flavour == 's' ? 'checked' : 'unchecked'}
                    />
                    <Text style={{ fontSize: 30, color: 'black' }}> Strawberry</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        onPress={() => { setFlavour('m') }}
                        status={flavour == 'm' ? 'checked' : 'unchecked'}
                    />
                    <Text style={{ fontSize: 30, color: 'black' }}> Mango</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        onPress={() => { setFlavour('o') }}
                        status={flavour == 'o' ? 'checked' : 'unchecked'}
                    />
                    <Text style={{ fontSize: 30, color: 'black' }}> Orange</Text>
                </View>
            </View>


        </View>
    );
}
export default Patient;