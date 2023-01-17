import Pokedex from "./Pokedex";
import { goToList, shuffle, makePokemonHands, calculatePointsForHand, determineWinner } from "./helpers";


function Pokegame({ pokemon=goToList }) {
  const shuffledPokemon = shuffle(pokemon);

  const [ handOne, handTwo ] = makePokemonHands(shuffledPokemon);

  const handOnePoints = calculatePointsForHand(handOne);
  const handTwoPoints = calculatePointsForHand(handTwo);

  const [ winner, expPoints ] = determineWinner(handOnePoints, handTwoPoints);

  return (
    <div>
      <h1>The Winer is { winner } with { expPoints }!!!</h1>
      <h3>Hand One Scores { handOnePoints } </h3>
      <Pokedex pokemon={ handOne }/>
      <h3>Hand Two Scores { handTwoPoints } </h3>
      <Pokedex pokemon={ handTwo }/>
    </div>

  )
}

export default Pokegame;