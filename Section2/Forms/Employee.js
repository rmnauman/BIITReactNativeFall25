import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";


const Employee = () => {

    const [fries, setFries] = useState(false);
    const [ashami, setAshami] = useState(false);
    const [shawarma, setShwarma] = useState(false);
    const [bill, setBill] = useState(0)
    const [show, setShow] = useState(false)

    const Calculate = () => {
        setShow(true)
        let tb = 0;
        tb += fries ? 200 : 0;
        tb += ashami ? 150 : 0;
        tb += shawarma ? 120 : 0;
        setBill(tb)
    }
    return (
        <View>
            <View style={{ flex: 1, }}>
                <Text style={{
                    fontSize: 40, textAlign: 'center', color: 'purple',
                    backgroundColor: 'lightgrey', padding: 20, margin: 20,
                }}> POS</Text>
            </View>
            <View style={{ borderWidth: 2, margin: 10, borderRadius: 10, padding: 10, }}>
                {
                    // checkboxes wala
                }
                <View style={{ flexDirection: 'row', }}>
                    <Checkbox
                        status={fries ? 'checked' : 'unchecked'}
                        onPress={() => { setFries(!fries) }}
                    />
                    <Text style={{ fontSize: 25, color: 'black' }}> Fries (200)</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        status={ashami ? 'checked' : 'unchecked'}
                        onPress={() => { setAshami(!ashami) }}
                    />
                    <Text style={{ fontSize: 25, color: 'black' }}> Anda Shami (150)</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Checkbox
                        status={shawarma ? 'checked' : 'unchecked'}
                        onPress={function () { setShwarma(!shawarma) }}
                    />
                    <Text style={{ fontSize: 25, color: 'black' }}> Shawarma (120)</Text>
                </View>
            </View>

            <View style={{ width: '80%', alignSelf: 'center', margin: 20, }}>
                <Button title='Calculate'
                    onPress={Calculate}
                />
            </View>

            {show &&
                <View style={{
                    borderWidth: 2, padding: 15, margin: 15,
                    borderRadius: 15, borderColor: 'green',
                    height: '30%'
                }}>
                    <Text style={{ fontSize: 30, color: 'blue', }}>
                        Total Bill = {bill}
                    </Text>
                </View>
            }


        </View>
    );
}


// const Employee = () => {

//     const [ms, setMS] = useState(false);
//     return (
//         <View style={{ flex: 1, padding: 10, backgroundColor: ms ? 'green' : 'red', }}>
//             <View style={{ flexDirection: 'row' }}>
//                 <Checkbox
//                     status={ms ? 'checked' : 'unchecked'}
//                     onPress={() => { setMS(!ms); }} />
//                 <Text style={{ fontSize: 25, color: 'black', }}>Married</Text>
//             </View>


//         </View>
//     );
// }

export default Employee;