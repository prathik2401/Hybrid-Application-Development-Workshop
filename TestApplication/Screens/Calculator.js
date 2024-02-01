import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const Calculator = () => {
    return (
        <View style={styles.container}>
                <TextInput style={styles.inputContainer}>123</TextInput>
            <View style={styles.row}>
                <TouchableOpacity style={styles.operationButton}>
                    <Text style={styles.operationButtonText}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton}>
                    <Text style={styles.operationButtonText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton}>
                    <Text style={styles.operationButtonText}>⌫</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton}>
                    <Text style={styles.operationButtonText}>&#247;</Text>
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
                <TouchableOpacity style={styles.operationButton}>
                    <Text style={styles.operationButtonText}>×</Text>
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
                <TouchableOpacity style={styles.operationButton}>
                    <Text style={styles.operationButtonText}>−</Text>
                </TouchableOpacity>
            </View>
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
                <TouchableOpacity style={styles.operationButton}>
                    <Text style={styles.operationButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.equalSymbol}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#ebebeb',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    inputContainer: {
        borderRadius: 5,
        borderColor: '#1F2544',
        borderWidth: 0.1,
        width: 370,
        height: 100,
        paddingLeft: 20,
        marginBottom: 45,
        textAlign: 'right',
        fontSize: 45,
      },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 4,
        paddingBottom: 4,
    },
    button: {
        width: 85,
        height: 62,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        borderRadius: 10,
    },
    operationButton: {
        width: 85,
        height: 62,
        backgroundColor: '#26ace2',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        borderRadius: 10,
    },
    equalSymbol: {
        width: 85,
        height: 62,
        backgroundColor: '#f58220',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 24,
        color: 'black',
    },
    operationButtonText: {
        fontSize: 24,
        color: 'white',
    },
});

export default Calculator;