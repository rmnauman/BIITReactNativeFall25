// import React, { useState } from 'react';
// import { View, Text, FlatList, TextInput, StyleSheet, Image, Alert } from 'react-native';
// import { Button } from 'react-native-paper';

// const App = () => {
//     const [students, setStudents] = useState([
//         { id: '1', name: 'Ahmad' },
//         { id: '2', name: 'Sara' },
//         { id: '3', name: 'Bilal' },
//     ]);
//     const [newStudent, setNewStudent] = useState('');

//     const addStudent = () => {
//         if (newStudent.trim() === '') {
//             Alert.alert('Error', 'Please enter student name');
//             return;
//         }

//         const newEntry = {
//             id: Date.now().toString(),
//             name: newStudent.trim(),
//         };
//         setStudents([...students, newEntry]);
//         setNewStudent('');
//     };

//     const deleteStudent = (id, name) => {
//         setStudents(students.filter(s => s.id !== id));
//         Alert.alert('Deleted', `${name} has been removed successfully.`);
//     };

//     const renderItem = ({ item }) => (
//         <View style={styles.listItem}>
//             <Text style={styles.studentName}>{item.name}</Text>
//             <Button
//                 mode="contained"
//                 onPress={() => deleteStudent(item.id, item.name)}
//                 buttonColor="#e63946"
//                 textColor="#fff"
//                 style={styles.deleteBtn}
//             >
//                 Delete
//             </Button>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             {/* University Logo */}
//             <Image
//                 source={require('./assets/university_logo.png')} // 👈 replace with your actual file
//                 style={styles.logo}
//                 resizeMode="contain"
//             />

//             <Text style={styles.heading}>Register Student</Text>

//             {/* Input Section */}
//             <View style={styles.inputContainer}>
//                 <TextInput
//                     placeholder="Enter student name"
//                     placeholderTextColor="#666"
//                     value={newStudent}
//                     onChangeText={setNewStudent}
//                     style={styles.input}
//                 />
//                 <Button
//                     mode="contained"
//                     buttonColor="#0077b6"
//                     onPress={addStudent}
//                     style={styles.addBtn}
//                 >
//                     Add Student
//                 </Button>
//             </View>

//             {/* Student List */}
//             <FlatList
//                 data={students}
//                 keyExtractor={item => item.id}
//                 renderItem={renderItem}
//                 style={styles.list}
//                 contentContainerStyle={{ paddingBottom: 40 }}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f1faee',
//         paddingHorizontal: 20,
//         paddingTop: 50,
//     },
//     logo: {
//         width: 160,
//         height: 100,
//         alignSelf: 'center',
//         marginBottom: 20,
//     },
//     heading: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         color: '#1d3557',
//         textAlign: 'center',
//         marginBottom: 15,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 15,
//     },
//     input: {
//         flex: 1,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         fontSize: 16,
//         height: 50,
//         marginRight: 10,
//         borderWidth: 1,
//         borderColor: '#a8dadc',
//     },
//     addBtn: {
//         height: 50,
//         justifyContent: 'center',
//         borderRadius: 10,
//     },
//     list: {
//         marginTop: 10,
//     },
//     listItem: {
//         backgroundColor: '#fff',
//         borderRadius: 12,
//         padding: 15,
//         marginVertical: 6,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         elevation: 3,
//     },
//     studentName: {
//         fontSize: 18,
//         color: '#1d3557',
//         fontWeight: '500',
//     },
//     deleteBtn: {
//         borderRadius: 10,
//     },
// });

// export default App;


// // import React, { useState } from 'react';
// // import { View, Text, FlatList, StyleSheet } from 'react-native';
// // import { TextInput, Button } from 'react-native-paper';

// // const App = () => {
// //     // const [students, setStudents] = useState([
// //     //     { id: '1', name: 'Ahmad' },
// //     //     { id: '2', name: 'Ali' },
// //     //     { id: '3', name: 'Sara' },
// //     // ]);
// //     const [students, setStudents] = useState([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,])
// //     const [newName, setNewName] = useState('');

// //     // Function to add student
// //     const addStudent = () => {
// //         if (newName.trim() === '') return;
// //         const newStudent = { id: (students.length + 1).toString(), name: newName };
// //         setStudents([...students, newStudent]);
// //         setNewName('');
// //     };

// //     // Function to render each student
// //     const renderStudent = ({ item }) => {
// //         return (
// //             <View style={styles.itemContainer}>
// //                 <Text style={styles.itemText}>{item}</Text>
// //             </View>
// //         )
// //     }

// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.heading}>Student List</Text>

// //             <TextInput
// //                 label="Enter Student Name"
// //                 mode="outlined"
// //                 value={newName}
// //                 onChangeText={setNewName}
// //                 style={styles.input}
// //             />

// //             <Button
// //                 mode="contained"
// //                 onPress={addStudent}
// //                 style={styles.addButton}
// //                 buttonColor="#007BFF"
// //             >
// //                 Add Student
// //             </Button>

