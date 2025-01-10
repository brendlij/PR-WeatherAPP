import { styleText } from "node:util"; // Import von styleText aus util
import promptSync from "prompt-sync"; // Import von prompt-sync
const prompt = promptSync(); // Erzeugen einer prompt-Synchronisation

console.log("Willkommen zur Wetter-App!"); // Ausgabe eines Textes

let input = prompt("Für welche Stadt möchtest du das Wetter wissen? "); // Eingabeaufforderung

let temperature = Math.floor(Math.random() * 10); // Zufällige Temperatur zwischen 0 und 9
let output = styleText("blue", temperature + ""); // + '' --> erzeugt String

console.log("Temperatur in", input + ":", output, "Grad"); // console.log mit 3 Parameter
