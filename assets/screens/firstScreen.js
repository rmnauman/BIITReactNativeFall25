import React from "react";
import { Text, View } from "react-native";

const FirstScreen = () => {
    return (
        <View style={{ backgroundColor: 'yellow', flex: 1, }}>
            <View style={{ flexDirection: 'row', }}>
                <Text>Pakistan Zindabad</Text>
                <Text>Assalam o Alaikum Wr Wb</Text>
            </View>
        </View>
    );
}
export default FirstScreen;