// //             <FlatList
// //                 data={students}
// //                 renderItem={renderStudent}
// //                 keyExtractor={(item) => item.id}
// //                 contentContainerStyle={styles.listContainer}
// //             />
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         padding: 20,
// //         backgroundColor: '#F5F9FF',
// //     },
// //     heading: {
// //         fontSize: 22,
// //         fontWeight: 'bold',
// //         textAlign: 'center',
// //         marginBottom: 20,
// //     },
// //     input: {
// //         marginBottom: 10,
// //         backgroundColor: 'white',
// //     },
// //     addButton: {
// //         marginBottom: 20,
// //         borderRadius: 8,
// //     },
// //     listContainer: {
// //         paddingBottom: 20,
// //     },
// //     itemContainer: {
// //         backgroundColor: '#E3F2FD',
// //         padding: 12,
// //         marginBottom: 8,
// //         borderRadius: 8,
// //     },
// //     itemText: {
// //         fontSize: 18,
// //         color: '#333',
// //     },
// // });

// // export default App;


// // // // import React, { useState } from 'react';
// // // // import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
// // // // import { Checkbox } from 'react-native-paper'; // using react-native-paper checkbox

// // // // const Lists = () => {

// // // //     const [data, setData] = useState([
// // // //         { id: 1, name: 'Item 1', status: false },
// // // //         { id: 2, name: 'Item 2', status: true },
// // // //         { id: 3, name: 'Item 3', status: false },
// // // //     ]);

// // // //     const toggleCheckbox = (id) => {
// // // //         const updatedData = data.map((item) =>
// // // //             item.id === id ? { ...item, status: !item.status } : item
// // // //         );
// // // //         setData(updatedData);
// // // //     };

// // // //     const renderItem = ({ item }) => (
// // // //         <View style={styles.itemContainer}>
// // // //             <Text style={styles.text}>{item.name}</Text>

// // // //             <View style={styles.rightContainer}>
// // // //                 <Checkbox
// // // //                     status={item.status ? 'checked' : 'unchecked'}
// // // //                     onPress={() => toggleCheckbox(item.id)}
// // // //                 />
// // // //                 <Button
// // // //                     title={item.status ? 'Uncheck' : 'Check'}
// // // //                     onPress={() => toggleCheckbox(item.id)}
// // // //                 />
// // // //             </View>
// // // //         </View>
// // // //     );

// // // //     return (
// // // //         <View style={styles.container}>
// // // //             <FlatList
// // // //                 data={data}
// // // //                 keyExtractor={(item) => item.id.toString()}
// // // //                 renderItem={renderItem}
// // // //             />
// // // //         </View>
// // // //     );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //     container: {
// // // //         flex: 1,
// // // //         padding: 15,
// // // //     },
// // // //     itemContainer: {
// // // //         flexDirection: 'row',
// // // //         alignItems: 'center',
// // // //         justifyContent: 'space-between',
// // // //         paddingVertical: 10,
// // // //         borderBottomWidth: 1,
// // // //         borderColor: '#ddd',
// // // //     },
// // // //     rightContainer: {
// // // //         flexDirection: 'row',
// // // //         alignItems: 'center',
// // // //         gap: 10,
// // // //     },
// // // //     text: {
// // // //         fontSize: 18,
// // // //     },
// // // // });

// // // // export default Lists;


// // // import React, { useState } from "react";
// // // import { View, Text, Button, FlatList, Image } from "react-native";
// // // import { Checkbox, TextInput } from "react-native-paper";


// // // const Lists = () => {
// // //     const [cities, setCities] = useState([
// // //         { id: 101, name: "RWP", status: false, },
// // //         { id: 102, name: "LHR", status: false, },
// // //         { id: 103, name: "khi", status: false },
// // //         { id: 104, name: "ISB", status: true },
// // //     ])
// // //     const [newCity, setNewCity] = useState('');
// // //     const addCity = () => {
// // //         let count = 101 + cities.length;
// // //         let found = cities.find(f => f.name === newCity);
// // //         if (!found) {
// // //             let obj = { id: count, name: newCity, status: false, }
// // //             setCities([...cities, obj])
// // //         }
// // //         else
// // //             console.warn('already exists')
// // //         console.log(cities)
// // //     }

// // //     function toggleItem(id) {
// // //         const updatedArray = cities.map((item) =>
// // //             item.id === id ? { ...item, status: !item.status } : item
// // //         )
// // //         setCities(updatedArray)
// // //     }

// // //     function showCities({ item }) {
// // //         return (
// // //             <View style={{ margin: 10, }}>

// // //                 <View style={{
// // //                     margin: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
// // //                     backgroundColor: item.status ? 'green' : 'orange', padding: 10,
// // //                 }}>
// // //                     <Image source={require("../Images/profile2.jpg")}
// // //                         style={{ width: 50, height: 50, alignSelf: 'center', borderRadius: 20, }}
// // //                     />
// // //                     <Text style={{ fontSize: 30, }}> {item.name} </Text>
// // //                     <Checkbox
// // //                         status={item.status ? 'checked' : 'unchecked'}
// // //                         onPress={() => { toggleItem(item.id); }}
// // //                     />
// // //                 </View>

// // //             </View>
// // //         );
// // //     }
// // //     return (
// // //         <View>












// // //             <View>
// // //                 <TextInput placeholder="Enter City"
// // //                     onChangeText={setNewCity} />
// // //                 <Button title='Add City' onPress={addCity} />
// // //             </View>
// // //             <View style={{ height: '70%' }}>
// // //                 <FlatList
// // //                     data={cities}
// // //                     renderItem={showCities}
// // //                 />
// // //             </View>
// // //         </View>
// // //     );
// // // }
// // // export default Lists;




