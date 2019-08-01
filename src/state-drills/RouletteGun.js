import React from 'react';

class RouletteGun extends React.Component {
  state = {
    chamber: null,
    spinningTheChamber: false,
  };

  static defaultProps = {
    bulletInTheChamber: 8,
  }


  constructor(props) {
    super(props)
    console.log(props)
  }








  rouletteLogic() {
    console.log(this.state)
    if (this.state.spinningTheChamber === true) {
      return <p>Spinning the chamber and pulling the trigger! ....</p>
    } else if (this.state.chamber === this.props.bulletInTheChamber) {
      return <p>BANG!!!!</p>
    } else {
      return <p>You're safe</p>
    }
  }



  

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  spinTheChamber() {
    this.setState({spinningTheChamber: true})
    this.timeout = setTimeout(() => {
      this.setState({
        chamber: Math.ceil(Math.random() * 8),
        spinningTheChamber: false,
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.rouletteLogic()}
        <button onClick={
          () => this.spinTheChamber()
          }>Pull the trigger!</button>
      </div>
      )
  }
}


console.log('Roulette gun working');









export default RouletteGun;
