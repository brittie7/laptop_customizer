import React, { Component } from 'react';
import slugify from 'slugify';
import Parts from '../parts/parts.js'


export default class TechSpec extends Component {

     render(){
       console.log(this.props.features);
       console.log(this.props.feature);
      const options = this.props.features[this.props.feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <Parts itemHash = {itemHash} changeFeature = {this.props.changeFeature} feature ={this.props.feature} item={item} data ={this.props.data} />         
        );
      }); 

         return (
           <div>
            {/* <Parts itemHash = {this.props.itemHash} feature ={this.props.feature} item={this.props.item} data ={this.props.data} /> */}
            <fieldset className="feature" key={this.props.featureHash}>
              <legend className="feature__name">
                <h3>{this.props.feature}</h3>
              </legend>
              {options}
          </fieldset>
        </div>
         );
     }
}