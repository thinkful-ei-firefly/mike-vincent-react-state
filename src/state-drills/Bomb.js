import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
  };


  constructor(props) {
    super(props)
    this.state = {count: 0}
    console.log('constructor')
  }


  componentDidMount() {
    console.log('component did mount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      const newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  logicForBomb() {
    if (this.state.count >= 8) {
      clearInterval(this.interval)
      return <p>BOOM!!!!</p>;
    } else if (this.state.count %2 === 0) {
      return <p>{this.state.count} tick</p>;
    } else {
      return <p>{this.state.count} tock</p>;
    }
  }


  render() {
    console.log('render');
    return (
      this.logicForBomb()
    )
  }
}

console.log('Bomb running');

export default Bomb;



