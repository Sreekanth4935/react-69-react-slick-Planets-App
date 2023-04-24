// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props

  return (
    <div>
      <li data-testid="planets">
        <div className="li-cont">
          <img
            src={eachPlanet.imageUrl}
            alt={eachPlanet.name}
            className="img"
          />
          <h1>{eachPlanet.name}</h1>
          <p className="description">{eachPlanet.description}</p>
        </div>
      </li>
    </div>
  )
}

export default PlanetItem
