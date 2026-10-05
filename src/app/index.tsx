import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState, useEffect } from 'react';

export default function Index() {
  let [result, setResult] = useState(0);
  const [value, setValue] = useState<string>('');

  const handleTextChange = (text: string) => {
    if (text === '' || /^\d*\.?\d{0,2}$/.test(text)) {
      setValue(text);
    }
  }

  const hasInput = value.trim().length > 0;

  function calculateTax(num: number) {
    console.log("Calculating tax by: ", num, "%")
    let percentage = num * 0.01
    setResult(+value + (+value * percentage))
    console.log(result)
    return result;
  }
  return (
    <View style={styles.container}>
      <Text>Tip Calculator</Text>
      <Text>Enter the billing amount</Text>
      <TextInput
        style={styles.input}
        placeholder="..."
        keyboardType="numeric"
        value={value}
        onChangeText={handleTextChange}
        ></TextInput>

        {hasInput && (
          <View>
            <Pressable
              onPress={() => [calculateTax(15), console.log("15% tapped")]
              }
            >
              <Text style={styles.text}>15%</Text>
              </Pressable>
              
            <Pressable
              onPress={() => [calculateTax(18), console.log("18% tapped")]
              }
            >
              <Text style={styles.text}>18%</Text>
              </Pressable>

            <Pressable
              onPress={() => [calculateTax(20), console.log("20% tapped")]
              }
            >
              <Text style={styles.text}>20%</Text>
              </Pressable>

            <Pressable
              onPress={() => [calculateTax(25), console.log("25% tapped")]
              }
            >
              <Text style={styles.text}>25%</Text>
              </Pressable>
          </View>
        )}


    <Text
    >
      Total Bill: {Math.round(result * 100) / 100
      }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1.5,       // Thickness of the outline
    borderColor: '#007AFF', // Outline color
    borderRadius: 8,        // Rounded corners
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  },

  text: {
    borderWidth: 1.5,       // Thickness of the outline
    borderColor: '#007AFF', // Outline color
    borderRadius: 8,        // Rounded corners
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
  }
});
