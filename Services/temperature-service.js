import { UNITS } from "../constante";

//function pour savoir quelle est l'unité actuel de température
function getOppositUnit(unit) {
  return unit == UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

//function de conversion
function convertTemperatureTo(unit, value) {
  if (unit == UNITS.celcius) {
    //le calcul est celui de conversion pour aller des faranheit vers les degrés celcius
    return (value - 32) / 1.8;
  } else {
    // le calcul est celui de conversion pour aller des degré celcius vers les franheit
    return value * 1.8 + 32;
  }
}

//fonction pour changer le background en fonction de la température
function isIceTemperature(value, unit) {
  if (unit == UNITS.celcius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
}

export { getOppositUnit, convertTemperatureTo, isIceTemperature };
