import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Alert,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { RadioButton } from 'react-native-paper';
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(false);

const db = SQLite.openDatabase({ name: 'employee.db' });

const DBStorage = () => {
    const [cnic, setCnic] = useState('');
    const [name, setName] = useState('');
    const [province, setProvince] = useState('');
    const [gender, setGender] = useState('Male');
    const [employees, setEmployees] = useState([]);
    const [isEditing, setIsEditing] = useState(false); // flag to toggle between Save/Update

    const provinces = [
        { label: 'Punjab', value: 'Punjab' },
        { label: 'Sindh', value: 'Sindh' },
        { label: 'KPK', value: 'KPK' },
        { label: 'Balochistan', value: 'Balochistan' },
        { label: 'Gilgit-Baltistan', value: 'Gilgit-Baltistan' },
    ];

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS employee (id INTEGER PRIMARY KEY AUTOINCREMENT, cnic TEXT UNIQUE, name TEXT, province TEXT, gender TEXT)',
                [],
                () => console.log('Table ready'),
                error => console.log('Error creating table:', error)
            );
        });
        fetchEmployees();
    }, []);

    const saveEmployee = () => {
        if (!cnic || !name || !province || !gender) {
            Alert.alert('Missing Fields', 'Please fill in all fields.');
            return;
        }

        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO employee (cnic, name, province, gender) VALUES (?, ?, ?, ?)',
                [cnic, name, province, gender],
                () => {
                    console.log('Employee added successfully');
                    fetchEmployees();
                    resetForm();
                },
                error => {
                    if (error.message.includes('UNIQUE constraint')) {
                        Alert.alert('Error', 'Employee with this CNIC already exists.');
                    } else {
                        console.log('Insert error:', error);
                    }
                }
            );
        });
    };

    const updateEmployee = () => {
        if (!cnic || !name || !province || !gender) {
            Alert.alert('Missing Fields', 'Please fill in all fields.');
            return;
        }

        db.transaction(tx => {
            tx.executeSql(
                'UPDATE employee SET name=?, province=?, gender=? WHERE cnic=?',
                [name, province, gender, cnic],
                (_, result) => {
                    if (result.rowsAffected > 0) {
                        Alert.alert('Success', 'Employee updated successfully');
                        fetchEmployees();
                        resetForm();
                    } else {
                        Alert.alert('Error', 'No employee found with this CNIC');
                    }
                },
                error => console.log('Update error:', error)
            );
        });
    };

    const deleteEmployee = () => {
        if (!cnic) {
            Alert.alert('Error', 'Please enter CNIC to delete.');
            return;
        }

        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM employee WHERE cnic=?',
                [cnic],
                (_, result) => {
                    if (result.rowsAffected > 0) {
                        Alert.alert('Deleted', 'Employee record deleted.');
                        fetchEmployees();
                        resetForm();
                    } else {
                        Alert.alert('Not Found', 'No employee found with this CNIC.');
                    }
                },
                error => console.log('Delete error:', error)
            );
        });
    };

    const fetchEmployees = () => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM employee',
                [],
                (tx, results) => {
                    let rows = [];
                    for (let i = 0; i < results.rows.length; i++)
                        rows.push(results.rows.item(i));
                    setEmployees(rows);
                },
                error => console.log('Select error:', error)
            );
        });
    };

    const resetForm = () => {
        setCnic('');
        setName('');
        setProvince('');
        setGender('Male');
        setIsEditing(false);
    };

    const handleItemPress = item => {
        setCnic(item.cnic);
        setName(item.name);
        setProvince(item.province);
        setGender(item.gender);
        setIsEditing(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Employee Registration</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter CNIC"
                value={cnic}
                onChangeText={setCnic}
                editable={!isEditing ? true : false} // CNIC not editable in update mode
            />
            <TextInput
                style={styles.input}
                placeholder="Enter Name"
                value={name}
                onChangeText={setName}
            />

            <Dropdown
                style={styles.dropdown}
                data={provinces}
                labelField="label"
                valueField="value"
                placeholder="Select Province"
                value={province}
                onChange={item => setProvince(item.value)}
            />

            <Text style={styles.label}>Select Gender:</Text>
            <View style={styles.radioGroup}>
                <View style={styles.radioItem}>
                    <RadioButton
                        value="Male"
                        status={gender === 'Male' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Male')}
                    />
                    <Text style={styles.radioLabel}>Male</Text>
                </View>

                <View style={styles.radioItem}>
                    <RadioButton
                        value="Female"
                        status={gender === 'Female' ? 'checked' : 'unchecked'}
                        onPress={() => setGender('Female')}
                    />
                    <Text style={styles.radioLabel}>Female</Text>
                </View>
            </View>

            {/* SAVE or UPDATE button */}
            <TouchableOpacity
                style={[styles.button, { backgroundColor: isEditing ? '#4CAF50' : '#2196f3' }]}
                onPress={isEditing ? updateEmployee : saveEmployee}
            >
                <Text style={styles.buttonText}>
                    {isEditing ? 'Update Employee' : 'Save Employee'}
                </Text>
            </TouchableOpacity>

            {/* DELETE button (only visible when editing) */}
            {isEditing && (
                <TouchableOpacity style={styles.deleteButton} onPress={deleteEmployee}>
                    <Text style={styles.deleteText}>Delete Employee</Text>
                </TouchableOpacity>
            )}

            <Text style={styles.subTitle}>Saved Employees:</Text>

            <FlatList
                data={employees}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleItemPress(item)}>
                        <View style={styles.listItem}>
                            <Text style={styles.listText}>
                                {item.name} ({item.gender}) - {item.province}
                            </Text>
                            <Text style={styles.listCnic}>{item.cnic}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default DBStorage;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
    },
    dropdown: {
        height: 50,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
    label: { marginTop: 10, fontSize: 16, fontWeight: '600' },
    radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    radioLabel: { fontSize: 16 },
    button: {
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    deleteButton: {
        backgroundColor: '#f44336',
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        alignItems: 'center',
    },
    deleteText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    subTitle: { marginTop: 15, fontWeight: 'bold', fontSize: 18 },
    listItem: {
        backgroundColor: '#e0f7fa',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    listText: { fontSize: 16, fontWeight: '500' },
    listCnic: { fontSize: 14, color: '#555' },
});
