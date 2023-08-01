import { UNITS } from "../constante";

function getOppositUnit(unit) {
  return unit == UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
}

function convertTemperatureTo(unit, value) {
  if (unit == UNITS.celcius) {
    //le calcul est celui de conversion pour aller des faranheit vers les degrés celcius
    return (value - 32) / 1.8;
  } else {
    // le calcul est celui de conversion pour aller des degré celcius vers les franheit
    return value * 1.8 + 32;
  }
}

export { getOppositUnit, convertTemperatureTo };
