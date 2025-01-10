import { styleText } from "node:util"; // Import von styleText aus util
import promptSync from "prompt-sync"; // Import von prompt-sync
const prompt = promptSync(); // Erzeugen einer prompt-Synchronisation
const jetzt = new Date();

console.log("Willkommen zur Wetter-App!"); // Ausgabe eines Textes

let input = prompt("Für welche Stadt möchtest du das Wetter wissen? "); // Eingabeaufforderung
let input2 = styleText("yellow", input); // Eingabe wird gelb dargestellt

let temperature = Math.floor(Math.random() * 10); // Zufällige Temperatur zwischen 0 und 9
displayWeather(); // Aufruf der Funktion displayWeather
//console.log("Temperatur in", input + ":", output, "Grad"); // console.log mit 3 Parameter

function displayWeather() {
  let output = styleText("blue", temperature + ""); // + '' --> erzeugt String
  const time = `${jetzt.toLocaleTimeString()} Uhr`; // Erzeugen einer Konstanten
  const weatherOutput = `Die Temperatur in ${input2} beträgt ${output} Grad. Stand: ${time}`; // Erzeugen eines Strings mit Template-String
  console.log(weatherOutput);
  let weatherCond = temperature > 5 ? "warm" : "kalt"; // Ternärer Operator
  console.log(`Es ist ${weatherCond} in ${input2}.`); // Ausgabe des Wetters
}
