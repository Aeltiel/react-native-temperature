import { ImageBackground, Text, View } from "react-native";
import appStyle from "./Styles/App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";

export default function App() {
  return (
    <ImageBackground source={hotBackground} style={appStyle.container}>
      <View style={appStyle.center}>
        <View>
          <Text>Température</Text>
        </View>
        <View>
          <Text>Input</Text>
        </View>
        <View>
          <Text>Bouton</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
