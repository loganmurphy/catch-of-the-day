import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
  constructor(props){
    super(props);

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);

    this.state = {
      fish: {},
      order: {},
    };
  }

  addFish(fish){
    let fishes = {...this.state.fish};
    let timeStamp = Date.now();
    fishes[`fish-${timeStamp}`] = fish;
    this.setState({fish: fishes})
  }

  loadSamples(){
    this.setState({
      fish: SampleFishes
    });
  }

  render(){
    return(
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market'/>
          <ul className='list-of-fishes'>
            {Object.keys(this.state.fish).map(key => <Fish key={key} details={this.state.fish[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }

}

export default App;
