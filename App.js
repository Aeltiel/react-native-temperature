import { ImageBackground, Text, View } from "react-native";
import appStyle from "./Styles/App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import InputTemperature from "./Components/InputTemperature";

export default function App() {
  return (
    <ImageBackground source={hotBackground} style={appStyle.container}>
      <View style={appStyle.center}>
        <View>
          <Text>Température</Text>
        </View>
        <InputTemperature defaultValue={"12"} />
        <View>
          <Text>Bouton</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
