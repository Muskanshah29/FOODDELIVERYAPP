import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

const DetailScreen = () => {

    const handlePlaceOrder = () => {
        // Show a pop-up message to confirm the order
        Alert.alert(
            "Order Confirmed",
            "Your order has been successfully placed!",
            [
                { text: "OK", onPress: () => console.log("Order confirmed") }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ alignSelf: 'center' }}>
                <Image
                    source={require('../asset/images/b11.png')}
                />
            </View>
            <View style={{ margin: 10 }}>
                <Text style={styles.title}>Hamburger Veggie Burger</Text>
                <Text>Enjoy our delicious Hamburger Veggie Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes, and tangy pickles, all served on a soft, toasted bun. </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText}>Price: $9.99</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={handlePlaceOrder}>
                        <Text style={styles.buttonText}>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button1: {
        backgroundColor: 'brown',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    button2: {
        backgroundColor: 'brown',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
