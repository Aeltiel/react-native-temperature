import { ImageBackground, Text, View } from "react-native";
import appStyle from "./Styles/App.style";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import InputTemperature from "./Components/InputTemperature";
import TemperatureDisplay from "./Components/TemperatureDisplay";
import { useState } from "react";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNITS } from "./constante";
import {
  getOppositUnit,
  convertTemperatureTo,
} from "./Services/temperature-service";

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNITS);
  // const pour enregistré l'opposer de l'unoté courante
  const oppositUnit = getOppositUnit(currentUnit);

  //fonction pour controler l'affichage de la température (limation du nombre de chiffre après la" ,"" par ex)
  function getControlTemperature() {
    // pour transformé un nombre en nombre à virgule
    const valueAsFloat = Number.parseFloat(inputValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppositUnit, valueAsFloat).toFixed(1); //toFixed() permet de régler le nombre de nombre aprè la virgule
  }

  return (
    <ImageBackground source={hotBackground} style={appStyle.container}>
      <View style={appStyle.center}>
        <TemperatureDisplay
          value={getControlTemperature()}
          unit={oppositUnit}
        />
        {/* onChangeText est une props qui prend le setter pour faire un callback dans le composant */}
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
        />
        <View>
          <Text>Bouton</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
