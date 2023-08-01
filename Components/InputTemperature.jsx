import { Text, TextInput, View } from "react-native";
import inputStyle from "../Styles/inputStyle.style";

function InputTemperature({ defaultValue }) {
  return (
    <View style={inputStyle.container}>
      <TextInput
        style={inputStyle.input}
        placeholder="Tape une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
      />
      <Text style={inputStyle.txt}>°C</Text>
    </View>
  );
}
export default InputTemperature;
