import { Text, TouchableOpacity } from "react-native";
import buttonStyle from "../Styles/button.style";

function Button({ unit, onPress }) {
  return (
    <TouchableOpacity style={buttonStyle.btn} onPress={onPress}>
      <Text style={buttonStyle.txt}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
}
export default Button;
