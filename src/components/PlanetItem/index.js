// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props

  return (
    <li>
      <div className="li-cont">
        <img
          src={eachPlanet.imageUrl}
          alt={`planet ${eachPlanet.name}`}
          className="img"
        />
        <h1>{eachPlanet.name}</h1>
        <p className="description">{eachPlanet.description}</p>
      </div>
    </li>
  )
}

export default PlanetItem
