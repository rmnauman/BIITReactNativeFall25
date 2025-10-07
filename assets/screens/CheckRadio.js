import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { RadioButton, Checkbox } from "react-native-paper";

const CheckRadio = () => {
    // Product list
    const products = [
        { name: "Burger", price: 350 },
        { name: "Pizza", price: 800 },
        { name: "Fries", price: 200 },
        { name: "Sandwich", price: 300 },
    ];

    // Radio: selected product
    const [selectedProduct, setSelectedProduct] = React.useState("Burger");

    // Checkboxes
    const [discountApplied, setDiscountApplied] = React.useState(false);
    const [deliveryIncluded, setDeliveryIncluded] = React.useState(false);

    // Bill states
    const [bill, setBill] = React.useState(null);
    const [invoice, setInvoice] = React.useState([]);

    // Function to calculate bill
    const handleCalculateBill = () => {
        const product = products.find((p) => p.name === selectedProduct);
        let total = product.price;
        let details = [`Product: ${product.name}`, `Base Price: Rs. ${product.price}`];

        // Apply discount
        if (discountApplied) {
            total -= total * 0.1; // 10% discount
            details.push("Discount: 10%");
        }

        // Add delivery charges
        if (deliveryIncluded) {
            total += 100;
            details.push("Delivery: Rs. 100");
        }

        setBill(total);
        setInvoice(details);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>🍔 Point of Sale System</Text>

            {/* Product Selection */}
            <Text style={styles.sectionTitle}>Select Product:</Text>
            <RadioButton.Group onValueChange={setSelectedProduct} value={selectedProduct}>
                {products.map((item) => (
                    <RadioButton.Item
                        key={item.name}
                        label={`${item.name} — Rs. ${item.price}`}
                        value={item.name}
                    />
                ))}
            </RadioButton.Group>

            {/* Options */}
            <Text style={styles.sectionTitle}>Select Options:</Text>

            <View style={styles.checkboxRow}>
                <Checkbox
                    status={discountApplied ? "checked" : "unchecked"}
                    onPress={() => setDiscountApplied(!discountApplied)}
                />
                <Text style={styles.label}>Apply 10% Discount</Text>
            </View>

            <View style={styles.checkboxRow}>
                <Checkbox
                    status={deliveryIncluded ? "checked" : "unchecked"}
                    onPress={() => setDeliveryIncluded(!deliveryIncluded)}
                />
                <Text style={styles.label}>Include Delivery Charges (Rs. 100)</Text>
            </View>

            {/* Button */}
            <View style={{ marginVertical: 20 }}>
                <Button title="🧾 Generate Invoice" onPress={handleCalculateBill} />
            </View>

            {/* Invoice */}
            {bill !== null && (
                <View style={styles.invoiceBox}>
                    <Text style={styles.invoiceTitle}>🧾 Invoice</Text>
                    {invoice.map((line, index) => (
                        <Text key={index} style={styles.invoiceText}>
                            {line}
                        </Text>
                    ))}
                    <Text style={styles.totalText}>Total Bill: Rs. {bill.toFixed(0)}</Text>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 28,
        color: "purple",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 22,
        color: "darkblue",
        marginBottom: 10,
    },
    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        color: "black",
    },
    invoiceBox: {
        marginTop: 20,
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    invoiceTitle: {
        fontSize: 24,
        color: "green",
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    invoiceText: {
        fontSize: 18,
        color: "black",
        marginVertical: 2,
    },
    totalText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "blue",
        marginTop: 10,
        textAlign: "right",
    },
});

export default CheckRadio;





// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { Checkbox, RadioButton } from 'react-native-paper';

// export default function CheckRadio() {

//     const [gender, setGender] = useState('Male')
//     return (
//         <View style={{ padding: 20 }}>
//             <RadioButton.Group
//                 onValueChange={setGender}
//                 value={gender}
//             >
//                 <View style={{ flexDirection: 'row' }}>
//                     <RadioButton value='Male' />
//                     <Text style={{ fontSize: 30 }}>Male</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row' }}>
//                     <RadioButton value='FeMale' />
//                     <Text style={{ fontSize: 30 }}>FeMale</Text>
//                 </View>
//             </RadioButton.Group>

//         </View>
//     );
// }







// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";
// import CheckBox from "@react-native-community/checkbox";



// const CheckRadio = () => {
//     const [subjects, setSubjects] = useState({
//         math: false,
//         physics: false,
//         chemistry: false,
//         english: false,
//     });


//     const [selected, setSelected] = useState(['Maths', 'English']);

//     function handleSubmit() {
//         // Convert selected checkboxes to list
//         // const chosen = Object.keys(subjects).filter((key) => subjects[key]);
//         let chosen = [];
//         if (subjects.math)
//             chosen.push('Maths')
//         if (subjects.english)
//             chosen.push('English')
//         if (subjects.physics)
//             chosen.push('Physics')
//         if (subjects.chemistry)
//             chosen.push('Chemistry')
//         setSelected(chosen);
//     }
//     // useEffect(handleSubmit, [subjects])
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>📘 Student Subject Selection</Text>

//             <View style={styles.checkboxRow}>
//                 <CheckBox
//                     value={subjects.math}
//                     onValueChange={(val) => setSubjects({ ...subjects, math: val })}
//                     tintColors={{ true: "green", false: "gray" }}
//                 />
//                 <Text style={styles.label}>Math</Text>
//             </View>

//             <View style={styles.checkboxRow}>
//                 <CheckBox
//                     value={subjects.physics}
//                     onValueChange={(val) => setSubjects({ ...subjects, physics: val })}
//                     tintColors={{ true: "green", false: "gray" }}
//                 />
//                 <Text style={styles.label}>Physics</Text>
//             </View>

//             <View style={styles.checkboxRow}>
//                 <CheckBox
//                     value={subjects.chemistry}
//                     onValueChange={(val) => setSubjects({ ...subjects, chemistry: val })}
//                     tintColors={{ true: "green", false: "gray" }}
//                 />
//                 <Text style={styles.label}>Chemistry</Text>
//             </View>

//             <View style={styles.checkboxRow}>
//                 <CheckBox
//                     value={subjects.english}
//                     onValueChange={(val) => setSubjects({ ...subjects, english: val })}
//                     tintColors={{ true: "green", false: "gray" }}
//                 />
//                 <Text style={styles.label}>English</Text>
//             </View>

//             <Button title="Show Selected Subjects" onPress={handleSubmit} />
//             <View>
//                 {selected.map(val => (
//                     <Text key={val} style={{ fontSize: 19, marginTop: 10, color: 'blue' }}>
//                         1 {val}
//                     </Text>
//                 ))}
//             </View>
//             {/* {selected.length > 0 && (
//                 <View style={{ marginTop: 20 }}>
//                     <Text style={styles.selectedTitle}>✅ Selected Subjects:</Text>

//                 </View>
//             )} */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 25,
//         marginTop: 40,
//     },
//     title: {
//         fontSize: 26,
//         fontWeight: "bold",
//         textAlign: "center",
//         color: "purple",
//         marginBottom: 25,
//     },
//     checkboxRow: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginVertical: 8,
//     },
//     label: {
//         fontSize: 20,
//         color: "black",
//     },
//     selectedTitle: {
//         fontSize: 22,
//         color: "green",
//         marginBottom: 5,
//     },
//     selectedItem: {
//         fontSize: 18,
//         marginLeft: 15,
//         color: "blue",
//     },
// });

// export default CheckRadio;
