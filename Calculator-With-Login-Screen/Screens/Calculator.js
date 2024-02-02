import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';


const Calculator = () => {
    
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num) => { 
    if (displayValue === '0') { 
        setDisplayValue(num.toString()); 
    } else { 
        setDisplayValue(displayValue + num.toString()); 
    } 
}; 

const handleOperatorInput = (operator) => { 
    setOperator(operator); 
    setFirstValue(displayValue); 
    setDisplayValue('0'); 
}; 

const handleEqual = () => { 
    const num1 = parseFloat(firstValue); 
    const num2 = parseFloat(displayValue); 
    if (operator === '+') { 
        setDisplayValue((num1 + num2).toString()); 
    } else if (operator === '-') { 
        setDisplayValue((num1 - num2).toString()); 
    } else if (operator === '*') { 
        setDisplayValue((num1 * num2).toString()); 
    } else if (operator === '/') { 
        setDisplayValue((num1 / num2).toString()); 
    } 
    else if (operator === '%') { 
        setDisplayValue((num1 % num2).toString()); 
    }
    setOperator(null); 
    setFirstValue(''); 
}; 

const handleClear = () => { 
    setDisplayValue('0'); 
    setOperator(null); 
    setFirstValue(''); 
}; 

const handleBackspace = () => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const handleDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };
 
    return (
        <View style={styles.container}>
                <Text style={styles.inputContainer}>{displayValue}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.operationButton}  onPress={()=>handleClear()}>
                    <Text style={styles.operationButtonText}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton} onPress={() => handleOperatorInput('%')}>
                    <Text style={styles.operationButtonText}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton} onPress={() => handleBackspace()}>
                    <Text style={styles.operationButtonText}>⌫</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton} onPress={() => handleOperatorInput('/')}>
                    <Text style={styles.operationButtonText}>&#247;</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton} onPress={() => handleOperatorInput('*')}>
                    <Text style={styles.operationButtonText}>×</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton} onPress={() => handleOperatorInput('-')}>
                    <Text style={styles.operationButtonText}>−</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.operationButton} onPress={() => handleOperatorInput('+')}>
                    <Text style={styles.operationButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput('00')}>
                    <Text style={styles.buttonText}>00</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(0)}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleDecimal()}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.equalSymbol} onPress={() => handleEqual()}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    inputContainer: {
        borderRadius: 5,
        borderColor: '#1F2544',
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