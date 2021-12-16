// Erstelle zwei Zufallszahl zwischen 0 und 100
let random = Math.random() * 100;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

random2 = Math.random() * 100;
randomAsInteger2 = Math.round(random2);
console.log(randomAsInteger2);
// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if ((randomAsInteger < randomAsInteger2) && randomAsInteger < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini (<50)");
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
if ((randomAsInteger < 30) || randomAsInteger2 < 30) {
    console.log("Eine der beiden ist kleiner als 30");
}
// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger
if ((randomAsInteger < 50) && randomAsInteger != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}