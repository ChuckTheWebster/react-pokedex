const goToList = [
  {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
  {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
  {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
  {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
  {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
  {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
  {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
];

//This algorithm does a perfect Fisher-Yates shuffle:
function shuffle(items) {

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

//Make pokemon hands
function makePokemonHands(shuffledPokemon) {
  if (shuffledPokemon.length % 2 === 1) shuffledPokemon.pop();

  const pokemonPerHand = shuffledPokemon.length / 2;
  let handOne = [];
  let handTwo = [];

  for (let i = 0; i < pokemonPerHand; i++) {
    handOne = handOne.push(shuffledPokemon.pop());
  }

  handTwo = shuffledPokemon.slice();

  return [handOne, handTwo]
}

//Calculate points for hand
function calculatePointsForHand(hand) {
  let expPoints = 0;

  for (let pokemon of hand) {
    expPoints+= pokemon.base_experience
  }

  return expPoints;
}

//Determine Game winner and generate message
function determineWinner(handOnePoints, handTwoPoints) {
  let winnerExpPoints = handOnePoints > handTwoPoints ? handOnePoints : handTwoPoints;
  let winner = handOnePoints > handTwoPoints ? "Hand One" : "Hand Two";
  return [ winner, winnerExpPoints ]
}

export { goToList, shuffle, makePokemonHands, calculatePointsForHand, determineWinner }