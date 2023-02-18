/*
The [adjective], [colour] [noun] [verb] [preposition] the [adjective] [noun].
eg "A quick brown fox jumps over the lazy dog."

5 lists: adjective, colour, noun, verb, preposition


*/

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function getAdjective(){
    adjectiveList = ["quick", "lazy", "large", "small", "smelly", "round", "sleepy", "energetic", "hyper", "lethargic", "witty", "clever", "dim", "bright"]
    return adjectiveList.random()
}

function getColour(){
    colourList = ["brown", "green", "purple", "red", "yellow", "black", "white", "blue", "orange"]
    return colourList.random()
}

function getNoun(){
    nounList = ["fox", "dog", "cat", "mouse", "elephant"]
    return nounList.random()
}

function getVerb(){
    verbList = ["jumps", "leaps", "hops", "slinks", "skips", "flies"]
    return verbList.random()
}

function getPreposition(){
    prepositionList = ["over", "around", "under", "with", "across", "behind", "for"]
    return prepositionList.random()
}

console.log(`The ${getAdjective()}, ${getColour()} ${getNoun()} ${getVerb()} ${getPreposition()} the ${getAdjective()} ${getNoun()}.`)
