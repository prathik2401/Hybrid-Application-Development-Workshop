import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    button: {
        width: 100,
        height: 70,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 24,
        color: 'black',
    },
});

export default Calculator;