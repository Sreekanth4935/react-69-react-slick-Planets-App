// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
// import Slider from 'react-slick'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        <ul className="ul-container">
          {planetsList.map(eachPlanet => (
            <div>
              <PlanetItem eachPlanet={eachPlanet} key={eachPlanet.id} />
            </div>
          ))}
        </ul>
      </Slider>
    </div>
  )
}

export default PlanetsSlider
