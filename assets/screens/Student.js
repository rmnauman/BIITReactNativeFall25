import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";



const Student = () => {



    const [name, setName] = useState("Ali");
    const [age, setAge] = useState("19");
    const [CGPA, setCGPA] = useState("3.5");
    const [allStuds, setAllStuds] = useState([])
    const [clr, setClr] = useState('white')

    useEffect(() => {
        console.log(allStuds)
    }, [allStuds])

    function SeachStudent() {

        let data = allStuds.find((v) => {

            if (v.name === name)
                return v;
        });
        if (data) {
            setAge(data.age);
            setCGPA(data.CGPA)
        }
    }

    function addStudent() {
        let newName = allStuds.find((v) => v.name == name);
        console.log(newName)
        if (newName == null) {
            let student = { name, age, CGPA };
            setAllStuds([...allStuds, student])
            setClr('white')
        }
        else {
            setClr('red')
        }

    }
    return (
        <View>
            <View style={{ backgroundColor: 'pink', padding: 20, }}>
                <Text style={{ fontSize: 30, textAlign: 'center', color: 'purple' }}>Student Portal</Text>
            </View>

            <View style={ss.vInp}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter Name"
                    style={[ss.input, { backgroundColor: clr }]} />
            </View>

            <View style={ss.vInp}>
                <TextInput
                    value={age}
                    onChangeText={setAge}
                    placeholder="Enter Age"
                    style={ss.input} />
            </View>

            <View style={ss.vInp}>
                <TextInput
                    value={CGPA}
                    onChangeText={setCGPA}
                    placeholder="Enter CGPA"
                    style={ss.input} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <View style={ss.btnRow}>
                    <Button
                        onPress={addStudent}
                        title='ADD' />
                </View>

                <View style={ss.btnRow}>
                    <Button
                        onPress={SeachStudent}
                        title='Search' />
                </View>
            </View>

            <View style={{
                width: '85%', margin: 'auto',
            }}>
                <Button
                    onPress={() => { console.log(allStuds) }}
                    title='Clear All' />
            </View>




        </View >
    );


}

const ss = StyleSheet.create({
    input: {
        width: '80%',
        borderRadius: 10,
        fontSize: 30,
        color: 'blue',
        borderWidth: 2,
        borderColor: 'green',
    },
    vInp: {
        alignItems: 'center',
        padding: 20,
        maring: 20,
    },
    btnRow: {
        width: '40%',
        margin: 10,
    }
});

export default Student;