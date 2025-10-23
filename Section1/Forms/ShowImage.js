import React, { useState } from "react";
import { Alert, Button, FlatList, Image, Text, TextInput, View } from "react-native";


const ShowImage = () => {
    const [name, setName] = useState();
    const [cgpa, setCGPA] = useState();

    const deleteStudent = (id) => {
        const newData = students.filter((s) => s.id != id);
        setStudents(newData);
    }

    const addToList = () => {
        let newStud = { id: 101 + students.length, name: name, cgpa: cgpa };
        //students.push(newStud)
        setStudents([...students, newStud])
        console.log(students)
    }

    const [students, setStudents] = useState([
        { id: 101, name: 'Aiman', cgpa: 3.96 },
        { id: 102, name: 'Sohaib', cgpa: 3.2 },
        { id: 103, name: 'Nauman', cgpa: 1.5 },
        { id: 104, name: 'Saad', cgpa: 2.4 },
    ])

    const showStudent = ({ item }) => {
        return (
            <View style={{
                margin: 10, borderWidth: 3, borderRadius: 10,
                padding: 5, flexDirection: 'row', alignContent: 'center',
                justifyContent: 'center'
            }}>
                <View>
                    <Text style={{
                        fontSize: 35, color: 'black',
                        margin: 1,
                    }}>Name: {item.name}</Text>
                    <Text style={{
                        fontSize: 35, color: 'purple',
                        margin: 5,
                    }}>CGPA:  {item.cgpa}</Text>
                </View>

                <View style={{
                    justifyContent: 'center',
                    width: '30%', backgroundColor: 'yellow',
                }}>
                    <Button title='View' onPress={() => {
                        let val = item.id + '\n' + item.name + '\n' + item.cgpa;
                        Alert.alert(val)
                    }}></Button>
                    <Button title='Delete' onPress={() => { deleteStudent(item.id) }} />
                </View>
            </View >
        );
    }
    return (
        <View style={{ flex: 1, padding: 10, }}>
            <View>
                <TextInput placeholder="Enter Name"
                    style={{ fontSize: 30, color: "black", margin: 4, borderWidth: 2, borderColor: 'blue' }}
                    onChangeText={setName} />
                <TextInput placeholder="Enter CGPA"
                    style={{ fontSize: 30, color: "black", margin: 4, borderWidth: 2, borderColor: 'blue' }}
                    onChangeText={setCGPA} />
                <Button title='Add' onPress={addToList} />
            </View>
            <FlatList
                data={students}
                renderItem={showStudent} />
        </View>
    );
}

export default ShowImage;





