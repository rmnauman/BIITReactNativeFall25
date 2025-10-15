import React, { useState } from "react";
import { Button, FlatList, Image, Text, View } from "react-native";

const Image_List = () => {
    const [city, setCity] = useState([
        { id: 101, name: 'RWP', Province: 'Punjab', population: '8M' },
        { id: 101, name: 'LHR', Province: 'Punjab', population: '15M' },
        { id: 101, name: 'KHI', Province: 'Sindh', population: '30M' },
        { id: 101, name: 'QTA', Province: 'Balochistan', population: '2M' },
        { id: 101, name: 'PSW', Province: 'KPK', population: '4M' },
    ])

    const showCities = ({ item }) => {
        return (
            <View style={{ margin: 5, padding: 5, backgroundColor: 'yellow', }}>
                <Text style={{ fontSize: 35, }}> {item.Province}</Text>
                <Text style={{ fontSize: 20, }}> {item.name}</Text>

            </View>
        );
    }
    return (
        <View>
            <FlatList
                style={{ width: '80%', height: '60%', borderColor: 'black', borderWidth: 2, }}
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