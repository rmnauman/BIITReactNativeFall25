import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const AgeCalculator = () => {
    const [age, setAge] = useState();
    const [cat, setCat] = useState();

    function getCategory() {
        if (age < 13)
            setCat('Child');
        else if (age < 20)
            setCat('Teen');
        else
            setCat('Adult')
    }
    return (
        <View style={ss.mView}>
            <View style={ss.vAll}>
                <Text style={ss.txt}>Age Calculator</Text>
            </View>

            <View style={ss.vAll}>
                <TextInput

                    onChangeText={setAge}
                    style={ss.txt} />
            </View>
            <View style={ss.vAll}>
                <Button
                    onPress={getCategory}
                    title='Calculate Age Category' />
            </View>

            <View style={ss.vAll}>
                <Text style={ss.txt}> Age Category:{cat}</Text>
            </View>
        </View>
    );
}

const ss = StyleSheet.create({
    mView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(166, 193, 233, 1)',
        padding: 10,
    },
    vAll: {
        margin: 10,
        width: '80%',
        backgroundColor: 'rgba(203, 249, 255, 1)',
        borderRadius: 10,
        borderColor: 'black',
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});
export default AgeCalculator;









