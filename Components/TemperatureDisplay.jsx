import { Text } from "react-native";
import displayStyle from "../Styles/displayStyle.style";

function TemperatureDisplay({ value, unit }) {
  return (
    <Text style={displayStyle.txt}>
      {value} {unit}
    </Text>
  );
}
export default TemperatureDisplay;
