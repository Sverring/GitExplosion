var randomBodyParts = ["вагина", "очко", "яйца"];
var randomAdjectives = ["вонючая", "унылая", "грязная"];
var randomAnimalBodyParts = ["ухо", "горло","член", "глаз", "нога"];
var randomAnimals = ["ослихи", "тигра", "мыши", "овцы", "козла"];
var randomBodyPart = randomBodyParts [Math.floor (Math.random ()*randomBodyParts.length)];
var randomAdjective = randomAdjectives [Math.floor (Math.random ()*randomAdjectives.length)];
var randomAnimalBodyPart = randomAnimalBodyParts [Math.floor (Math.random ()*randomAnimalBodyParts.length)];
var randomAnimal = randomAnimals [Math.floor (Math.random ()*randomAnimals.length)];
var Result = ("У тебя"+" "+randomBodyPart+" "+"еще более "+randomAdjective+" ,чем "+randomAnimalBodyPart+" у "+randomAnimal);
Result;


