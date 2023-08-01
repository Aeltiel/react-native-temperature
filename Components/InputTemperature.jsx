import { Text, TextInput, View } from "react-native";
import inputStyle from "../Styles/inputStyle.style";

function InputTemperature({ defaultValue, onChangeText }) {
  return (
    <View style={inputStyle.container}>
      <TextInput
        style={inputStyle.input}
        placeholder="Tape une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={inputStyle.txt}>°C</Text>
    </View>
  );
}
export default InputTemperature;
