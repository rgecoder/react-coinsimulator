import React, {Component} from 'react';
import {choice} from './helpers';


class CoinContainer extends Component {
  static defaultProps = { 
    coins: [
      {side: 'heads', imgSrc: "http://216.33.167.179/silver_dollars/1980s_sba_dollar_obv.jpg"},
      {side: 'tails', imgSrc: "http://216.33.167.179/silver_dollars/1980s_sba_dollar_rev.jpg"}
    ]
  };
  
  
  constructor(props){
    super(props);
    
    
    this.state = {
      currCoin: null,
      nFlips:0,
      nHeads: 0,
      nTails: 0
    }
   
  }

  flipCoin=()=>{

    const newCoin = choice(this.props.coins);
    this.setState(st => {
      let newState = {
        ...st,
        currCoin: newCoin,
        nFlips: st.nFlips + 1
      }
      if (newCoin.side === "heads"){
        newState.nHeads += 1;
      } else {
        newState.nTails += 1;

      }
      

      
      
      
      
      return newState;
    });

  }
  
  handleClick=(e)=>{
    this.flipCoin();
  }

  render(){
    return (
      <div className = "CoinContainer">
        <h2>Let's Flip A Coin!</h2>
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>Out of {this.state.nFlips} flips, there has been {this.state.nHeads} heads and {this.state.nTails} tails</p>
      </div>
    
    )
  }

}

export default CoinContainer;