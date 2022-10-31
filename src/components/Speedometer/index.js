import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <div className="content-container">
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        </div>
        <div>
          <button
            type="button"
            className="button button1"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button button2"
            onClick={this.onBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
