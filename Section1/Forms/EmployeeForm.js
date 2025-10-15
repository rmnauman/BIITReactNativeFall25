import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Checkbox, RadioButton, TextInput } from "react-native-paper";

const EmployeeForm = () => {

    const [MS, setMS] = useState(false);
    const [Name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [student, setStudent] = useState(false);
    const [showView, setShowView] = useState(false);
    const [designation, setDesignation] = useState('mgr');

    const showData = () => {
        setShowView(true);
        // showMarried = MS ? 'Married' : 'Un Married'
        // create state variable for showMarried
    }
    return (
        <View style={{ flex: 1, }}>
            <View style={ss.header}>
                <Text style={{ fontSize: 35, textAlign: 'center' }}>Employee Form</Text>
            </View>
            <View style={ss.inputV}>
                <TextInput
                    placeholder="Enter Name"
                    onChangeText={setName}
                    style={ss.tInput}></TextInput>
            </View>
            <View style={ss.inputV}>
                <TextInput
                    onChangeText={setContact}
                    placeholder="Enter Contact"
                    style={ss.tInput}></TextInput>
            </View>
            <View style={ss.cbView}>
                <Checkbox
                    status={MS ? 'checked' : 'unchecked'}
                    onPress={() => { setMS(!MS) }}
                />
                <Text style={ss.cbText}>Married</Text>
            </View>
            <View style={ss.cbView}>
                <Checkbox
                    status={student ? 'checked' : 'unchecked'}
                    onPress={function () { setStudent(!student) }}
                />
                <Text style={ss.cbText}>Student</Text>
            </View>
            <View style={ss.btn}>
                <Button title='Submit'
                    onPress={showData}
                ></Button>
            </View>
            <View style={ss.cbView}>
                <RadioButton
                    status={designation == 'mgr' ? 'checked' : 'unchecked'}
                    onPress={() => { setDesignation('mgr') }}
                />
                <Text style={ss.cbText}>Manager</Text>
            </View>
            <View style={ss.cbView}>
                <RadioButton
                    status={designation == 'hr' ? 'checked' : 'unchecked'}
                    onPress={() => { setDesignation('hr') }}
                />
                <Text style={ss.cbText}>HR</Text>
            </View>
            <View style={ss.cbView}>
                <RadioButton
                    status={designation == 'dev' ? 'checked' : 'unchecked'}
                    onPress={() => { setDesignation('dev') }}
                />
                <Text style={ss.cbText}>Developer</Text>
            </View>
            <View style={ss.cbView}>
                <RadioButton
                    status={designation == 'boss' ? 'checked' : 'unchecked'}
                    onPress={function abc() { setDesignation('boss') }}
                />
                <Text style={ss.cbText}>Boss</Text>
            </View>



            {showView &&
                <View style={{
                    height: '30%', margin: 20,
                    borderWidth: 3, borderColor: 'blue',
                    padding: 20, borderRadius: 10,
                }}>
                    <Text style={{ fontSize: 25 }}>Name: {Name}</Text>
                    <Text style={{ fontSize: 25 }}>Name: {contact}</Text>
                    <Text style={{ fontSize: 25 }}>
                        Marital Status: {MS ? 'Married' : 'UnMarried'}</Text>
                    <Text style={{ fontSize: 25 }}>
                        Student: {student ? 'Yes' : 'No'}</Text>

                </View>

            }
        </View>
    );

}
const ss = StyleSheet.create({

    inputV: {
        margin: 10, borderColor: "green",
        borderWidth: 2, borderRadius: 10,
    },
    cbView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cbText: {
        fontSize: 30, color: 'black',
    },
    tInput: {
        fontSize: 30,
    },
});
export default EmployeeForm;