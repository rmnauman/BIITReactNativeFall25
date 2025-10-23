import React, { useState } from "react";
import { Alert, Button, FlatList, Image, Text, TextInput, View } from "react-native";

const Image_List = () => {

    const [newCity, setNewCity] = useState();
    const [city, setCity] = useState([
        { id: 101, name: 'RWP', Province: 'Punjab', population: '8M' },
        { id: 102, name: 'LHR', Province: 'Punjab', population: '15M' },
        { id: 103, name: 'KHI', Province: 'Sindh', population: '30M' },
        { id: 104, name: 'QTA', Province: 'Balochistan', population: '2M' },
        { id: 105, name: 'PSW', Province: 'KPK', population: '4M' },
    ])

    const deleteItem = (id) => {
        const newData = city.filter(c => c.id != id);
        setCity(newData)
    }

    const updateCity = (id) => {
        const newArray = [...city]
        newArray.forEach((c, ind) => {
            if (c.id == id) {
                newArray[ind].name = newCity
            }
        });
        setCity([...newArray])
        console.log(city)
    }

    const showCities = ({ item }) => {
        return (
            <View style={{
                margin: 5, padding: 5, backgroundColor: 'orange',
                flexDirection: 'row',
            }}>
                <View style={{ flex: 1, }}>
                    <Text style={{ fontSize: 35, color: 'white', }}> {item.Province}</Text>
                    <Text style={{ fontSize: 20, }}> {item.name}</Text>
                </View>
                <View style={{ flex: 1, gap: 10, }}>
                    <Button title='View' onPress={() => {
                        Alert.alert(item.id + '\t' + item.population)
                    }} />
                    <Button title='Delete' onPress={() => { deleteItem(item.id) }} />
                    <Button title='Update' onPress={() => { updateCity(item.id) }}></Button>
                </View>

            </View>
        );
    }
    return (
        <View style={{ padding: 10, }}>
            <TextInput
                onChangeText={setNewCity}
                placeholder="Enter City Name"
                style={{
                    borderWidth: 2, borderBlockColor: 'green', borderRadius: 10,
                    fontSize: 30,
                }}></TextInput>
            <FlatList
                style={{
                    width: '80%', height: '60%', alignSelf: 'center',
                    margin: 10, borderColor: 'black', borderWidth: 2,
                    borderRadius: 10, padding: 5,
                }}
                data={city}
                renderItem={showCities}
            />
        </View>
    );
}
export default Image_List;


// import React, { useState } from "react";
// import { Alert, Button, Text, TextInput, View } from "react-native";
// import { RadioButton } from "react-native-paper";

// const Image_List = () => {
//     const [prod, setProd] = useState('drink');
//     const [qty, setQty] = useState('')
//     const calcBill = () => {
//         let tb = 0;
//         tb += prod == 'drink' ? qty * 50 : prod == 'fries' ? qty * 150 : prod == 'burger' ? qty * 500 : 0;
//         Alert.alert('Total Bill = ' + tb);

//     }
//     return (
//         <View>
//             <View>
//                 <View style={{ flexDirection: 'row' }}>
//                     <RadioButton
//                         status={prod == 'drink' ? 'checked' : 'unchecked'}
//                         onPress={() => { setProd('drink') }}
//                     />
//                     <Text> Drink</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row' }}>
//                     <RadioButton
//                         status={prod == 'fries' ? 'checked' : 'unchecked'}
//                         onPress={() => { setProd('fries') }}
//                     />
//                     <Text> Fries</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row' }}>
//                     <RadioButton
//                         status={prod == 'burger' ? 'checked' : 'unchecked'}
//                         onPress={() => { setProd('burger') }}
//                     />
//                     <Text> Burger</Text>
//                 </View>
//             </View>
//             <View>
//                 <TextInput placeholder="Enter Qunatity"
//                     onChangeText={setQty} />
//             </View>
//             <Button title='Show Bill' onPress={calcBill} />
//         </View>
//     );
// }
// export default Image_List;