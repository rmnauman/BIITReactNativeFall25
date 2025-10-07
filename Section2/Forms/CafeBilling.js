import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Keyboard,
} from "react-native";

export default function CafeBilling() {
    const [pizzaQty, setPizzaQty] = useState("");
    const [burgerQty, setBurgerQty] = useState("");
    const [friesQty, setFriesQty] = useState("");
    const [result, setResult] = useState("");

    // Prices
    const PIZZA_PRICE = 1000;
    const BURGER_PRICE = 500;
    const FRIES_PRICE = 300;

    const calculateBill = () => {
        // Hide keyboard
        Keyboard.dismiss();

        // Convert empty inputs to 0
        const pizza = parseInt(pizzaQty) || 0;
        const burger = parseInt(burgerQty) || 0;
        const fries = parseInt(friesQty) || 0;

        // ❌ Validation: No negative numbers allowed
        if (pizza < 0 || burger < 0 || fries < 0) {
            setResult("⚠️ Please enter valid (non-negative) quantities!");
            return;
        }

        const subtotal =
            pizza * PIZZA_PRICE + burger * BURGER_PRICE + fries * FRIES_PRICE;

        let discount = 0;
        if (subtotal > 2000) {
            discount = subtotal * 0.1; // 10% discount
        }

        const finalTotal = subtotal - discount;

        setResult(
            `Subtotal: Rs. ${subtotal}\nDiscount: Rs. ${discount}\nFinal Bill: Rs. ${finalTotal}`
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🍕 Café Billing App 🍔</Text>

            <Text style={styles.label}>Pizza (Rs. 1000):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter quantity"
                value={pizzaQty}
                onChangeText={setPizzaQty}
            />

            <Text style={styles.label}>Burger (Rs. 500):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter quantity"
                value={burgerQty}
                onChangeText={setBurgerQty}
            />

            <Text style={styles.label}>Fries (Rs. 300):</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Enter quantity"
                value={friesQty}
                onChangeText={setFriesQty}
            />

            <View style={styles.button}>
                <Button title="Calculate Bill" onPress={calculateBill} color="#1e90ff" />
            </View>

            <Text style={styles.result}>{result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    label: {
        fontSize: 16,
        marginTop: 10,
        color: "#444",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    button: {
        marginTop: 15,
        borderRadius: 8,
        overflow: "hidden",
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "600",
        color: "#222",
        textAlign: "center",
    },
});
