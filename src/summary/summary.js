
import React, { Component } from 'react';
import CartItem from '../cartItem/cartItem';

 
export default class Summary extends Component {

     render(){
        const summary = Object.keys(this.props.data.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.data.selected[feature];
      
            return (
              <CartItem featureHash = {featureHash} selectedOption = {selectedOption} feature = {feature} />
            );
          });

          return (
              <div>{summary}</div>
          ) 
     }
}

