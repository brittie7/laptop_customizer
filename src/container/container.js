import React, { Component } from 'react';
import slugify from 'slugify';
import Summary from '../summary/summary';
import Choices from '../choices/choices';
import Total from '../total/total';

// This object will allow us to
// easily convert numbers into US dollar values


export default class Container extends Component {
  
     render(){
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Choices itemHash = {itemHash} feature = {feature} data = {this.props.data} changeFeature = {this.props.changeFeature} item = {item}/>
      
          );
        });
    
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });

      const total = Object.keys(this.props.data.selected).reduce(
        (acc, curr) => acc + this.props.data.selected[curr].cost,
        0
      );
         return (
            <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary data = {this.props.data} />
            {/* {summary} */}
            <Total total = {total} />
          </section>
        </main>
         );
     }
}