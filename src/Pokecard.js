import './Pokecard.css'

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ id, name, type, base_experience }) {
  const imgSrc = `${BASE_URL}${id}.png`

  return (
    <div className="Pokecard">
      <h5>{ name }</h5>
      <img src={ imgSrc } alt="Pokemon"/>
      <p>Type: { type }</p>
      <p>EXP: { base_experience }</p>
    </div>
  )
}

export default Pokecard